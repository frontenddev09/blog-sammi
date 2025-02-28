import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const Mobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex md:hidden" asChild>
        <SheetTitle>
          <Button size={"icon"} variant={"ghost"}>
            <Menu />
          </Button>
        </SheetTitle>
      </SheetTrigger>

      <SheetContent side={"left"}>
        <Link href={"/"}>
          <h1 className="text-4xl font-creteRound">Sammi</h1>
        </Link>
        <Separator className={"my-3"} />
        <div className="flex flex-col space-y-3">
          {navLinks.map((nav) => (
            <Link
              href={nav.route}
              key={nav.route}
              className="hover:bg-blue-400/20 py-2 px-3 transition-colors cursor-pointer flex items-center gap-2"
            >
              <nav.icon className="w-5 h-5" />
              {nav.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
