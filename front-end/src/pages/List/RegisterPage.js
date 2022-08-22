import React from "react";
import Sidebar from "./components/Sidebar.jsx";
import NewItemBlock from "./components/NewItemBlock.jsx";

const RegisterPage = ({ isLoggedIn, handleLogout }) => {
	return isLoggedIn ? (
		<section className="flex flex-row absolute w-full h-full bg-white">
			<Sidebar handleLogout={() => handleLogout()} />
			<div className="basis-10/12 container flex flex-col items-center justify-center h-full">
				<NewItemBlock
				/>
			</div>
		</section>
	) : (
		<p>User not logged in</p>
	);
};

export default RegisterPage;
