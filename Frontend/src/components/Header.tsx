import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";


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
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}
