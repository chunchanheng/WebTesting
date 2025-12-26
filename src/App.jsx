import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Accessories from "./Pages/Accessories";
import Login from "./Pages/Login";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Allequiment from "./Pages/Allequiment";
import Allsock from "./Pages/Allsock";
import Allbag from "./Pages/Allbag";
import Allbottles from "./Pages/Allbottles";
import Allheadwear from "./Pages/Allheadwear";

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Men />} />
				<Route path="/Men" element={<Men />} />
				<Route path="/Women" element={<Women />} />
				<Route path="/Accessories" element={<Accessories />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="/Allequiment" element={<Allequiment />} />
				<Route path="/Allsocks" element={<Allsock />} />
				<Route path="/Allbag" element={<Allbag />} />
				<Route path="/Allbottles" element={<Allbottles />} />
				<Route path="/Allheadwear" element={<Allheadwear />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
