import React from "react";
import { Link } from "react-router-dom";
import manTrain from "../../Data/ManTrain";

const Train = () => {
	return (
		<>
			<div className="mt-10">
				<div className="uppercase font-sans font-bold text-[1.3rem] flex justify-start ml-14">
					<h1>how do you train?</h1>
				</div>
				<div className="flex gap-2 justify-center">
					{manTrain.map((item) => (
						<div
							key={item.id}
							className="min-w-[200px] hover:scale-[0.98] transition-all cursor-pointer">
							<div>
								<img className="w-[350px]" src={item.imgSrc} alt="" />
							</div>
							<div>
								<h1 className="flex items-center justify-center font-sans font-bold uppercase text-xl">
									{item.title}
								</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
export default Train;
