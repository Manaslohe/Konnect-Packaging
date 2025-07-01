import React from "react";
import "@fontsource/krona-one";
import { 
  FaYoutube, 
  FaWhatsapp, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter 
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

// Reusable components for consistent styling
const SectionTitle = ({ children }) => (
  <h3 className="text-2xl mb-4">{children}</h3>
);

const LightText = ({ children, className = "" }) => (
  <p className={`text-sm font-light ${className}`}>{children}</p>
);

const SocialIcon = ({ icon: Icon, label }) => (
  <a href="#" aria-label={label} className="hover:text-gray-300 transition-colors">
    <Icon size={24} />
  </a>
);

const ContactItem = ({ icon: Icon, href, children }) => (
  <div className="flex items-center gap-2 mb-4">
    <Icon size={24} />
    <a href={href} className="text-sm">{children}</a>
  </div>
);

// New navigation link component for company links
const CompanyLink = ({ to, children }) => (
  <li>
    <a 
      href={to} 
      className="text-sm font-light hover:text-gray-300 transition-colors cursor-pointer block py-1"
    >
      {children}
    </a>
  </li>
);

function Footer() {
  return (
    <footer className="bg-black text-white font-['Krona_One'] py-12 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="col-span-1">
            <h1 className="text-5xl font-bold">KONNECT</h1>
            <h2 className="text-3xl mt-2">packaging;</h2>
          </div>

          {/* Our Company Section */}
          <div className="col-span-1">
            <SectionTitle>Our company</SectionTitle>
            <ul className="space-y-2">
              <CompanyLink to="/career">Career</CompanyLink>
              <CompanyLink to="/why-choose-us">Why Choose Us</CompanyLink>
              <CompanyLink to="/vision-mission">Vision and Mission</CompanyLink>
              <CompanyLink to="/product-analysis">Product Analysis</CompanyLink>
              <CompanyLink to="/catalog">Catalog</CompanyLink>
              <CompanyLink to="/brochure">Brochure</CompanyLink>
            </ul>
          </div>

          {/* Location Section */}
          <div className="col-span-1">
            <SectionTitle>location</SectionTitle>
            <LightText>
              Plot no J/60; KONNECT packaging<br />
              International LLP,<br />
              Borgaon, Chhinwara,<br />
              Madhya Pradesh- pin<br />
              code- 480106, India
            </LightText>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <SectionTitle>contact</SectionTitle>
            <LightText className="mb-2">For general enquires and information</LightText>
            <ContactItem icon={MdEmail} href="mailto:info@konnectpackaging.com">
              info@konnectpackaging.com
            </ContactItem>
            
            <LightText className="mb-2">For material requirements, quotations,</LightText>
            <ContactItem icon={MdEmail} href="mailto:sales@konnectpackaging.com">
              sales@konnectpackaging.com
            </ContactItem>
            
            <LightText className="mb-2">Contact Number</LightText>
            <ContactItem icon={MdPhone} href="tel:+917774031665">
              +91-7774031665
            </ContactItem>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="border-t-2 border-white/60 mt-12 pt-6 flex justify-end space-x-6">
          <SocialIcon icon={FaYoutube} label="YouTube" />
          <SocialIcon icon={FaWhatsapp} label="WhatsApp" />
          <SocialIcon icon={FaFacebookF} label="Facebook" />
          <SocialIcon icon={FaInstagram} label="Instagram" />
          <SocialIcon icon={FaLinkedinIn} label="LinkedIn" />
          <SocialIcon icon={FaTwitter} label="Twitter" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
