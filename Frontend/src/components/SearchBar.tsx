import { useState } from "react";
import { Search } from "lucide-react";

function SearchBar() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${
        expanded ? "border rounded-sm border-green-700 flex items-center px-2 py-1" : ""
      }`}
    >
      <input
        type="search"
        className={`outline-none border-none flex-1 ${
          expanded ? "block" : "hidden"
        }`}
      />
      <Search
        className="cursor-pointer hover:text-green-700"
        onClick={toggleExpanded}
      />
    </div>
  );
}

export default SearchBar;
