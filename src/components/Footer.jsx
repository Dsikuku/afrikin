import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">AfriKin Circle</h2>
          <p className="text-sm leading-relaxed">
            Every Connection Forms a Circle
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/initiatives" className="hover:text-blue-400 transition">Our Initiatives</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Location/Social Placeholder */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <p className="text-sm mb-4">Based in the heart of the 6ix.</p>
          <div className="flex gap-4">
            {/* These could be social media icons later */}
            <span className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 cursor-pointer transition">IG</span>
            <span className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 cursor-pointer transition">TW</span>
            <span className="bg-gray-800 p-2 rounded-full hover:bg-blue-800 cursor-pointer transition">FB</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} AfriKin Circle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;