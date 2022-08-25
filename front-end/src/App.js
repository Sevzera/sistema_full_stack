import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
import { QueryClient, QueryClientProvider } from "react-query";
import * as apiUsers from "./api/qryUsers.js";
import LoginPage from "./pages/Login/LoginPage.js";
import DashboardPage from "./pages/Dashboard/DashboardPage.js";
import ListBlock from "./pages/Dashboard/components/ListBlock.jsx";
import NewItemBlock from "./pages/Dashboard/components/NewItemBlock.jsx";

function App() {
	const queryClient = new QueryClient();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	async function handleLogin(email, password) {
		const result = await apiUsers.getAll();
		const exists = result.find(
			(user) => user.email === email && user.password === password
		);
		exists ? setIsLoggedIn(true) : alert("Invalid email or password");
	}

	function handleLogout() {
		setIsLoggedIn(false);
	}

	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Routes>
					<Route
						path="dashboard"
						element={
							<DashboardPage
								isLoggedIn={isLoggedIn}
								handleLogout={() => handleLogout()}
							/>
						}
					>
						<Route path="list" element={<ListBlock />} />
						<Route path="register" element={<NewItemBlock />} />
					</Route>
					{["*", "/", "login"].map((path) => (
						<Route
							key={path}
							path="*"
							element={
								<LoginPage
									isLoggedIn={isLoggedIn}
									handleLogin={(email, password) =>
										handleLogin(email, password)
									}
								/>
							}
						/>
					))}
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
