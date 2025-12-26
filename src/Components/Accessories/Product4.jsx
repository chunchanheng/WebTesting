import React from "react";
import { Link } from "react-router-dom";
import allHeadwear from "../../Data/Allheadwear";

const Product4 = () => {
	return (
		<>
			<div className="mt-10">
				<div className="grid grid-cols-1 gap-2 max-w-[1450px] mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					{allHeadwear.map((product) => (
						<div key={product.id}>
							<Link to={`/product/${product.id}`}>
								<div>
									<i class="ri-heart-line bg-[white] p-2 rounded-full relative top-10 left-[19rem] hover:bg-black hover:text-white transition-all cursor-pointer"></i>
								</div>
								<div>
									<div className="min-w-[300px]">
										<img className="w-[400px]" src={product.imgSrc} alt="" />
									</div>
									<div>
										<h1>{product.title}</h1>
										<p>{product.description}</p>
										<p>{product.price}</p>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Product4;
