import React from "react";
import "remixicon/fonts/remixicon.css";
import Logo from "../../assets/gymsharklogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<div className="flex items-center justify-center text-white bg-black p-3 text-sm">
				<h1>Discount 15% for College and Highschool Students</h1>
			</div>
			<div className="flex items-center justify-between shadow-sm p-5 sticky top-0 z-50 bg-white">
				<div>
					<ul className="flex items-center gap-10">
						<li>
							<Link to={`/`}>Men</Link>
						</li>
						<li>
							<Link to={`/Women`}>Women</Link>
						</li>
						<li>
							<Link to={`/Accessories`}>Accessories</Link>
						</li>
					</ul>
				</div>
				<div>
					<img className="w-32" src={Logo} alt="" />
				</div>
				<div className="flex items-center gap-4">
					<div className="flex items-center">
						<button className="bg-gray-200 p-[9px] w-[200px] flex justify-start border rounded-full text-sm hover:bg-white transition-all hover:border border-gray-300 hover:text-gray-300">
							Find your collection
						</button>
						<i className="ri-search-line text-xl flex relative right-8"></i>
					</div>
					<div className="flex items-center gap-4">
						<i className="ri-shopping-cart-line text-xl cursor-pointer"></i>
						<Link to={`/Login`}>
							<i className="ri-account-circle-line text-xl cursor-pointer"></i>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
