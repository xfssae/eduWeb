import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { ShoppingCartIcon } from "lucide-react";
import Search from "./Search";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <div className="border-b-2 shadow-sm py-6 ">
      <div className=" container mx-auto flex justify-between items-center">
        <div className=" container mx-auto flex justify-between items-center">
          <Link
            to="/"
            className=" text-3xl font-bold tracking-tight text-black"
          >
            <img src={logo} />
          </Link>
        </div>
        <div className=" container mx-auto flex justify-between gap-4 items-center">
          <Link to="/" className="text- font-bold tracking-tight text-black text-base">
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
    </div>
  );
}
