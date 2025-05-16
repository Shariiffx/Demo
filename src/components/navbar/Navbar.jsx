import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
    return (
        <div className="navbar">
            {/* <sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}> Sharif</motion.span>
                <div className="social">
                    <a href="https://www.instagram.com/sharifinreallife"><img src="/instagram.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/sharif-molla-857230261/"><img src="/facebook.png" alt="" /></a>
                    <a href="https://twitter.com/account/verify_user_info"><img src="/youtube.png" alt="" /></a>
                    <a href="https://github.com/Shariiffx"><img src="/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar