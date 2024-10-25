import logo from "../assets/icon.png"
const Footer = () => {
    return (
        <footer className="pt-8">
            <div className="max-w-6xl mx-auto p-4 ">
                {/* Dashed Border Container for Links */}
                <div className="sm:p-8 sm:mb-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6  text-gray-700 cursor-pointer">
                        {/* Column 1 */}
                        <div>
                            <h3 className="text-sm font-medium mb-4 text-gray-500">Product</h3>
                            <ul className="space-y-2 font-semibold">
                                <li>Overview</li>
                                <li>Features</li>
                                <li>
                                    Solutions <span className=" text-green-700 bg-green-100 text-xs px-2 py-0 rounded-full bg-opacity-60 border border-green-500">New</span>
                                </li>
                                <li>Tutorials</li>
                                <li>Pricing</li>
                                <li>Releases</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div>
                            <h3 className="text-sm font-medium mb-4 text-gray-500">Company</h3>
                            <ul className="space-y-2 font-semibold">
                                <li>About us</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>News</li>
                                <li>Media kit</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div>
                            <h3 className="text-sm font-medium mb-4 text-gray-500">Resources</h3>
                            <ul className="space-y-2 font-semibold">
                                <li>Blog</li>
                                <li>Newsletter</li>
                                <li>Events</li>
                                <li>Help centre</li>
                                <li>Tutorials</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div>
                            <h3 className="text-sm font-medium mb-4 text-gray-500 ">Use cases</h3>
                            <ul className="space-y-2 font-semibold">
                                <li>Startups</li>
                                <li>Enterprise</li>
                                <li>Government</li>
                                <li>SaaS centre</li>
                                <li>Marketplaces</li>
                                <li>Ecommerce</li>
                            </ul>
                        </div>
                        {/* Column 5 */}
                        <div>
                            <h3 className="text-sm font-semibold mb-4 text-gray-500">Social</h3>
                            <ul className="space-y-2 font-semibold">
                                <li>Twitter</li>
                                <li>LinkedIn</li>
                                <li>Facebook</li>
                                <li>GitHub</li>
                                <li>AngelList</li>
                                <li>Dribbble</li>
                            </ul>
                        </div>
                        {/* Column 6 */}
                        <div>
                            <h3 className="text-sm font-semibold mb-4 text-gray-500">Legal</h3>
                            <ul className="space-y-2 font-semibold">
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Cookies</li>
                                <li>Licenses</li>
                                <li>Settings</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Dashed Border Container for Bottom Section */}
                <hr className="max-w-6xl mx-auto mt-12"/>
                <div className="pt-4 flex flex-col items-start sm:flex-row  sm:justify-between sm:items-center sm:text-center">
                    <div className="flex justify-center items-center">
                        <img
                            src={logo}
                            alt="Untitled UI Logo"
                            className="w-10 h-10 rounded-md mr-3"
                        />
                        <span className="text-lg font-bold text-gray-900">Untitled UI</span>
                    </div>
                    <p className="text-gray-500 py-3">© 2077 Untitled UI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
