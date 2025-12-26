import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import bestSeller from "../../Data/BestSeller";

const BestSeller = () => {
	return (
		<>
			<div className="mt-12 flex justify-start ml-11 pt-10 uppercase font-bold text-[1.5rem] items-center">
				<div>
					<h1>Mens</h1>
					<h1>best seller this season</h1>
				</div>
				<div className="mt-9 ml-4 font-normal none-uppercase text-sm normal-case underline">
					<Link>View all</Link>
				</div>
			</div>
			<div className="flex justify-center ">
				<div className="flex gap-2 items-center overflow-x-auto ml-11 [&::webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
					{bestSeller.map((product) => (
						<Link to={`/product/${product.id}`} key={product.id}>
							<div className="min-w-[350px]">
								<div className="relative top-[3rem] left-[18rem] ">
									<i className="ri-heart-line bg-white p-2 text-xl rounded-full hover:bg-black hover:text-white transition-all cursor-pointer"></i>
								</div>
								<div>
									<img className="w-[350px]" src={product.imgSrc} alt="" />
								</div>
								<div>
									<h1>{product.title}</h1>
									<p className="text-[gray] text-sm">{product.des}</p>
									<div></div>
									<p className="text-red-500">$ {product.price}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default BestSeller;
