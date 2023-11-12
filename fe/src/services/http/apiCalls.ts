export const testCall = async (url: string) => {
	const response = await fetch(url, {
		method: 'GET',
	});
	console.log('response ===', response);

	return response.json();
};
