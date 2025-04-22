import { FaCarrot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  footerLinksData,
  footerSocialMediaLinksData,
} from "@/data/footerLinksData";

function Footer() {
  console.log(footerLinksData);

  return (
    <>
      <footer className="bg-green-700">
        <div className="max-w-[1440px] mx-auto py-8">
          <nav className="flex flex-wrap justify-evenly gap-4 p-4 text-white [&>*]:basis-full [&>*]:sm:basis-auto ">
            <div className="my-auto">
              <h2 className="text-5xl font-bold ">
                <FaCarrot className="inline-block mr-2" />
                FreshDrop
              </h2>
              <div className="flex items-center gap-4 sm:justify-center mt-2">
                {footerSocialMediaLinksData.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Link key={index} to={link.href ?? "#"}>
                      <Icon className="transition-all duration-300 hover:scale-125" />
                    </Link>
                  );
                })}
              </div>
            </div>
            {footerLinksData.map((link, index) => {
              console.log(link);
              return (
                <div key={index} className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold">{link.title}</h4>
                  {link.links.map((item, index) => {
                    return (
                      <Link
                        className="transition-all duration-300 hover:opacity-60"
                        key={index}
                        to={item.href ?? "#"}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </nav>
        </div>
        <div className="bg-green-800">
          <div className="max-w-[1440px] mx-auto py-4 text-white">
            <div className="text-center">
              &copy; {new Date().getFullYear()} FreshDrop. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
