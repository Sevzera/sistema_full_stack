import React, { useEffect, useState } from "react";

function ListItem({ product, handleCheckboxChange }) {
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		handleCheckboxChange(product._id, isChecked);
	}, [isChecked]);

	useEffect(() => {
		setIsChecked(false);
	}, [product]);

	return (
		<li className="py-[10px] border-2">
			<div className="flex flex-row justify-between">
				<input
					type="checkbox"
					className="ml-[5px]"
					checked={isChecked}
					onChange={(e) => {
						setIsChecked(e.target.checked);
					}}
				></input>
				<p className="w-1/4">{product.name}</p>
				<p className="w-1/4">{product.quantity}</p>
				<p className="w-1/4">{product.price}</p>
			</div>
		</li>
	);
}

export default ListItem;
