import { HeaderItem } from "@/types/menu";
import { servicesData } from "@/app/api/services";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About", href: "/about", submenu: [
      { label: "About Us", href: "/about" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Contact Us", href: "/contact" },
    ]
  },
  {
    label: "Services",
    href: "/services",
    disableParentLink: true,
    submenu: servicesData.map(service => ({
      label: service.title,
      href: `/services/${service.slug}`
    }))
  },

  {
    label: "Blog",
    href: "/blog",
    submenu: [
      { label: "Blog list", href: "/blog" },
      { label: "Blog details", href: "/blog/Blog_1" },
    ],
  },
];  