import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<>
			<div className="lg:ml-10 mt-10 sticky top-[5rem] z-50 bg-white p-3">
				<div className="font-bold uppercase text-xl">
					<h1>filter and sort:</h1>
				</div>
				<div className="mt-3">
					<div className="flex gap-5 uppercase font-bold text-sm">
						<Link
							to="/Allequiment"
							className="bg-[rgb(217,217,217)] p-3 rounded-full hover:bg-black hover:text-white transition-all ">
							All equipment
						</Link>
						<Link
							to="/Allsocks"
							className="bg-[rgb(217,217,217)] p-3 rounded-full hover:bg-black hover:text-white transition-all focus:bg-black focus:text-white">
							All Socks
						</Link>
						<Link
							to="/Allbag"
							className="bg-[rgb(217,217,217)] p-3 rounded-full hover:bg-black hover:text-white transition-all focus:bg-black focus:text-white">
							all bags
						</Link>
						<Link
							to="/Allbottles"
							className="bg-[rgb(217,217,217)] p-3 rounded-full hover:bg-black hover:text-white transition-all focus:bg-black focus:text-white">
							all bottoles
						</Link>
						<Link
							to="/Allheadwear"
							className="bg-[rgb(217,217,217)] p-3 rounded-full hover:bg-black hover:text-white transition-all focus:bg-black focus:text-white">
							all headwear
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
