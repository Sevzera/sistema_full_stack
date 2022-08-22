import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./css/style.css";
import * as qUser from "./api/qryUsers.js";
import LoginPage from "./pages/Login/LoginPage.js";
import ListPage from "./pages/List/ListPage.js";
import RegisterPage from "./pages/List/RegisterPage.js";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	async function handleLogin(email, password) {
		const result = await qUser.getAll();
		const exists = result.data.find(
			(user) => user.email === email && user.password === password
		);
		exists ? setIsLoggedIn(true) : alert("Invalid email or password");
	}

	function handleLogout() {
		setIsLoggedIn(false);
	}

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
						/>
					}
				/>
				<Route
					path="/register"
					element={
						<RegisterPage
							isLoggedIn={isLoggedIn}
							handleLogout={() => handleLogout()}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
