import React from "react";
import { Link } from "react-router-dom";

const Head = () => {
	return (
		<>
			<div className="font-sans bg-black text-white flex justify-center p-10">
				<div className="flex flex-col items-center">
					<h1 className="font-BEBAS uppercase tracking-widest  text-[3rem] ">
						christsmas <span className="text-[rgb(207,75,0)]"> discount</span>
					</h1>
					<p className="mt-5">Order now for student discount</p>
					<p className="mt-3">
						Last chance to shop an extra 25% with code EXTRA25, on top of up to
						50% off everything.
					</p>
					<Link className="underline font-bold mt-3">Shop Now</Link>
				</div>
			</div>
		</>
	);
};

export default Head;
