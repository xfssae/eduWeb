import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logoLight from "../assets/logo-light.svg";

function Footer() {
  return (
    <footer className="bg-footerBg bg-black py-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
        {/* Column 1 */}
        <div className=" p-4 tracking-wider">
          <Link to="/">
            <img
              src={logoLight}
              width="162"
              height="50"
              alt="EduWeb logo"
              className="my-4"
            />
          </Link>

          <p className="text-gray-400">
            The ultimate resource for computer science students! Whether you're
            just starting out or looking to enhance your skills our
            comprehensive tutorials and guides cover everything.
          </p>

          <div className="my-4">
            <span className="text-gray-400">Add:</span>
            <address className="text-gray-400 ml-2">
              Plot No.2, Sector 17-A, YamunLinkExpressway, Gautam Buddh Nagar,
              Greater Noida, Uttar Pradesh 201308
            </address>
          </div>

          <div className="text-gray-400">
            <span className="span">Call:</span>
            <Link to="tel:+011234567890" className="footer-link">
              9304032235/7004485581
            </Link>
          </div>

          <div className="text-gray-400">
            <span className="span">Email:</span>
            <Link to="mailto:info@eduweb.com" className="footer-link">
              info@eduweb.com
            </Link>
          </div>
        </div>

        {/* Column 2 */}
        <div className=" p-4 tracking-wider">
          <ul className="text-gray-400">
            <li>
              <p className="text-xl font-bold text-gray-300 py-4">
                Online Platform
              </p>
            </li>
            <li>
              <Link to="/" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Instructor
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Events
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Instructor Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Purchase Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className=" p-4 tracking-wider">
          <ul className="text-gray-400">
            <li>
              <p className="text-xl font-bold text-gray-300 py-4">Links</p>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                News & Articles
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                FAQ's
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Sign In/Registration
              </Link>
            </li>
            <li>
              <Link to="/" className="footer-link">
                Coming Soon
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="p-4 text-gray-300">
          <p className="text-xl font-bold text-gray-300 mb-4">Contacts</p>
          <p className="text-gray-400 mb-2">
            Enter your email address to register to our newsletter subscription
          </p>
          <form action="" className="newsletter-form">
            <input
              type="email"
              name="email_address"
              placeholder="Your email"
              required
              className="w-full rounded-sm p-2 mb-2"
            />
            <Button type="submit" className="bg-green-700 w-full my-2">
              <span>Subscribe</span>
              <ArrowRight />
            </Button>
          </form>
          <ul className="social-list flex gap-2">
            <li>
              <Link to="/" className="social-link">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link to="/" className="social-link">
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link to="/" className="social-link">
                <Instagram />
              </Link>
            </li>
            <li>
              <Link to="/" className="social-link">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link to="/" className="social-link">
                <Youtube />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t shadow-2xl p-4">
        <div className="container mx-auto flex justify-center">
          <p className="text-gray-400">
            Copyright 2023 All Rights Reserved by EduWeb.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
