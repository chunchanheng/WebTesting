import React from "react";
import BackgroundIamge from "../../assets/background.png";
import { Link } from "react-router-dom";

const Trending = () => {
	return (
		<>
			<div
				className="bg-cover bg-no-repeat pt-[20rem] pb-20 pl-10 mt-20"
				style={{ backgroundImage: `url(${BackgroundIamge})` }}>
				<div className="font-BEBAS text-6xl text-[rgb(230,126,40)] font-black">
					<h1 className="text-white">trending</h1>
					<h1>right now</h1>
				</div>
				<div className="underline text-white">
					<Link>Shop now</Link>
				</div>
			</div>
		</>
	);
};

export default Trending;
