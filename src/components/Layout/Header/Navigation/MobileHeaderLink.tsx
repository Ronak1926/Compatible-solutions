import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const path = usePathname();

  return (
    <>
      {item.submenu ? (
        <div className="relative block w-full">
          {item.disableParentLink ? (
            <button
              onClick={handleToggle}
              className={`flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-grey dark:text-opacity-70 focus:outline-hidden ${path === item.href || (path.startsWith(item.href) && item.href !== "/") || item.submenu?.some(sub => path === sub.href || path.startsWith(sub.href + "/"))
                ? "bg-primary text-white dark:text-white!"
                : "  "
                }`}
            >
              {item.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m7 10l5 5l5-5"
                />
              </svg>
            </button>
          ) : (
            <div className={`flex items-center justify-between w-full rounded-md ${path === item.href || (path.startsWith(item.href) && item.href !== "/") || item.submenu?.some(sub => path === sub.href || path.startsWith(sub.href + "/"))
              ? "bg-primary text-white dark:text-white!"
              : "  "
              }`}>
              <Link
                href={item.href}
                className={`flex-grow py-2 px-3 text-black dark:text-grey dark:text-opacity-70 ${path === item.href || (path.startsWith(item.href) && item.href !== "/") || item.submenu?.some(sub => path === sub.href || path.startsWith(sub.href + "/"))
                    ? "text-white dark:text-white!"
                    : ""
                  }`}
              >
                {item.label}
              </Link>
              <button
                onClick={handleToggle}
                className="p-2 focus:outline-hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  className={path === item.href || (path.startsWith(item.href) && item.href !== "/") || item.submenu?.some(sub => path === sub.href || path.startsWith(sub.href + "/")) ? "text-white" : ""}
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m7 10l5 5l5-5"
                  />
                </svg>
              </button>
            </div>
          )}
          {submenuOpen && (
            <div className="bg-white p-2 w-full">
              {item.submenu.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  className={`block py-2 text-gray-500 hover:bg-gray-200 ${path === subItem.href ? "text-primary font-semibold" : ""
                    }`}
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <Link href={item.href} className="relative block w-full">
          <button
            className={`flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-grey dark:text-opacity-70 focus:outline-hidden ${path === item.href || (path.startsWith(item.href) && item.href !== "/")
              ? "bg-primary text-white dark:text-white!"
              : "  "
              }`}
          >
            {item.label}
          </button>
        </Link>
      )}
    </>
  );
};

export default MobileHeaderLink;
