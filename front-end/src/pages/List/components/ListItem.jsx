import React, { useEffect, useState } from "react";

function ListItem(props) {
	const [isChecked, setIsChecked] = useState(false);
	const [product, setProduct] = useState(props.product);

	useEffect(() => {
		props.handleCheckboxChange(product, isChecked);
	}, [isChecked]);

	useEffect(() => {
		setIsChecked(false);
		setProduct(props.product);
	}, [props.product]);

	if (!props.searchFor || props.searchFor && product.name.toLowerCase().includes(props.searchFor.toLowerCase())) {
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
}

export default ListItem;
