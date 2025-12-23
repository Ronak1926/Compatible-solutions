import { Service } from "./services";

export const serviceDetailsData: Service[] = [
    {
        id: "1",
        title: "Custom Software Development",
        slug: "custom-software-development",
        description: "Tailor-made software solutions designed to meet your specific business needs. We build scalable, secure, and high-performance applications that drive growth.",
        details: [
            "In today's fast-paced digital landscape, off-the-shelf software often falls short of meeting unique business requirements. Our custom software development service is dedicated to bridging this gap by creating bespoke solutions that align perfectly with your operational goals. We take the time to understand your workflows, pain points, and strategic vision, ensuring that every line of code we write contributes to your success.",
            "Our team of expert engineers leverages the latest technologies and architectural patterns to build robust, scalable, and secure applications. Whether you need a complex enterprise resource planning (ERP) system, a customer relationship management (CRM) tool, or a specialized internal application, we have the expertise to deliver. We prioritize code quality, maintainability, and performance, ensuring your software remains a valuable asset for years to come.",
            "We follow an agile development methodology, which allows for flexibility and continuous improvement throughout the project lifecycle. This means you are involved at every step, providing feedback and ensuring the final product meets your expectations. From initial concept to deployment and ongoing support, we are your partners in digital transformation, helping you optimize processes and achieve a competitive edge."
        ],
        icon: "solar:code-bold-duotone",
        image: "/images/services/ux-design-product_1.svg",
        features: [
            { title: "Scalable Architecture", description: "Built to grow with your business using modern microservices or modular monolith patterns." },
            { title: "Cloud Native", description: "Optimized for cloud environments (AWS, Azure, GCP) to ensure reliability and cost-efficiency." },
            { title: "Security First", description: "Implemented with industry-standard security practices to protect your data and users." },
            { title: "Agile Delivery", description: "Iterative development process ensuring rapid delivery and adaptability to change." }
        ],
        subServices: [
            { title: "Enterprise Software", description: "Large-scale solutions for complex business operations." },
            { title: "SaaS Development", description: "Cloud-based software delivery models." },
            { title: "Legacy Modernization", description: "Upgrading outdated systems to modern tech stacks." },
            { title: "API Integration", description: "Connecting disparate systems for seamless data flow." },
            { title: "Cloud Solutions", description: "Scalable and secure cloud-native applications." },
            { title: "Database Design", description: "Optimized database schemas for performance." }
        ],
        process: [
            { title: "Discovery", description: "Understanding your business goals and requirements." },
            { title: "Planning", description: "Defining the architecture and project roadmap." },
            { title: "Design", description: "Creating intuitive and user-friendly interfaces." },
            { title: "Development", description: "Writing clean, efficient, and scalable code." },
            { title: "Testing", description: "Ensuring quality and reliability through rigorous testing." },
            { title: "Deployment", description: "Launching your solution and providing ongoing support." }
        ],
        benefits: [
            "Increased operational efficiency",
            "Competitive advantage through unique features",
            "Seamless integration with existing systems",
            "Full ownership of source code"
        ]
    },
    {
        id: "2",
        title: "Mobile App Development",
        slug: "mobile-app-development",
        description: "Create engaging mobile experiences for iOS and Android. We develop native and cross-platform apps that users love.",
        details: [
            "Mobile devices have become the primary touchpoint for digital interaction, making a strong mobile presence essential for any modern business. Our mobile app development service focuses on creating intuitive, high-performance applications that captivate users and drive engagement. Whether you're targeting iOS, Android, or both, we deliver seamless experiences that look and feel native on every device.",
            "We utilize cutting-edge cross-platform frameworks like React Native and Flutter to maximize code reuse and reduce time-to-market without compromising on quality. This approach allows us to maintain a single codebase while delivering the performance and user experience of native apps. Our development process includes rigorous testing across a wide range of devices to ensure your app performs flawlessly under all conditions.",
            "Beyond just coding, we help you with the entire mobile lifecycle, from strategy and design to app store submission and post-launch maintenance. We integrate advanced features such as push notifications, geolocation, and offline capabilities to enhance functionality. Let us help you put your brand in the palm of your customers' hands with a mobile app that stands out in the crowded marketplace."
        ],
        icon: "solar:smartphone-bold-duotone",
        image: "/images/services/ux-design-product_2.svg",
        features: [
            { title: "Cross-Platform", description: "Using React Native or Flutter to deploy to both iOS and Android from a single codebase." },
            { title: "Native Performance", description: "Optimized for smooth animations and fast load times on all devices." },
            { title: "Offline Mode", description: "Robust offline capabilities ensuring functionality even without internet connection." },
            { title: "Push Notifications", description: "Integrated engagement tools to keep your users coming back." }
        ],
        subServices: [
            { title: "iOS Development", description: "Native apps for iPhone and iPad." },
            { title: "Android Development", description: "Native apps for the Android ecosystem." },
            { title: "React Native", description: "Cross-platform apps with a native feel." },
            { title: "Flutter", description: "Beautiful UI with a single codebase." },
            { title: "App Maintenance", description: "Ongoing support and updates." },
            { title: "UI/UX for Mobile", description: "Designing intuitive mobile interfaces." }
        ],
        process: [
            { title: "Strategy", description: "Defining the app concept and target audience." },
            { title: "UI/UX Design", description: "Designing engaging mobile experiences." },
            { title: "Development", description: "Building the app for iOS and Android." },
            { title: "Testing", description: "Ensuring performance across devices." },
            { title: "Launch", description: "Publishing to App Store and Google Play." },
            { title: "Support", description: "Monitoring and updating the app." }
        ],
        benefits: [
            "Wider market reach",
            "Enhanced customer engagement",
            "Direct marketing channel",
            "Improved brand recognition"
        ]
    },
    {
        id: "3",
        title: "Product Engineering",
        slug: "product-engineering",
        description: "End-to-end product development from ideation to launch. We help startups and enterprises build successful digital products.",
        details: [
            "Turning a visionary idea into a market-ready product requires more than just technical skill; it demands a strategic approach to product engineering. We partner with startups and enterprises to guide them through the entire product lifecycle, from the initial spark of an idea to launch and scaling. Our multidisciplinary team combines engineering excellence with product management expertise to build solutions that solve real user problems.",
            "We start with a Minimum Viable Product (MVP) approach, focusing on core features that deliver immediate value. This allows for rapid market validation and feedback loops, reducing the risk of building features that users don't need. As the product gains traction, we help you scale the architecture, optimize performance, and add new capabilities based on data-driven insights.",
            "Our product engineering philosophy emphasizes user-centric design and continuous innovation. We employ modern DevOps practices to ensure frequent, reliable releases, keeping your product ahead of the curve. Whether you're disrupting an industry or modernizing a legacy system, our product engineering services provide the technical foundation and strategic guidance you need to succeed."
        ],
        icon: "solar:rocket-bold-duotone",
        image: "/images/services/perfomance-optimization.svg",
        features: [
            { title: "MVP Development", description: "Rapid prototyping and MVP development to validate your market fit." },
            { title: "Product Strategy", description: "Strategic planning and roadmap development aligned with business goals." },
            { title: "User-Centric Design", description: "Focus on user experience and usability testing throughout the lifecycle." },
            { title: "Lifecycle Management", description: "Continuous improvement and maintenance of your product." }
        ],
        subServices: [
            { title: "MVP Development", description: "Quickly validate your product idea." },
            { title: "Product Strategy", description: "Roadmap and vision alignment." },
            { title: "Prototyping", description: "Visualizing the product before coding." },
            { title: "Scaling", description: "Growing your product to millions of users." },
            { title: "Re-engineering", description: "Improving existing products." },
            { title: "Technical Consulting", description: "Expert advice on technology choices." }
        ],
        process: [
            { title: "Ideation", description: "Brainstorming and validating ideas." },
            { title: "Market Research", description: "Analyzing competitors and user needs." },
            { title: "MVP Build", description: "Developing core features for launch." },
            { title: "Feedback Loop", description: "Gathering user feedback for iteration." },
            { title: "Scaling", description: "Expanding features and infrastructure." },
            { title: "Optimization", description: "Continuous improvement based on data." }
        ],
        benefits: [
            "Faster time to market",
            "Reduced development risk",
            "Higher user satisfaction",
            "Data-driven decision making"
        ]
    },
    {
        id: "4",
        title: "UX/UI Design",
        slug: "ux-ui-design",
        description: "Crafting intuitive and beautiful user interfaces. We focus on creating seamless user journeys that convert.",
        details: [
            "Great design is not just about aesthetics; it's about how a product works and how it makes the user feel. Our UX/UI design services are rooted in a deep understanding of user behavior and psychology. We create interfaces that are not only visually stunning but also intuitive, accessible, and designed to guide users effortlessly toward their goals.",
            "Our design process begins with comprehensive user research and persona development. We map out user journeys and create wireframes to visualize the structure and flow of the application. Through iterative prototyping and usability testing, we refine the experience to ensure it meets user needs and expectations. We believe that every interaction counts, and we pay attention to the smallest details to create a cohesive and delightful experience.",
            "We also focus on creating scalable design systems that ensure consistency across your entire digital ecosystem. By establishing a shared language of design components and guidelines, we streamline the development process and maintain brand integrity. Whether you need a complete redesign or a UI refresh, our team brings creativity and strategic thinking to elevate your digital presence."
        ],
        icon: "solar:palette-bold-duotone",
        image: "/images/services/ux-design-product_1.svg",
        features: [
            { title: "User Research", description: "In-depth research to understand your users' needs and behaviors." },
            { title: "Wireframing & Prototyping", description: "Visualizing concepts quickly to iterate on design solutions." },
            { title: "Design Systems", description: "Creating consistent and reusable design components for scalability." },
            { title: "Interaction Design", description: "Designing engaging micro-interactions and animations." }
        ],
        subServices: [
            { title: "User Research", description: "Understanding user behaviors and needs." },
            { title: "Wireframing", description: "Blueprints of the user interface." },
            { title: "Visual Design", description: "Creating stunning aesthetics." },
            { title: "Prototyping", description: "Interactive mockups for testing." },
            { title: "Usability Testing", description: "Validating designs with real users." },
            { title: "Design Audits", description: "Reviewing existing designs for improvements." }
        ],
        process: [
            { title: "Empathize", description: "Understanding the user." },
            { title: "Define", description: "Stating the user needs and problems." },
            { title: "Ideate", description: "Challenging assumptions and creating ideas." },
            { title: "Prototype", description: "Starting to create solutions." },
            { title: "Test", description: "Trying solutions out." },
            { title: "Implement", description: "Bringing the design to life." }
        ],
        benefits: [
            "Improved conversion rates",
            "Lower support costs",
            "Increased customer loyalty",
            "Stronger brand identity"
        ]
    },
    {
        id: "5",
        title: "Web App Development",
        slug: "web-app-development",
        description: "Modern web applications built with Next.js and React. Fast, SEO-friendly, and responsive across all devices.",
        details: [
            "The web has evolved into a powerful platform for delivering complex applications that rival desktop software. Our web app development service leverages the latest technologies, such as Next.js and React, to build high-performance, responsive, and SEO-friendly applications. We focus on creating fast, secure, and scalable web solutions that provide a superior user experience across all devices and screen sizes.",
            "We specialize in building Single Page Applications (SPAs) and Progressive Web Apps (PWAs) that offer app-like functionality directly in the browser. This includes features like offline access, push notifications, and home screen installation. Our expertise in Server-Side Rendering (SSR) and Static Site Generation (SSG) ensures that your application loads instantly and ranks well on search engines.",
            "Integration is key in modern web development. We seamlessly connect your web application with third-party APIs, payment gateways, and backend services to create a unified ecosystem. Whether you're building a customer portal, a SaaS platform, or an e-commerce site, our web development team delivers code that is clean, maintainable, and built to scale with your business."
        ],
        icon: "solar:monitor-bold-duotone",
        image: "/images/services/ux-design-product_2.svg",
        features: [
            { title: "SSR & SSG", description: "Leveraging Next.js for optimal performance and SEO ranking." },
            { title: "PWA Support", description: "Progressive Web App capabilities for app-like experience on the web." },
            { title: "API Integration", description: "Seamless integration with third-party APIs and backend services." },
            { title: "Real-time Features", description: "Implementing WebSockets for live updates and collaboration." }
        ],
        subServices: [
            { title: "Web Design", description: "Get the most interactive and lucid design." },
            { title: "Web Technologies", description: "Latest web tools and technologies." },
            { title: "Web Tools", description: "Equipped with all the latest web tools." },
            { title: "API Development", description: "Boost the efficiency of your web application." },
            { title: "PWA", description: "Top-notch progressive web application development." },
            { title: "E-commerce Solutions", description: "Building robust online stores." }
        ],
        process: [
            { title: "Kick-off Research", description: "Idea, Consultant, Research, Goal." },
            { title: "Design", description: "System Architecture Design, Wireframing." },
            { title: "Development", description: "Functional Implementation, Software Coding." },
            { title: "Testing", description: "Quality Assurance, Trouble shooting." },
            { title: "Deployment", description: "Launch, Beta Live & Live." },
            { title: "Maintenance", description: "Monitoring, Feedback, Analysis." }
        ],
        benefits: [
            "Global accessibility",
            "Lower maintenance costs",
            "Easy updates and deployment",
            "High scalability"
        ]
    },
    {
        id: "6",
        title: "QA & Testing",
        slug: "qa-testing",
        description: "Comprehensive quality assurance services to ensure your software is bug-free and reliable.",
        details: [
            "Quality is the cornerstone of any successful software product. Our QA & Testing services are designed to identify and resolve issues before they reach your users, protecting your brand reputation and ensuring a smooth user experience. We employ a comprehensive approach that combines automated and manual testing strategies to cover every aspect of your application.",
            "Our automated testing frameworks allow for continuous integration and delivery (CI/CD), ensuring that new code is thoroughly tested as soon as it's committed. This speeds up the development cycle and catches regressions early. We also conduct rigorous manual testing to evaluate usability, accessibility, and edge cases that automated scripts might miss. From functional testing to performance load testing, we leave no stone unturned.",
            "Security is a top priority in today's digital landscape. Our testing services include security audits and vulnerability assessments to identify potential risks and ensure compliance with industry standards. We provide detailed reports and actionable insights, helping your development team fix issues efficiently. With our QA expertise, you can launch with confidence, knowing your software is robust, secure, and ready for the real world."
        ],
        icon: "solar:check-circle-bold-duotone",
        image: "/images/services/perfomance-optimization.svg",
        features: [
            { title: "Automated Testing", description: "Implementing CI/CD pipelines with automated test suites." },
            { title: "Manual Testing", description: "Thorough manual testing for usability and edge cases." },
            { title: "Performance Testing", description: "Load testing to ensure your app handles high traffic." },
            { title: "Security Audits", description: "Vulnerability assessment and penetration testing." }
        ],
        subServices: [
            { title: "Functional Testing", description: "Verifying software functions." },
            { title: "Performance Testing", description: "Checking speed and stability." },
            { title: "Security Testing", description: "Identifying vulnerabilities." },
            { title: "Usability Testing", description: "Ensuring user-friendliness." },
            { title: "Automation", description: "Scripting repetitive tests." },
            { title: "Compatibility Testing", description: "Ensuring software works across environments." }
        ],
        process: [
            { title: "Planning", description: "Defining test strategy and scope." },
            { title: "Design", description: "Creating test cases and scripts." },
            { title: "Environment", description: "Setting up test environments." },
            { title: "Execution", description: "Running tests and logging bugs." },
            { title: "Reporting", description: "Analyzing results and metrics." },
            { title: "Closure", description: "Finalizing testing activities." }
        ],
        benefits: [
            "Reliable software delivery",
            "Reduced post-launch bugs",
            "Protected brand reputation",
            "Compliance with standards"
        ]
    }
];
