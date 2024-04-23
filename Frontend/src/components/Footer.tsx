import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logoLight  from "../assets/logo-light.svg";

function Footer() {
  return (
    <footer className="bg-footerBg bg-black">
      <div className="">
        <div className="container md:flex gap-4 p-4">
          <div className="footer-brand">
            <Link href="#" className="logo">
              <img src={logoLight} width="162" height="50" alt="EduWeb logo" />
            </Link>

            <p className="text-gray-400">
              The ultimate resource for computer science students! Whether
              you're just starting out or looking to enhance your skills our
              comprehensive tutorials and guides cover everything.
            </p>

            <div className=" my-4">
              <span className="text-gray-400">Add:</span>

              <address className="text-gray-400 ml-8">
                Plot No.2, Sector 17-A, YamunLinkExpressway, Gautam Buddh Nagar,
                Greater Noida, Uttar Pradesh 201308
              </address>
            </div>

            <div className="text-gray-400 ml-8 ">
              <span className="span">Call:</span>

              <Link href="tel:+011234567890" className="footer-link">
                9304032235/7004485581
              </Link>
            </div>

            <div className="text-gray-400 ml-8">
              <span className="span">Email:</span>

              <Link href="mailto:info@eduweb.com" className="footer-link">
                info@eduweb.com
              </Link>
            </div>
          </div>

          <ul className="text-gray-400">
            <li>
              <p className="text-gray-300 text-xl font-bold py-4">
                Online Platform
              </p>
            </li>

            <li>
              <Link href="#" className="footer-link">
                About
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Courses
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Instructor
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Events
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Instructor Profile
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Purchase Guide
              </Link>
            </li>
          </ul>

          <ul className="footer-list text-gray-400 py-4">
            <li>
              <p className="text-xl font-bold text-gray-300">Links</p>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Contact Us
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                News & Articles
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                FAQ's
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Sign In/Registration
              </Link>
            </li>

            <li>
              <Link href="#" className="footer-link">
                Coming Soon
              </Link>
            </li>
          </ul>

          <div className="">
            <p className="text-xl font-bold text-gray-300 ">Contacts</p>

            <p className="text-gray-400 mb-2">
              Enter your email address to register to our newsletter
              subscription
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

            <ul className="social-list flex gap-2 text-gray-400">
              <li>
                <Link href="#" class="social-link">
                  <Facebook />
                </Link>
              </li>

              <li>
                <Link href="#" class="social-link">
                  <Linkedin />
                </Link>
              </li>

              <li>
                <Link href="#" class="social-link">
                  <Instagram />
                </Link>
              </li>

              <li>
                <Link href="#" class="social-link">
                  <Twitter />
                </Link>
              </li>

              <li>
                <Link href="#" class="social-link">
                  <Youtube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

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
