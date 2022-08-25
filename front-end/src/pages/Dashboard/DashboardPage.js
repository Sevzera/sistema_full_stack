import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";

const DashboardPage = ({ isLoggedIn, handleLogout }) => {
	return isLoggedIn ? (
		<section className="flex absolute w-full h-full min-h-screen bg-white">
			<Sidebar handleLogout={() => handleLogout()} />
			<div className="basis-10/12 container flex flex-col items-center justify-center h-full">
				<Outlet />
			</div>
		</section>
	) : (
		<div>
			<h1>You are not logged in</h1>
		</div>
	);
};

export default DashboardPage;
