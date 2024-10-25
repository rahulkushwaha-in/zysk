import downArrow from "../assets/down-arrow.png";
import logo from "../assets/icon.png";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-16 py-3 bg-white">
        <div className="flex items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="w-6 h-6" />
            <span className="text-lg font-bold text-gray-900">Untitled UI</span>
          </div>

          {/* Navigation Links for Larger Screens */}
          <nav className="hidden md:flex ml-8 space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="hover:text-gray-900">
                Products
                <img
                  className="w-4 inline ml-2 text-gray-600"
                  src={downArrow}
                  alt=""
                />
              </a>
              {/* <!-- Dropdown Placeholder --> */}
              <div className="absolute hidden group-hover:block"></div>
            </div>
            <div className="relative group">
              <a href="#" className="hover:text-gray-900">
                Resources
                <img
                  className="w-4 inline ml-2 text-gray-600"
                  src={downArrow}
                  alt=""
                />
              </a>
              {/* <!-- Dropdown Placeholder --> */}
              <div className="absolute hidden group-hover:block"></div>
            </div>
            <a href="#" className="hover:text-gray-900">
              Pricing
            </a>
          </nav>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-900 focus:outline-none">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Right Section: User Profile (Visible on larger screens) */}
        <div className="hidden md:flex items-center">
          <img
            src="https://img.freepik.com/free-photo/close-up-young-person-barbeque_23-2149271990.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
