import React, { useState, useEffect } from "react";
import * as qProd from "../../../api/qryProducts.js";

const NewItemBlock = () => {
	const [product, setProduct] = useState(null);

	async function handleAddProduct(product) {
		const result = await qProd.postOne(product);
		alert(result.message);
	}

	useEffect(() => {
		if (product) handleAddProduct(product);
	}, [product]);

	return (
		<div className="flex flex-col w-[400px] border-2 bg-gray-600 shadow-lg rounded-lg px-[10px]">
			<form
				className="text-cs flex flex-col justify-center font-semibold"
				onSubmit={(e) => {
					e.preventDefault();
					setProduct({
						name: e.target.name.value,
						quantity: e.target.quantity.value.toString(),
						price: e.target.price.value.toString(),
					});
				}}
			>
				<label className="uppercase text-center mb-3 font-bold">New Item</label>
				<label>Name</label>
				<input
					className="px-3 py-3 rounded text-sm shadow w-full"
					type="text"
					name="name"
					placeholder="Name"
				/>
				<label>Quantity</label>
				<input
					className="px-3 py-3 rounded text-sm shadow w-full"
					type="number"
					name="quantity"
					placeholder="Quantity"
				/>
				<label>Price</label>
				<input
					className="px-3 py-3 rounded text-sm shadow w-full"
					type="number"
					name="price"
					placeholder="Price"
				/>
				<input
					className="uppercase mt-[10px] text-sm font-bold py-3 shadow hover:bg-[#1e293b] hover:text-white rounded-2xl"
					type="submit"
					value="Submit"
				></input>
			</form>
		</div>
	);
};

export default NewItemBlock;
