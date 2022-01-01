export async function fetchResource(resourceUrl: string, svelteFetch: SvelteFetch) : Promise<PageData | any> {
	const authUrl = `${import.meta.env.VITE_API_URL}/auth/local`;

	try {
		const authResult = await svelteFetch(authUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				identifier: `${import.meta.env.VITE_API_USERNAME}`,
                password: `${import.meta.env.VITE_API_PASSWORD}`
                
			})
		});

		if (!authResult.ok) {
			throw new Error('Failed authorisation');
		} else {
			const json = await authResult.json();

			const dataResult = await svelteFetch(resourceUrl, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + json.jwt
				}
			});

			if (!dataResult.ok) {
				throw new Error('Failed to get resource');
			} else {
				const data: PageData = await dataResult.json();

				// console.log(`data 1`, data);

                return data;
			}
		}
	} catch (e) {
		console.error(e);
		return e;
	}
}
