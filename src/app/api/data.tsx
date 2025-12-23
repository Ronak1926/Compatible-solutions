import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },

    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on Google platform",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },
];

export const Progress = [
    { title: 'UX Research and Testing', Progress: 95 },
    { title: 'Product Management', Progress: 84 },
    { title: 'UI & Visual Design', Progress: 90 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Custom SaaS Development',
        description: 'Build scalable cloud-based software solutions with modern MERN stack. From MVP to enterprise-grade platforms.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Enterprise Web Applications',
        description: 'Robust, secure web applications for large organizations. Designed for performance, scalability, and reliability.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'E-commerce Platforms',
        description: 'Full-featured online stores with payment integration, inventory management, and customer analytics.',
    },
]
