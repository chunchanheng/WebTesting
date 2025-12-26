import React from "react";
import ManSale from "../../Data/ManSale";

const MenSale = () => {
	return (
		<>
			<div>
				<h1 className="font-sans uppercase font-bold pt-10 ml-11 text-[1.5rem]">
					men's sale
				</h1>
				<div className="flex gap-2 justify-center ">
					{ManSale.map((product) => (
						<div key={product.id} className="min-w-[10px]">
							<div className="bg-[rgb(230,126,34)] uppercase font-bold p-1 text-sm flex items-center justify-center">
								{product.head}
							</div>
							<div>
								<img className="w-[355px]" src={product.imgSrc} alt="" />
							</div>
							<div>
								<h1 className="font-bold uppercase flex justify-start items-center text-[1rem]">
									{product.title}
								</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default MenSale;
