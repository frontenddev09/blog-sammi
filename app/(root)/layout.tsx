import { ChildProps } from "@/types";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

function Layout({ children }: ChildProps) {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
