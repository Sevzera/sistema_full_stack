import React, { useEffect, useState } from "react";
import ListItem from "./ListItem.jsx";
import * as apiProducts from "../../../api/apiProducts.js";

const ListBlock = () => {
	const [list, setList] = useState([]);
	const [checkedIDs, setCheckedIDs] = useState([]);

	async function updateList(filter) {
		let result;
		filter
			? (result = await apiProducts.getByName(filter))
			: (result = apiProducts.getAll());
		console.log(result);
		setList(
			result.map((product, index) => (
				<ListItem
					key={"i#" + index}
					product={product}
					handleCheckboxChange={(product, checked) => {
						handleCheckboxChange(product, checked);
					}}
				/>
			))
		);
	}

	function handleCheckboxChange(id, checked) {
		if (checked) {
			setCheckedIDs((oldCheckedIDs) => [...oldCheckedIDs, id]);
		} else {
			setCheckedIDs((oldCheckedIDs) => oldCheckedIDs.filter((x) => x !== id));
		}
	}

	async function handleRemoveProducts(ids) {
		const result = await apiProducts.deleteMany(ids);
		updateList();
		setCheckedIDs([]);
		alert(result.message);
	}

	useEffect(() => {
		updateList();
	}, []);

	return (
		<div className="bg-gray-600 border-2 w-8/12 h-4/6 flex flex-col shadow-lg rounded-lg">
			<div className="flex flex-row justify-around mt-[20px]">
				<div className="ml-[20px] flex flex-row justify-start w-1/4 h-1/8">
					<label className="font-bold">{checkedIDs.length} SELECTED</label>
					<button
						className="ml-[5px] w-[21px] h-[21px] bg-cover mt-[3px]"
						style={{
							backgroundImage:
								"url(" + require("../../../assets/trash.png") + ")",
						}}
						onClick={() => {
							handleRemoveProducts(checkedIDs);
						}}
					></button>
				</div>
				<div className="mr-[20px] flex flex-row justify-end w-1/4 h-1/8">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							updateList(e.target.search.value);
						}}
					>
						<input
							className="w-[110px] pl-[3px]"
							type="text"
							name="search"
							placeholder="Name"
						></input>
						<input
							className="ml-[5px] w-[21px] h-[21px] bg-cover mt-[3px]"
							style={{
								backgroundImage:
									"url(" + require("../../../assets/search.png") + ")",
							}}
							type="submit"
							value=""
						></input>
					</form>
				</div>
			</div>
			<ul className="flex flex-col mt-[30px] overflow-auto bg-white odd:bg-white even:bg-slate-50">
				<div className="ml-[60px] flex flex-row justify-between">
					<p className="w-1/4">NAME</p>
					<p className="w-1/4">QUANTITY</p>
					<p className="w-1/4">PRICE</p>
				</div>
				{list}
			</ul>
		</div>
	);
};

export default ListBlock;
