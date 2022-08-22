import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginBlock from "./components/LoginBlock.jsx";

const LoginPage = ({isLoggedIn, handleLogin}) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) {
			navigate("/list");
		}
	});

	if (!isLoggedIn) {
		return (
			<section
				className="flex justify-center items-center absolute w-full h-full min-h-screen')]"
				style={{
					backgroundImage:
						"url(" + require("../../assets/background.png") + ")",
				}}
			>
				<LoginBlock
					handleLogin={(email, password) => handleLogin(email, password)}
				/>
			</section>
		);
	}
};

export default LoginPage;
