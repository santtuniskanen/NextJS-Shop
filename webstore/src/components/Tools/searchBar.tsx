import { Input } from "./Input";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  return (
    <div className="flex-1 max-w-md">
      <form>
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 focus:border-primary focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:focus:border-primary"
            placeholder="Search products..."
            type="search"
          />
        </div>
      </form>
    </div>
  );
}
