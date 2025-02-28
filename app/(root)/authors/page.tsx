import { Dot, Home } from "lucide-react";
import Link from "next/link";

const AuthorsPage = async () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative min-h-[40vh] flex items-center justify-end flex-col">
        <h2 className="text-center text-4xl section-title font-creteRound mt-2">
          <span>Authors</span>
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
    </div>
  );
};

export default AuthorsPage;
