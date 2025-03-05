import { IArchivedBlog, IBlog } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";

const grapghqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

export async function getSearchBlog(title: string) {
  const query = gql`
    query getSearchBlog($title: String!) {
      blogs(where: { title_contains: $title }) {
        id
        image {
          url
        }
        title
        slug
        createdAt
      }
    }
  `;
  const { blogs } = await request<{ blogs: IBlog[] }>(grapghqlAPI, query, {
    title,
  });
  return blogs;
}

export async function getBlogs() {
  const query = gql`
    query MyQuery {
      blogs(where: { archive: false }) {
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

export async function getArchiveBlogs() {
  const query = gql`
    query MyQuery {
      blogs(where: { archive: true }) {
        title
        createdAt
        slug
      }
    }
  `;
  const { blogs } = await request<{ blogs: IBlog[] }>(grapghqlAPI, query);

  const filteredBlogs = blogs.reduce(
    (acc: { [year: string]: IArchivedBlog }, blog: IBlog) => {
      const year = blog.createdAt.substring(0, 4);
      if (!acc[year]) {
        acc[year] = { year, blogs: [] };
      }
      acc[year].blogs.push(blog);
      return acc;
    },
    {}
  );
  const results: IArchivedBlog[] = Object.values(filteredBlogs);
  return results;
}
export const getDetailedBlog = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        author {
          bio
          image {
            url
          }
          name
          slug
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

  const { blog } = await request<{ blog: IBlog }>(grapghqlAPI, query, {
    slug,
  });
  return blog;
});
