import { SearchIcon } from "lucide-react";

function Search() {
  return (
    <div className="border rounded-md border-green-700 flex items-center">
      <input type="search" />
      <SearchIcon/>
    </div>
  );
}

export default Search