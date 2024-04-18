import { Search, ShoppingCartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function MainNav() {
  return (
    <div className="container flex">
      <div className=" container mx-auto flex justify-between gap-4 items-center">
        <Link
          to="/"
          className="text- font-bold tracking-tight text-black text-base"
        >
          Home
        </Link>
        <Link to="/" className="text-base font-bold tracking-tight text-black">
          About
        </Link>
        <Link to="/" className="text-base font-bold tracking-tight text-black">
          Course
        </Link>
        <Link to="/" className="text-base font-bold tracking-tight text-black">
          Blog
        </Link>
        <Link to="/" className="text-base font-bold tracking-tight text-black">
          Contact
        </Link>
      </div>
      <div className=" container mx-auto flex justify-between gap-4 items-center">
        <Search />
        <ShoppingCartIcon className="text-black text-2xl" />
        <Button className="bg-green-700 px-8">Login</Button>
      </div>
    </div>
  );
}
