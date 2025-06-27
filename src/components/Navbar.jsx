import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional: uses Lucide icons
import MainLogo from '../assets/MainLogo.png';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Divisions', href: '#divisions' },
    { label: 'Fellowship', href: '#fellowship' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center text-xl font-bold text-blue-700">
        <img src={MainLogo} alt="AxisMED Logo" className="w-10 h-6 mr-2" />
          AxisMED
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
                <a
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 tracking-wide font-medium after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all"
                >
                {link.label}
                </a>
            ))}
            <a
                href="/coming-soon"
                className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
                Apply Now
            </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col items-start px-4 py-4 space-y-4 text-gray-800 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/coming-soon"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition"
            >
              Apply Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
