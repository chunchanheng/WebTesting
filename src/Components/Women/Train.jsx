import React from "react";
import WomanTrain from "../../Data/WomenTrain";

const Train = () => {
	return (
		<>
			<div className="p-10 flex flex-col">
				<div className="uppercase font-bold text-xl">
					<h1>how do you train?</h1>
				</div>
				<div className="flex gap-3 justify-center">
					{WomanTrain.map((product) => (
						<div className="flex flex-col items-center uppercase font-bold font-MONT text-xl">
							<div key={product.id} className="min-w-[300px]">
								<img src={product.imgSrc} alt={product.title} />
							</div>
							<div className="mt-4">{product.title}</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Train;
