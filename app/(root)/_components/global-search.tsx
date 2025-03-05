import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { popularCategories, popularTags } from "@/constants";
import { getSearchBlog } from "@/service/blog.service";
import { IBlog } from "@/types";
import { Loader2, Minus, Search } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";
import SearchCard from "@/components/cards/search";
import { Separator } from "@/components/ui/separator";

function GlobalSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();

    if (text && text.length > 2) {
      setIsLoading(true);
      const data = await getSearchBlog(text);
      setBlogs(data);
      setIsLoading(false);
    } else {
      setBlogs([]);
      setIsLoading(false);
    }
  };

  const debounceSearch = debounce(handleSearch, 500);

  return (
    <Drawer>
      <DrawerTrigger>
        <DrawerTitle>
          <div className="hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2">
            <span className="hidden md:flex font-normal text-md">Search</span>
            <Search className="w-4 h-4" />
          </div>
        </DrawerTitle>
      </DrawerTrigger>
      <DrawerContent>
        <div className="container max-w-6xl mx-auto py-12">
          <Input
            className="bg-secondary"
            placeholder="Type to search blog..."
            onChange={debounceSearch}
            disabled={isLoading}
          />
          {isLoading && <Loader2 className="animate-spin mx-auto mt-4" />}

          {blogs.length ? (
            <h1 className="text-3xl font-creteRound mt-6">
              {blogs.length} result found.
            </h1>
          ) : null}

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-2">
            {blogs &&
              blogs.map((blog) => <SearchCard key={blog.slug} {...blog} />)}
          </div>

          {blogs.length ? <Separator className="mt-2" /> : null}

          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <p className="font-creteRound text-2xl">
                See posts by categories
              </p>
              <Minus />
              <Link href={"/categories"}>
                <DrawerClose className="text-blue-500 underline hover:opacity-95">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularCategories.map((item) => (
                <Link href={`/categories/${item.slug}`} key={item.slug}>
                  <DrawerClose>
                    <Badge variant={"secondary"}>{item.name}</Badge>
                  </DrawerClose>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <p className="font-creteRound text-2xl">See posts by tags</p>
              <Minus />
              <Link href={"/tags"}>
                <DrawerClose className="text-blue-500 underline hover:opacity-95">
                  See all
                </DrawerClose>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((item) => (
                <Link href={`/tags/${item.slug}`} key={item.slug}>
                  <DrawerClose>
                    <Badge variant={"secondary"}>{item.name}</Badge>
                  </DrawerClose>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default GlobalSearch;
