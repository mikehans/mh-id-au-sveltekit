export async function fetchResource(resourceUri){
	try {
        const jwt = await getAuthToken();

        const dataResult = await fetch(resourceUri, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + jwt
            }
        });

        if(dataResult.ok){
            return await dataResult.json();
        }
    } catch (err){
        throw new Error(err);
    }
}

async function getAuthToken(){
    const authUrl = `${import.meta.env.VITE_API_URL}/auth/local`;

	const authResult = await fetch(authUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			identifier: `${import.meta.env.VITE_API_USERNAME}`,
			password: `${import.meta.env.VITE_API_PASSWORD}`
		})
	});

    if(authResult.ok){
        const json = await authResult.json();
        return new Promise(resolve => resolve(json.jwt));
    } else {
        throw new Error("Failed auth");
    }
}