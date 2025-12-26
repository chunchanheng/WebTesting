import React from "react";
import { Link } from "react-router-dom";
import WomenBg from "../../assets/women.png";

const Hero = () => {
	return (
		<>
			<div
				className="bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${WomenBg})` }}>
				<div className="flex flex-col p-44 items-center justify-center text-white font-BEBAS text-[3.4rem] font-black ">
					<h1 className="relative top-7">get your first collection</h1>
					<h1>
						25% discount for{" "}
						<span className="text-[rgb(238,105,131)]">women</span>{" "}
					</h1>
					<p className="font-normal font-sans text-sm">
						Stock is still available, check and inbox now
					</p>
					<Link className="underline font-sans normal-case text-sm font-normal">
						Shop now
					</Link>
				</div>
			</div>
		</>
	);
};

export default Hero;
