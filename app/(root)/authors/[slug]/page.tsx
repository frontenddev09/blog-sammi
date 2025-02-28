import AuthorCard from "@/components/cards/author";
import BlogCard from "@/components/cards/blog";
import { getAuthor } from "@/service/author.service";
import { IBlog } from "@/types";
import { Dot, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const author = await getAuthor(slug);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[40vh] flex items-center justify-end flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound mt-2">
          <span>{author.name}</span>
        </h2>

        <div className="flex gap-1 items-center mt-4">
          <Home className="w-4 h-4" />
          <Link
            href={"/"}
            className="opacity-90 hover:underline hover:opacity-100"
          >
            Home
          </Link>
          <Dot />
          <p className="text-muted-foreground">Authors</p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <AuthorCard
          key={author.slug}
          {...author}
          length={author.blogs.length}
          isAuthorPage
        />
      </div>
      <div className="relative min-h-[40vh] flex items-center justify-end flex-col mt-24 max-md:mt-16">
        <h2 className="text-center text-4xl section-title font-creteRound mt-2">
          <span>Published posts</span>
        </h2>
        <div className="flex flex-col space-y-24 mt-24 max-md:mt-16 max-md:px-6">
          {author.blogs.map((blog: IBlog) => (
            <BlogCard key={blog.title} {...blog} isVertical={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
