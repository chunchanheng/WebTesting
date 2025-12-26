import React from "react";
import { Link } from "react-router-dom";
import Womenbg from "../../assets/women2.jpg";

const Shop = () => {
	return (
		<>
			<div
				className="bg-cover bg-no-repeat p-10 pt-[25rem] relative bottom-10 mt-36 "
				style={{ backgroundImage: `url(${Womenbg})` }}>
				<div>
					<h1 className="uppercase font-bold text-white tracking-widest text-6xl">
						this winter
					</h1>
					<Link className="text-white underline flex mt-5">Shop's Women</Link>
				</div>
			</div>
		</>
	);
};

export default Shop;
