import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const grapghqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export async function getBlogs() {
  const query = gql`
    query MyQuery {
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
  `;
  const { blogs } = await request<{ blogs: IBlog[] }>(grapghqlAPI, query);
  return blogs;
}

export async function getDetailedBlog(slug: string) {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        author {
          bio
          image {
            url
          }
          name
        }
        createdAt
        description
        image {
          url
        }
        slug
        title
        content {
          html
        }
        tag {
          name
          slug
        }
        category {
          name
          slug
        }
      }
    }
  `;

  const { blog } = await request<{ blog: IBlog }>(grapghqlAPI, query, { slug });
  return blog;
}
