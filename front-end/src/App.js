import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/style.css";
import * as qUser from "./api/qryUsers.js";
import LoginPage from "./pages/Login/LoginPage.js";
import ListPage from "./pages/List/ListPage.js";
import RegisterPage from "./pages/List/RegisterPage.js";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
		<Router>
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
				<Route path="dashboard">
					<Route
						path="list"
						element={
							<ListPage
								isLoggedIn={isLoggedIn}
								handleLogout={() => handleLogout()}
							/>
						}
					/>
					<Route
						path="register"
						element={
							<RegisterPage
								isLoggedIn={isLoggedIn}
								handleLogout={() => handleLogout()}
							/>
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
