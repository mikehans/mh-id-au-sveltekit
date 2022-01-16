import dotenv from 'dotenv';

dotenv.config();

export async function fetchResource(resourceUri: string): Promise<unknown> {
	try {
		const dataResult = await fetch(resourceUri, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (dataResult.ok) {
			// const json = await dataResult.json();
			const json = {};
			return new Promise((resolve) => resolve(json));
		} else {
			return new Promise((resolve, reject) => reject('Could not resolve endpoint'));
		}
	} catch (err) {
		throw new Error('Error here');
	}
}

export async function fetchResourceAuth(resourceUri: string, jwt?: string): Promise<unknown> {
	const authToken: string = jwt && jwt.length > 0 ? jwt : await getNewAuthToken();

	// try to use existing JWT or get a fresh one and use it
	const dataResult = await fetch(resourceUri, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`
		}
	});

	if (dataResult.ok) {
		let json = await dataResult.json();
		console.log(`dataResult json`, json);
		json = { content: json, jwt: authToken };
		return new Promise((resolve) => resolve(json));
	} else if (jwt && jwt.length > 0) {
		// in case there was a JWT, replace it and retry
		const newToken = await getNewAuthToken();
		const dataResult2 = await fetch(resourceUri, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${newToken}`
			}
		});
		if (dataResult2.ok) {
			// let json = await dataResult.json();
			let json = {};
			json = { content: json, jwt: authToken };
			return new Promise((resolve) => resolve(json));
		} else {
			return new Promise((resolve, reject) => reject('Could not resolve endpoint'));
		}
	} else {
		return new Promise((resolve, reject) => reject('Could not resolve endpoint'));
	}
}

async function getNewAuthToken(): Promise<string> {
	const authUrl = `${process.env.API_URL}/auth/local`;

	const authResult = await fetch(authUrl, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			identifier: `${process.env.API_USERNAME}`,
			password: `${process.env.API_PASSWORD}`
		})
	});

	if (authResult.ok) {
		const json = await authResult.json();

		return new Promise((resolve) => resolve(json.jwt));
	} else {
		return new Promise((resolve, reject) => reject('Failed auth or something'));
	}
}

// import { jwtToken } from "../../../stores";

// let jwtValue: string;

// export async function fetchResource(resourceUri: string): Promise<any>{
//     jwtToken.subscribe(value => jwtValue = value);
//     let jwt: string;
// 	try {
//         jwt = await getJWT();

//         // console.log(`jwt try 1`, jwt);

//         const dataResult = await fetch(resourceUri, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${jwt}`
//             }
//         });

//         if(dataResult.ok){
//             const json = await dataResult.json();
//             jwtToken.set(jwt);
//             return new Promise(resolve => resolve(json));
//         } else {
//             jwt = await getJWT(true);
//             // console.log(`jwt try 2`, jwt);

//             const dataResultRetried = await fetch(resourceUri, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${jwt}`
//                 }
//             });

//             if (dataResultRetried.ok){
//                 const json = await dataResult.json();
//                 jwtToken.set(jwt);
//                 return new Promise(resolve => resolve(json));
//             } else {
//                 throw new Error('Failed auth');
//             }
//         }
//     } catch (err){
//         throw new Error(err);
//     }
// }

// async function getJWT(freshen?: boolean): Promise<string>{
//     if (!freshen || jwtValue){
//         return new Promise(resolve => resolve(jwtValue));
//     } else {
//         return await getAuthToken();
//     }
// }
