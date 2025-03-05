import { ITypeCategoryAndTags } from "@/types";
import { Layers2, Tag } from "lucide-react";
import Link from "next/link";

interface Props extends ITypeCategoryAndTags {
  type: "categories" | "tags";
}

const CategoriesTagsCard = (item: Props) => {
  return (
    <Link
      href={`/${item.type}/${item.slug}`}
      className="bg-secondary p-4 md:p-6 shadow-xl dark:shadow-white/10 rounded-md flex flex-col items-center justify-center space-y-2 text-2xl hover:bg-secondary/80 transition-colors"
    >
      {item.type === "tags" ? <Tag /> : <Layers2 />}
      <h1 className="text-xl font-creteRound">{item.name}</h1>
      <p className="text-sm">Published posts {item.blogs.length}</p>
    </Link>
  );
};

export default CategoriesTagsCard;
