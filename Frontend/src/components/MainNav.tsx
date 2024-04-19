import { Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function MainNav() {
  return (
    <div className="container flex">
      <div className=" container mx-auto flex justify-between gap-4 items-center hover:text-green-700">
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-black hover:text-green-700"
        >
          Home
        </Link>
        <Link to="/" className="text-base font-bold tracking-tight text-black hover:text-green-700">
          About
        </Link>
        <Link to="/" className="text-base font-bold tracking-tight text-black hover:text-green-700">
          Course
        </Link>
        <Link to="/" className="text-base font-bold tracking-tight text-black hover:text-green-700">
          Blog
        </Link>
        <Link to="/" className="text-base font-bold tracking-tight text-black hover:text-green-700">
          Contact
        </Link>
      </div>
      <div className=" container mx-auto flex justify-between gap-4 items-center">
        <SearchBar/>
        <ShoppingCart className="text-black cursor-pointer text-2xl hover:text-green-700" />
        <Button className="bg-green-700 px-8">Login</Button>
      </div>
    </div>
  );
}
