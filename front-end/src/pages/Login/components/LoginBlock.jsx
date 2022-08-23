import React from "react";

const LoginBlock = ({ handleLogin }) => {
	return (
		<div className="flex flex-col w-[300px] border-2 bg-gray-600 shadow-lg rounded-lg p-[10px]">
			<form
				className="text-cs flex flex-col justify-center font-semibold"
				onSubmit={async (e) => {
					e.preventDefault();
					handleLogin(e.target.email.value, e.target.password.value);
				}}
			>
				<label className="uppercase text-center mb-3 font-bold">Sign In</label>
				<label className="uppercase text-xs font-bold mb-2">
					Email
					<input
						className="px-3 py-3 rounded text-sm shadow w-full"
						type="text"
						name="email"
						placeholder="Email"
					/>
				</label>
				<label className="uppercase text-xs font-bold mb-2">
					Password
					<input
						className="px-3 py-3 rounded text-sm shadow w-full"
						type="text"
						name="password"
						placeholder="Password"
					/>
				</label>
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 shadow hover:bg-[#1e293b] hover:text-white rounded-2xl"
					type="submit"
					value="Submit"
				></input>
			</form>
		</div>
	);
};

export default LoginBlock;
