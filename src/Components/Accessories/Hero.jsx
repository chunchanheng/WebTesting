import React from "react";
import Bagpag from "../../assets/bagpag.jpg";
import Acc1 from "../../assets/acc1.png";
import Acc2 from "../../assets/acc2.png";

const Hero = () => {
	return (
		<>
			<div>
				<div className="flex flex-col gap-2 ml-11 mt-5">
					<h1 className="uppercase font-BEBAS text-6xl">All accessories</h1>
					<p>
						A workout outfit is never complete without sports accessories.
						Because the <br /> devil is in the detail, our sports accessories
						ensure you're ready for every session. From sports bags to <br />{" "}
						toilet bags, socks to caps and water bottles to shakers, you'll
						never be short of anything.
					</p>
				</div>
				{/* hero section */}
				<div className="flex max-w-[700px] gap-10 mx-auto mt-10 sm:overflow-x-auto lg:overflow-visible lg:gap-0 lg:flex lg:max-w-[1450px] ">
					<div
						style={{ width: "400px", height: "500px" }}
						className="flex-shrink-0">
						<img className="w-full h-full object-cover" src={Bagpag} alt="" />
					</div>
					<div
						style={{ width: "600px", height: "500px" }}
						className="flex-shrink-0">
						<img className="w-full h-full object-cover" src={Acc1} alt="" />
					</div>
					<div
						style={{ width: "450px", height: "500px" }}
						className="flex-shrink-0">
						<img className="w-full h-full object-cover" src={Acc2} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
