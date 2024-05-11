import SearchBar from "./Tools/searchBar";

import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <header className=" bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
          Imaginarium
        </h1>
        <SearchBar />
        <div>
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
            Contents
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <UserIcon className="h-6 w-6 text-black" />
          <ShoppingCartIcon className="h-6 w-6 text-black" />
        </div>
      </div>
    </header>
  );
}
