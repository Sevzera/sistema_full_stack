import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import ListBlock from "./components/ListBlock.jsx";

const ListPage = ({ isLoggedIn, handleLogout }) => {
	return isLoggedIn ? (
		<section className="flex absolute w-full h-full min-h-screen bg-white">
			<Sidebar handleLogout={() => handleLogout()} />
			<div className="basis-10/12 container flex items-center justify-center h-full">
				<ListBlock />
			</div>
		</section>
	) : (
		<p>User not logged in</p>
	);
};

export default ListPage;
