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
import { Minus, Search } from "lucide-react";
import Link from "next/link";

function GlobalSearch() {
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
          />

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
