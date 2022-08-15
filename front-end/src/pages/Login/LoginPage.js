import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginBlock from "./components/LoginBlock.jsx";

const LoginPage = (props) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (props.isLoggedIn) {
			navigate("/list");
		}
	});

	if (!props.isLoggedIn) {
		return (
			<section
				className="flex justify-center items-center absolute w-full h-full min-h-screen')]"
				style={{
					backgroundImage:
						"url(" + require("../../assets/background.png") + ")",
				}}
			>
				<LoginBlock
					handleLogin={(email, password) => props.handleLogin(email, password)}
				/>
			</section>
		);
	}
};

export default LoginPage;
