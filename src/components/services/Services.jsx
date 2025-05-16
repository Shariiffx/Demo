import { useRef } from "react";
import "./services.scss";
import { motion } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildern: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef()

    const isInView = (ref, { margin: "-100px" })

    return (
        <motion.div className="services"
            variants={variants}
            initial="initial"
            //animate="animate"
            // whileInView={"animate"}
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <p> I focus on helping your brand grow
                    <br />and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>

                    <button>WHAT I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }} ><h2>
                    Branding</h2>
                    <p>I create unique brand identities that resonate with your audience, from logos to color schemes. By crafting compelling brand stories and engaging social media designs, I help businesses connect emotionally, boost recognition, and drive growth.
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}><h2>
                    Design</h2>
                    <p>I design impactful logos, user-friendly UI/UX interfaces, and dynamic motion graphics that elevate storytelling. My work spans print and digital ads, always crafted to grab attention and drive results. Lets create visuals that make an impact!

                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}><h2>
                    Development</h2>
                    <p>I create dynamic websites and apps with HTML, CSS, React, and PHP, including e-commerce and interactive features. My mobile-first designs ensure responsiveness, while custom web apps solve business needs and optimize performance for speed.
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: "black" }}><h2>
                    Testing</h2>
                    <p>I deliver bug-free development with manual testing, automated tools like Jest, and cross-platform compatibility. Client feedback through UAT helps perfect the final product. Explore case studies, testimonials, and demos to see my work.

                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default Services;