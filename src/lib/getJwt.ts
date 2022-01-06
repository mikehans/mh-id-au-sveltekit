// import { browser } from '$app/env';

// const key = `${import.meta.env.VITE_JWT_STORAGE_KEY}`;
// const authUrl = `${import.meta.env.VITE_API_URL}/auth/local`;

// export function getJWT(svelteFetch: SvelteFetch, freshen?: boolean): Promise<string> {
// 	if (browser && sessionStorage.getItem(key) && !freshen) {
// 		// return the current value
// 		return new Promise((resolve) => resolve(sessionStorage.getItem(key)));
// 	} else {
// 		return obtainJWT(svelteFetch);
// 	}
// }

// async function obtainJWT(svelteFetch: SvelteFetch): Promise<string> {
// 	const authResult = await svelteFetch(authUrl, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			identifier: `${import.meta.env.VITE_API_USERNAME}`,
// 			password: `${import.meta.env.VITE_API_PASSWORD}`
// 		})
// 	});

// 	if (!authResult.ok) {
// 		throw new Error('Failed authorisation');
// 	} else {
// 		const json = await authResult.json();
//         if (browser){
//             sessionStorage.setItem(key, json.jwt)
//         }
//         return new Promise((resolve) => resolve(json.jwt));
// 	}
// }
