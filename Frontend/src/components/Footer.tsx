import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logoLight  from "../assets/logo-light.svg";

function Footer() {
  return (
    <footer className="bg-footerBg bg-black">
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <Link href="#" className="logo">
              <img
                src={logoLight}
                width="162"
                height="50"
                alt="EduWeb logo"
              />
            </Link>

            <p className="footer-brand-text">
              The ultimate resource for computer science students! Whether
              you're just starting out or looking to enhance your skills our
              comprehensive tutorials and guides cover everything.
            </p>

            <div className="wrapper">
              <span className="span">Add:</span>

              <address className="address">
                Plot No.2, Sector 17-A, YamunLinkExpressway, Gautam Buddh Nagar,
                Greater Noida, Uttar Pradesh 201308
              </address>
            </div>

            <div className="wrapper">
              <span className="span">Call:</span>

              <Link href="tel:+011234567890" className="footer-link">
                9304032235/7004485581
              </Link>
            </div>

            <div className="wrapper">
              <span className="span">Email:</span>

              <Link href="mailto:info@eduweb.com" className="footer-link">
                info@eduweb.com
              </Link>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Online Platform</p>
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

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Links</p>
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

          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>

            <p className="footer-list-text">
              Enter your email address to register to our newsletter
              subscription
            </p>

            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email"
                required
                className="input-field"
              />

              <Button type="submit" className="btn has-before">
                <span className="span">Subscribe</span>
                <ArrowRight />
              </Button>
            </form>

            <ul className="social-list">
              <li>
                <Link href="#" class="social-link">
                  <Facebook />
                </Link>
              </li>

              <li>
                <Link href="#" class="social-link">
                 <Linkedin/>
                </Link>
              </li>

              <li>
                <Link href="#" class="social-link">
                 <Instagram/>
                </Link>
              </li>

              <li>
                <Link href="#" class="social-link">
               <Twitter/>
                </Link>
              </li>

              <li>
                <Link href="#" class="social-link">
                 <Youtube/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 shadow-lg">
        <div className="container">
          <p className="copyright">
            Copyright 2023 All Rights Reserved by
            <Link href="#" className="copyright-link">
              eduweb
            </Link>
            Copyright 2022 All Rights Reserved by
            <Link href="#" className="copyright-link">
              codewithBlal&Ayan
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
