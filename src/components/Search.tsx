import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="relative w-full max-w-[512px]">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
      <Input
        className="pl-10 bg-white"
        type="text"
        placeholder="Search Products and Stores"
      />
    </div>
  );
}
export default Search;
