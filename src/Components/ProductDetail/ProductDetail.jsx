import React from "react";
import bestSeller from "../../Data/BestSeller";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import newArrival from "../../Data/NewArrival";
import allEquipment from "../../Data/Allequipment";
import allSocks from "../../Data/Allsocks";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import allBag from "../../Data/Allbag";
import allBottle from "../../Data/Allbottle";
import allHeadwear from "../../Data/Allheadwear";

const ProductDetail = () => {
	const { id } = useParams();
	const allProducts = [
		...bestSeller,
		...newArrival,
		...allEquipment,
		...allSocks,
		...allBag,
		...allBottle,
		...allHeadwear,
	];
	const product = allProducts.find((p) => p.id === parseInt(id));
	const navigate = useNavigate();
	return (
		<>
			<div className="mt-12 flex justify-between max-w-[1200px] m-auto">
				<div>
					<img className="w-[550px]" src={product.imgSrc} alt="" />
				</div>
				<div>
					<div className="flex flex-col gap-2 font-MONT">
						<h1 className="font-bold uppercase text-3xl">{product.title}</h1>
						<p>{product.des}</p>
						<p className="font-bold">$ {product.price}</p>
						<div className="flex items-center gap-4 mt-5">
							<i class="ri-heart-line text-2xl bg-[gray] w-20 p-1 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-300 hover:text-white transition-all"></i>
							<i class="ri-share-2-line text-2xl bg-[gray] w-20 p-1 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-300 hover:text-white transition-all"></i>
						</div>
						<div className="mt-5">
							<h1>select a size</h1>
							<ul className="flex gap-5 p-9 w-full border border-[gray] items-center justify-center text-md rounded-lg">
								<div>
									<button className="uppercase w-[50px] hover:bg-black hover:text-white p-2 focus-within:bg-black focus-within:text-white">
										xs
									</button>
								</div>
								<div>
									<button className="uppercase w-[50px] hover:bg-black hover:text-white p-2 focus-within:bg-black focus-within:text-white">
										s
									</button>
								</div>
								<div>
									<button className="uppercase w-[50px] hover:bg-black hover:text-white p-2 focus-within:bg-black focus-within:text-white">
										m
									</button>
								</div>
								<div>
									<button className="uppercase w-[50px] hover:bg-black hover:text-white p-2 focus-within:bg-black focus-within:text-white">
										l
									</button>
								</div>
								<div>
									<button className="uppercase w-[50px] hover:bg-black hover:text-white p-2 focus-within:bg-black focus-within:text-white">
										xl
									</button>
								</div>
								<div>
									<button className="uppercase w-[50px] hover:bg-black hover:text-white p-2 focus-within:bg-black focus-within:text-white">
										xxl
									</button>
								</div>
								<div>
									<button className="uppercase w-[50px] hover:bg-black hover:text-white p-2 focus-within:bg-black focus-within:text-white">
										3xl
									</button>
								</div>
							</ul>
						</div>
						<div className="flex flex-col items-center font-bold mt-5">
							<button className="bg-black p-5 w-full rounded-full">
								<Link className="uppercase text-xl text-white">add to bag</Link>
							</button>
							<button
								onClick={() => navigate(-1)}
								className="uppercase font-MONT text-xl bg-white border border-[gray] p-5 w-full rounded-full mt-5 hover:bg-black hover:text-white transition-all">
								Back
							</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="flex uppercase font-MONT font-bold text-xl items-center mt-16 justify-center mb-5">
					<h1>Feature:</h1>
				</div>
				<div className=" font-MONT uppercase font-bold flex items-center justify-center gap-24 border max-w-[1400px] m-auto p-10 rounded-lg shadow-lg">
					<div className="flex flex-col items-center mt-5 hover:scale-[0.98] transition-all">
						<img className="w-[300px]" src={product.featureImg1} alt="" />
						<h1>soft</h1>
					</div>
					<div className="flex flex-col items-center mt-5 hover:scale-[0.98] transition-all">
						<img className="w-[300px]" src={product.featureImg3} alt="" />
						<h1>strong</h1>
					</div>
					<div className="flex flex-col items-center mt-5 hover:scale-[0.98] transition-all">
						<img className="w-[300px]" src={product.featureImg2} alt="" />
						<h1>water proof</h1>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center mt-10 ">
				<button className="bg-[rgb(230,126,34)] p-3 rounded-full font-bold w-[200px] font-MONT text-white flex items-center justify-center">
					More products{" "}
					<span>
						<i class="ri-arrow-right-fill text-2xl"></i>
					</span>
				</button>
			</div>
		</>
	);
};

export default ProductDetail;
