import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import{ allImages} from "../assets/img";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0D5257] to-[#083a3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={allImages.logo}
              alt="AL SAKB Logo"
              className="h-12 sm:h-14 mb-4 sm:mb-6 brightness-0 invert"
            />
            <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base">
              Your trusted partner in global trade, specializing in premium spices and diverse commodities.
            </p>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-[#C8102E] to-white" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[#C8102E] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 sm:mb-6 text-base sm:text-lg">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#C8102E] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@alsakb.com"
                  className="text-white/70 hover:text-[#C8102E] transition-colors duration-200 text-sm sm:text-base break-all"
                >
                  info@alsakb.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#C8102E] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-white/70 hover:text-[#C8102E] transition-colors duration-200 text-sm sm:text-base"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#C8102E] mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm sm:text-base">
                  Global Trading Hub<br />International Business District
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 sm:mb-6 text-base sm:text-lg">Follow Us</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#C8102E] hover:to-[#0D5257] flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            © {new Date().getFullYear()} AL SAKB EXPORT IMPORT LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}