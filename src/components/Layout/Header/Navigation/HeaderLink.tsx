"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.submenu && item.disableParentLink ? (
        <div
          className={`text-base flex py-2 font-normal hover:text-primary dark:hover:text-primary cursor-pointer items-center gap-1 ${path === item.href || (path.startsWith(item.href) && item.href !== "/") || item.submenu?.some(sub => path === sub.href || path.startsWith(sub.href + "/"))
            ? "text-primary dark:text-primary!"
            : "text-black dark:text-white"
            }`}
        >
          {item.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            className="mt-0.5"
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
        </div>
      ) : (
        <Link
          href={item.href}
          className={`text-base flex py-2 font-normal hover:text-primary dark:hover:text-primary text-black dark:text-white items-center gap-1 ${path === item.href || (path.startsWith(item.href) && item.href !== "/") || item.submenu?.some(sub => path === sub.href || path.startsWith(sub.href + "/"))
              ? "text-primary dark:text-primary!"
              : "  "
            }`}
        >
          {item.label}
          {item.submenu && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="mt-0.5"
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
          )}
        </Link>
      )}
      {submenuOpen && (
        <div
          className={`absolute py-2 left-0 mt-0.5 top-8 w-60 bg-white dark:bg-darklight shadow-lg dark:shadow-dark-md rounded-lg `}
          data-aos="fade-up"
          data-aos-duration="400"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2 text-[15px]  ${path === subItem.href || path === `${subItem.href}/`
                ? "text-primary dark:text-primary font-medium"
                : "text-black hover:bg-gray-200 dark:hover:bg-midnight_text dark:text-white hover:text-dark dark:hover:text-white"
                }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
