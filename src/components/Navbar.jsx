import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-700">
        AfriKin<span className="text-gray-800"> Circle</span>
      </div>
      <ul className="flex gap-8 font-medium text-gray-600">
        <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
        <li><Link to="/initiatives" className="hover:text-blue-600 transition">Initiatives</Link></li>
        <li><Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Join Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;