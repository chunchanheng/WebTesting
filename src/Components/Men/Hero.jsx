import React from "react";
import Men from "../../assets/Men.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<>
			<div
				className="p-10 bg-cover bg-no-repeat text-white uppercase font-bold text-[3.3rem] max-w-[1450px] m-auto mt-10"
				style={{ backgroundImage: `url(${Men})` }}>
				<div className="p-16 relative top-10 text-[rgb(207,75,0)] font-black">
					<div className="flex flex-col font-black relative top-9">
						<h1 className="relative top-14 font-BEBAS text-white">
							black friday
						</h1>
						<h1 className="relative top-5 font-BEBAS">extra 25% off with</h1>
						<h1 className="font-BEBAS relative bottom-4">code extra 25</h1>
					</div>
					<p className="font-normal normal-case text-[1.2rem] mt-4 text-white">
						Daddy’s returns, order now to get discount
					</p>
					<Link className="normal-case font-normal underline text-[1.1rem] relative bottom-3 text-white">
						Shop men's
					</Link>
				</div>
			</div>
		</>
	);
};

export default Hero;
