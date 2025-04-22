import { FaCarrot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center gap-4 bg-orange-50 p-4">
        <h2 className="text-5xl font-bold text-green-700">
          <Link to="/" className="flex">
            <span className="text-slate-600 mr-2">
              <FaCarrot />
            </span>
            <span>Fresh</span>
            <span className="text-orange-600">Drop</span>
          </Link>
        </h2>
        <Search />
        <div className="flex gap-4 text-slate-600 [&>*]:font-semibold [&>*]:hover:text-orange-600 [&>*]:hover:transition-all [&>*]:hover:duration-300">
          <Link to="/drivers">Products</Link>
          <Link to="/drivers">Department</Link>
          <Link to="/drivers">Contact Us</Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
