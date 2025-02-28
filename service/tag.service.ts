import { IBlog, ITypeCategoryAndTags } from "@/types";
import request, { gql } from "graphql-request";

const grapghqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export const getTags = async () => {
  const query = `
    query MyQuery {
    tags {
        name
        slug
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
      }
    }
  `;

  const { tags } = await request<{ tags: ITypeCategoryAndTags[] }>(
    grapghqlAPI,
    query
  );
  return tags;
};

export const getBlogsByTag = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
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

  const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
    grapghqlAPI,
    query,
    {
      slug,
    }
  );
  return tag;
};
