import { useRef } from "react";
import "./portfolio.scss";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React E-Commerce",
        img: "https://www.tribe-ecommerce.com/images/handexperience3.png",
        desc: "Technologies: HTML, CSS, JavaScript, React, Bootstrap. A fully responsive e-commerce platform built with React, HTML, CSS, and Bootstrap. It offers a smooth shopping experience with features like product displays, user authentication, and dynamic shopping carts. The source code is provided for easy customization and integration into your own projects.",
        demoLink: "https://github.com/Shariiffx/React-E-Commerce",
    },
    {
        id: 2,
        title: "Custom Management Application",
        img: "https://flatlogic.com/assets/new_screenshots/user-management-react/1-26f18bb552d67b012fb5989a6bce32bdfbdf9e63f4d6969c900e951f4a4dbf41.png",
        desc: "Technologies: React, SQL, Bootstrap, Node.js. A custom management app with a responsive dashboard and powerful Node.js backend. Built with React and Bootstrap, it provides real-time analytics and efficient resource management. Access the source code to customize and scale it for your business needs.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        demoLink: "https://github.com/Shariiffx/Custom-Management-Application",
    },
    {
        id: 3,
        title: "Creative Design",
        videoLink: "Creative Design.mp4", // YouTube embed link
        desc: "Technologies: Logo Design, Branding, Motion Graphics, Video Editing, Photo/Poster Design. A curated collection of creative works, from logo design to motion graphics and promotional posters. Each project is crafted to capture brand essence and boost engagement. Source files and assets are provided for those looking to explore my design process.",
        demoLink: "https://github.com/Shariiffx/Creative-Design",
    },
    {
        id: 4,
        title: "Cross-Platform Collaboration",
        videoLink: "Creative Design 2.mp4", // YouTube embed link
        desc: "Technologies: C, Python, Java, PHP, HTML. A cross-platform project showcasing seamless integration of C, Python, Java, PHP, and HTML. It demonstrates how multiple technologies work together to solve complex problems. Access the source code to explore and adapt the solution for your own needs.",
        demoLink: "https://github.com/Shariiffx/Cross-Platform-Collaboration",
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [300, -300]); // Adjust if necessary

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="mediaContainer" ref={ref}>
                        {item.videoLink ? (
                            <iframe

                                src={item.videoLink}
                                title={item.title}

                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img src={item.img} alt={item.title} />
                        )}
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => alert(`Viewing demo for ${item.title}`)}>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
