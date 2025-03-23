import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/hitesh-matharu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/HiteshM30/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub">
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/ig_hiteshh.m/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
