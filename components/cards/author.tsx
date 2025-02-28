import { cn } from "@/lib/utils";
import { IAuthor } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props extends IAuthor {
  isAuthorPage: boolean;
  length: number;
}

function AuthorCard(author: Props) {
  return (
    <div
      className={`flex flex-col space-y-2 text-center ${cn(
        author.isAuthorPage ? "w-96" : "w-52"
      )}`}
    >
      <div
        className={`w-full relative ${cn(
          author.isAuthorPage ? "h-96" : "h-52"
        )}`}
      >
        <Image
          src={author.image.url}
          alt="chris"
          fill
          className="object-cover rounded-md grayscale hover:grayscale-0 transition-all"
        />
      </div>
      <h2 className="text-2xl font-creteRound">{author.name}</h2>
      {author.isAuthorPage && <p>{author.bio}</p>}
      <p className="text-muted-foreground">
        <span className="font-bold text-white">{author.length}</span> Published
        posts
      </p>
      {!author.isAuthorPage && (
        <Link
          href={`/authors/${author.slug}`}
          className="flex items-center justify-center gap-2"
        >
          <p className="text-blue-500 underline">See more</p>
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}

export default AuthorCard;
