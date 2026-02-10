import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 py-6 text-center text-gray-400 border-t border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} MERN URL Shortener • Built with ❤️
      </p>

      <div className="mt-2 flex justify-center gap-4 text-sm">
        
        
        <Link to="/about" className="hover:text-white">
          About
        </Link>

        <a
          href="https://github.com/thevishalmisra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vishal-raman-80b60525b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Contact
        </a>

      </div>
    </footer>
  );
}

export default Footer;

 