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
      className="bg-secondary p-4 md:p-8 shadow-xl dark:shadow-white/10 rounded-sm flex items-center gap-2 justify-center text-2xl hover:bg-secondary/80 transition-colors"
    >
      {item.type === "tags" ? <Tag /> : <Layers2 />}
      <h1 className="text-2xl font-creteRound">{item.name}</h1>
    </Link>
  );
};

export default CategoriesTagsCard;
