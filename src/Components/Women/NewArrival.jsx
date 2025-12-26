import React from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import newArrival from "../../Data/NewArrival";

const NewArrival = () => {
	return (
		<>
			<div>
				<div className="flex items-center gap-2 justify-start ml-11 pt-10">
					<h1 className="uppercase font-bold text-[1.3rem]">
						new items just arrivals
					</h1>
					<Link className="underline font-bold">View all</Link>
				</div>
				<div className="flex items-center max-w-[1450px] m-auto gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
					{newArrival.map((product) => (
						<div key={product.id} className="min-w-[300px]">
							<Link to={`/product/${product.id}`}>
								<div>
									<i class="ri-heart-line bg-[white] p-2 rounded-full relative top-10 left-[15rem] hover:bg-black hover:text-white transition-all cursor-pointer"></i>
								</div>
								<div>
									<img className="w-260px" src={product.imgSrc} alt="" />
								</div>
								<div>
									<h1>{product.title}</h1>
									<p className="text-[gray] text-sm">{product.des}</p>
									<p className="text-red-500">$ {product.price}</p>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default NewArrival;
