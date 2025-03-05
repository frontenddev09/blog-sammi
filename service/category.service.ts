import { IBlog, ITypeCategoryAndTags } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";

const grapghqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getCategories = async () => {
  const query = `
    query MyQuery {
    categories {
        name
        slug
         blogs {
          id
          
        }
      }
    }
  `;

  const { categories } = await request<{ categories: ITypeCategoryAndTags[] }>(
    grapghqlAPI,
    query
  );
  return categories;
};

export const getBlogsByCategory = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        blogs {
          title
          description
          author {
            bio
            name
            image {
              url
            }
          }
          category {
            name
            slug
          }
          tag {
            name
            slug
          }
          createdAt
          image {
            url
          }
          content {
            html
          }
          slug
        }
        name
      }
    }
  `;

  const { category } = await request<{
    category: { blogs: IBlog[]; name: string };
  }>(grapghqlAPI, query, {
    slug,
  });
  return category;
});
