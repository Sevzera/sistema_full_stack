export async function getAll() {
	const result = await fetch("http://localhost:2000/api/products", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await result.json();
}

export async function getByName(name) {
	const result = await fetch("http://localhost:2000/api/products/name", {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name,
		}),
	});
	return await result.json();
}

export async function deleteMany(filter) {
	const result = await fetch("http://localhost:2000/api/products/remove", {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(filter),
	});
	return await result.json();
}

export async function postOne(product) {
	const result = await fetch("http://localhost:2000/api/products/add", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: product.name,
			quantity: product.quantity,
			price: product.price,
		}),
	});
	return await result.json();
}
