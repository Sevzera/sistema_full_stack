import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./css/style.css";
import LoginPage from "./pages/Login/LoginPage.js";
import ListPage from "./pages/List/ListPage.js";
import RegisterPage from "./pages/List/RegisterPage.js";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [products, setProducts] = useState([]);
	const [checkedProducts, setCheckedProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	async function setDatabaseProducts() {
		const result = await fetch("http://localhost:2000/api/products", {
			method: "GET",
		});
		const data = await result.json();
		setProducts(data);
	}

	async function handleLogin(email, password) {
		const result = await fetch("http://localhost:2000/api/users", {
			method: "GET",
		});
		const data = await result.json();
		for (const user of data) {
			if (user.email === email && user.password === password) {
				setIsLoggedIn(true);
				alert("Logged in");
				break;
			} else {
				alert("Wrong email or password");
				break;
			}
		}
	}

	function handleLogout() {
		setIsLoggedIn(false);
		alert("Logged out");
	}

	async function handleAddProduct(toAdd) {
		const result = await fetch("http://localhost:2000/api/products/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(toAdd),
		});
		const data = await result.json();
		if (data.status) setProducts([...products, toAdd]);
		alert(data.message);
	}

	function handleCheckboxChange(product, checked) {
		if (checked) {
			setCheckedProducts([...checkedProducts, product]);
		} else {
			setCheckedProducts(checkedProducts.filter((p) => p !== product));
		}
	}

	async function handleRemoveProducts() {
		const filter = checkedProducts.map((product) => product._id);
		const result = await fetch("http://localhost:2000/api/products/remove", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(filter),
		});
		const data = await result.json();
		if (data.status) {
			setProducts(
				products.filter((product) => !checkedProducts.includes(product))
			);
			setCheckedProducts([]);
		}
		alert(data.message);
	}

	async function handleSearchProduct(toSearch) {
		setFilteredProducts(
			products.filter((product) =>
				product.name.toLowerCase().includes(toSearch.toLowerCase())
			)
		);
	}

	useEffect(() => {
		setDatabaseProducts();
	}, []);

	return (
		<BrowserRouter>
			<Link to="/">Login</Link>
			<Link to="/list">List</Link>
			<Link to="/register">Register</Link>
			<Routes>
				<Route
					path="/"
					element={
						<LoginPage
							isLoggedIn={isLoggedIn}
							handleLogin={(email, password) => handleLogin(email, password)}
						/>
					}
				/>
				<Route
					path="/list"
					element={
						<ListPage
							isLoggedIn={isLoggedIn}
							handleLogout={() => handleLogout()}
							handleCheckboxChange={(product, checked) =>
								handleCheckboxChange(product, checked)
							}
							handleSearchProduct={(search) => handleSearchProduct(search)}
							handleRemoveProducts={(products) =>
								handleRemoveProducts(products)
							}
							products={products}
							checkedProducts={checkedProducts}
							filteredProducts={filteredProducts}
						/>
					}
				/>
				<Route
					path="/register"
					element={
						<RegisterPage
							isLoggedIn={isLoggedIn}
							handleLogout={() => handleLogout()}
							handleAddProduct={(product) => handleAddProduct(product)}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
