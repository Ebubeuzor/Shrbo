import React from 'react';

const Footer = () => {
  return (
    <footer className="hidden md:block bg-gray-900 text-white p-8 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <ul>
              <li>Get help with a safety issue</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighborhood concern</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Hosting</h2>
            <ul>
              <li>Shbro your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Shbro-friendly apartments</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
