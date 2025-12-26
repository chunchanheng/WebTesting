import React from "react";
import Head from "../Components/Men/Head";
import Hero from "../Components/Men/Hero";
import MenSale from "../Components/Men/MenSale";
import MenFooter from "../Components/Men/Footer";
import Trending from "../Components/Men/Trending";
import Train from "../Components/Men/Train";
import BestSeller from "../Components/Men/BestSeller";

const Men = () => {
	return (
		<>
			<Head />
			<Hero />
			<MenSale />
			<BestSeller />
			<Trending />
			<Train />
			<MenFooter />
		</>
	);
};
export default Men;
