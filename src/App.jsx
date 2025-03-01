import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About"; // ✅ Fixed capitalization
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
			<div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
				<Navbar /> {/* ✅ Navbar placed outside Routes */}
				<Routes>
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/collection"
						element={<Collection />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/product/:productId"
						element={<Product />}
					/>
					<Route
						path="/cart"
						element={<Cart />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/placeorder"
						element={<PlaceOrder />}
					/>
					<Route
						path="/orders"
						element={<Orders />}
					/>
				</Routes>
				<Footer></Footer>
			</div>
		</>
	);
};

export default App;
