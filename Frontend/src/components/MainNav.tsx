import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./Username";

export default function MainNav() {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  return (
    <div className="container flex">
      <div className=" container mx-auto flex justify-between gap-4 items-center hover:text-green-700">
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-black hover:text-green-700"
        >
          Home
        </Link>
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-black hover:text-green-700"
        >
          About
        </Link>
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-black hover:text-green-700"
        >
          Course
        </Link>
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-black hover:text-green-700"
        >
          Blog
        </Link>
        <Link
          to="/"
          className="text-base font-bold tracking-tight text-black hover:text-green-700"
        >
          Contact
        </Link>
      </div>
      <div className=" container mx-auto flex justify-between gap-4 items-center">
        <SearchBar />
        <ShoppingCart className="text-black cursor-pointer text-2xl hover:text-green-700" />
        {isAuthenticated ? (
          <UsernameMenu />
        ) : (
          <Button
            className="bg-green-700 px-8"
            onClick={async () => await loginWithRedirect()}
          >
            Log in
          </Button>
        )}
      </div>
    </div>
  );
}
