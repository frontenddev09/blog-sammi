import BlogCard from "@/components/cards/blog";
import { getBlogsByCategory } from "@/service/category.service";
import { IBlog } from "@/types";
import { Dot, Home } from "lucide-react";
import Link from "next/link";

async function Page({ params: { slug } }: { params: { slug: string } }) {
  const category = await getBlogsByCategory(slug);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[40vh] flex items-center justify-end flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound mt-2">
          <span>{category.name}</span>
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
          <p className="text-muted-foreground">Categories</p>
        </div>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24">
        {category.blogs.map((blog: IBlog) => (
          <BlogCard key={blog.title} {...blog} isVertical />
        ))}
      </div>
    </div>
  );
}

export default Page;
