export async function getAll() {
	const result = await fetch("http://localhost:2000/api/users", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	return await result.json();
}
