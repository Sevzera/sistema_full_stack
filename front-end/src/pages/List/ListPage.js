import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import ListBlock from "./components/ListBlock.jsx";

const ListPage = (props) => {
	if (props.isLoggedIn)
		return (
			<section className="flex absolute w-full h-full min-h-screen bg-white">
				<Sidebar handleLogout={() => props.handleLogout()} />
				<div className="basis-10/12 container flex items-center justify-center h-full">
					<ListBlock
						handleCheckboxChange={(product, checked) =>
							props.handleCheckboxChange(product, checked)
						}
						handleSearchProduct={(search) => props.handleSearchProduct(search)}
						handleRemoveProducts={(products) =>
							props.handleRemoveProducts(products)
						}
						products={props.products}
						checkedProducts={props.checkedProducts}
						filteredProducts={props.filteredProducts}
					/>
				</div>
			</section>
		);
	else return <p>User not logged in</p>;
};

export default ListPage;
