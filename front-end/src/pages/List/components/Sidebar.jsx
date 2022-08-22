import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ handleLogout }) => {
	const navigate = useNavigate();

	return (
		<div className="basis-2/12 bg-[#1e293b] flex flex-col items-center justify-around container h-full rounded-r-xl">
			<div className="flex flex-col h-1/2 justify-start">
				<p className="bg-gray-600 text-center rounded-2xl text-3xl border-2">
					SYSTEM
				</p>
				<div className="flex-col mt-[100px] justify-start border-2 p-[30px] bg-gray-600 rounded-2xl">
					<div className="flex flex-row justify-between">
						<button
							className="mr-[10px] w-[20px] h-[20px]"
							style={{
								backgroundImage:
									"url(" + require("../../../assets/sun-n-blocks.png") + ")",
							}}
							onClick={() => {
								navigate("/list");
							}}
						></button>
						<label>List</label>
					</div>
					<div className="flex flex-row justify-between">
						<button
							className="mr-[10px] w-[20px] h-[20px]"
							style={{
								backgroundImage:
									"url(" + require("../../../assets/folder.png") + ")",
							}}
							onClick={() => {
								navigate("/register");
							}}
						></button>
						<label>Add Item</label>
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-around h-1/4">
				<div className="flex flex-col items-center">
					<img
						className="w-[150px] h-[150px] object-scale-down mb-[10px] rounded-full"
						src={require("../../../assets/no-image.jpg")}
					/>
					<button
						className="bg-cover bg-gray-600 p-[12px] border-2 rounded-md"
						style={{
							backgroundImage:
								"url(" + require("../../../assets/leave.png") + ")",
						}}
						onClick={() => {
							handleLogout();
							navigate("/");
						}}
					></button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
