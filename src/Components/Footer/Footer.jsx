import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
	return (
		<>
			<hr className="mt-10" />
			<div className="flex justify-between max-w-[1450px] m-auto mt-10">
				<div>
					<ul className="flex flex-col gap-3 text-[gray]">
						<h1 className="font-bold font-MONT uppercase text-xl text-black">
							help
						</h1>
						<li>
							<Link>FAQ</Link>
						</li>
						<li>
							<Link>Delivery Information</Link>
						</li>
						<li>
							<Link>Returns Policy</Link>
						</li>
						<li>
							<Link>Make A Return</Link>
						</li>
						<li>
							<Link>Orders</Link>
						</li>
						<li>
							<Link>Submit a Fake</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex flex-col gap-3 text-[gray]">
						<h1 className="font-bold font-MONT uppercase text-xl text-black">
							my account
						</h1>
						<li>
							<Link>Login</Link>
						</li>
						<li>
							<Link>Register</Link>
						</li>
					</ul>
				</div>
				<div>
					<ul className="flex flex-col gap-3 text-[gray]">
						<h1 className="font-bold font-MONT uppercase text-xl text-black">
							contact us
						</h1>
						<li>++855 92 590 867</li>
					</ul>
				</div>
				<div>
					<div>
						<img className="w-40 flex justify-center" src={Logo} alt="" />
					</div>
					<div className="tracking-[10px] uppercase flex items-center justify-center font-black font-BEBAS text-3xl ">
						<h1>
							gym <span className="text-[rgb(230,126,34)]">shark</span>
						</h1>
					</div>
					<div>
						<ul className="flex gap-2 items-center justify-between mt-5">
							<li>
								<Link>
									<i className="ri-instagram-fill text-3xl hover:text-gray-700 active:text-black"></i>
								</Link>
							</li>
							<li>
								<Link>
									<i class="ri-facebook-box-fill text-3xl hover:text-gray-700 active:text-black"></i>
								</Link>
							</li>
							<li>
								<Link>
									<i className="ri-discord-fill text-3xl hover:text-gray-700 active:text-black"></i>
								</Link>
							</li>
							<li>
								<Link>
									<i className="ri-telegram-fill text-3xl hover:text-gray-700 active:text-black"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
