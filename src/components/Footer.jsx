import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        
        {/* Copyright */}
        <div className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Flipkart Clone Store. Built by Prashanth.
        </div>

        {/* Social Links / Quick Links */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
