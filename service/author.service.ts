import { IAuthor, IBlog } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";

const grapghqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

interface ITypeAuthor extends IAuthor {
  blogs: IBlog[];
}

export const getAuthors = cache(async () => {
  const query = gql`
    query MyQuery {
      authors {
        bio
        name
        image {
          url
        }
        slug
      }
    }
  `;

  const { authors } = await request<{ authors: IAuthor[] }>(grapghqlAPI, query);
  return authors;
});

export const getAuthor = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      author(where: { slug: $slug }) {
        bio
        image {
          url
        }
        name
        slug
        blogs {
          title
          author {
            bio
            name
            image {
              url
            }
            slug
          }
          category {
            name
            slug
          }
          description
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

  const { author } = await request<{
    author: ITypeAuthor;
  }>(grapghqlAPI, query, {
    slug,
  });
  return author;
};
