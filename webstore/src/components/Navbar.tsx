import SearchBar from "./Tools/searchBar";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import UserIcon from "./Icons/UserIcon";
import ShoppingCartIcon from "./Icons/SearchIcon";

export default function Navbar() {
  return (
    <header className=" bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 md:p-2">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl bg-red-600 text-white p-1">
          Imaginarium
        </h1>
        <SearchBar />
        <div>
          <nav>
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              Home
            </Link>
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              Shop
            </Link>
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              About
            </Link>
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
            <Button className="rounded-full" size="icon" variant="ghost">
              <ShoppingCartIcon className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <UserIcon className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </div>
      </div>
    </header>
  );
}