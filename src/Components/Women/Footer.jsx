import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="flex justify-between max-w-[1450px] m-auto mt-10">
				<div>
					<ul className="flex flex-col gap-3 text-[gray]">
						<h1 className="font-bold uppercase font-MONT text-xl text-black">
							Women sports
						</h1>
						<li>
							<Link>Women's Workout Shorts</Link>
						</li>
						<li>
							<Link>Shorts With Pockets</Link>
						</li>
						<li>
							<Link>5 Inch Shorts</Link>
						</li>
						<li>
							<Link>7 Inch Shorts</Link>
						</li>
						<li>
							<Link>Running Shorts</Link>
						</li>
						<li>
							<Link>Mesh Shorts</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex flex-col gap-3 text-[gray]">
						<h1 className="font-bold uppercase font-MONT text-xl text-black">
							Women's t-shirts and tops
						</h1>
						<li>
							<Link>Long Sleeve Gym Tops</Link>
						</li>
						<li>
							<Link>Tank Tops</Link>
						</li>
						<li>
							<Link>Stringer Vests</Link>
						</li>
						<li>
							<Link>Overzied T-Shirt</Link>
						</li>
						<li>
							<Link>Hoodie & Sweatshirts</Link>
						</li>
						<li>
							<Link>Compression T-Shirt</Link>
						</li>
						<li>
							<Link>Graphic Tees</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex flex-col gap-3 text-[gray]">
						<h1 className="font-bold uppercase font-MONT text-xl text-black">
							Womens bottoms
						</h1>
						<li>
							<Link>Joggers</Link>
						</li>
						<li>
							<Link>Grey Joggers</Link>
						</li>
						<li>
							<Link>Black Joggers</Link>
						</li>
						<li>
							<Link>Womens Gym Leggings</Link>
						</li>
						<li>
							<Link>Gym Tracksuits</Link>
						</li>
						<li>
							<Link>Pumper Pants</Link>
						</li>
						<li>
							<Link>Cargo Pants</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex flex-col gap-3 text-[gray]">
						<h1 className="font-bold uppercase font-MONT text-xl text-black">
							Womens accessories
						</h1>
						<li>
							<Link>Womens Boxer & Underwear</Link>
						</li>
						<li>
							<Link>Women Gym Socks</Link>
						</li>
						<li>
							<Link>Crew Socks</Link>
						</li>
						<li>
							<Link>Workout Bags</Link>
						</li>
						<li>
							<Link>Beanis</Link>
						</li>
						<li>
							<Link>Slides</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Footer;
