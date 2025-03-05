import { IBlog } from "@/types";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DrawerClose } from "../ui/drawer";

const SearchCard = (blog: IBlog) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <DrawerClose>
        <div className="flex flex-col space-y-2">
          <Image
            src={blog.image.url}
            alt={blog.title}
            width="250"
            height="250"
            className="rounded-md shadow-sm dark:shadow-white/10"
          />
          <div className="flex gap-2">
            <Calendar className="w-4 h-4" />
            <p className="text-sm">
              {format(new Date(blog.createdAt), "MMM, dd yyyy")}
            </p>
          </div>
        </div>
      </DrawerClose>
    </Link>
  );
};
export default SearchCard;
