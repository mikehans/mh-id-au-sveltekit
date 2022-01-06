// import { getJWT } from "./getJwt";

// export async function fetchResource(resourceUrl: string, svelteFetch: SvelteFetch) : Promise<PageData | any> {
// 	const jwt = await getJWT(svelteFetch);
	
// 	const dataResult = await svelteFetch(resourceUrl, {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			Authorization: 'Bearer ' + jwt
// 		}
// 	});

// 	if(dataResult.ok){
// 		return await dataResult.json();
// 	} else {
// 		const retryJwt = await getJWT(svelteFetch, true);

// 		const dataResultRetry = await svelteFetch(resourceUrl, {
// 			headers: {
// 				'Content-Type': 'application/json',
// 				Authorization: 'Bearer ' + retryJwt
// 			}
// 		});

// 		if(dataResultRetry.ok) {
// 			return await dataResultRetry.json();
// 		} else {
// 			throw new Error('Problem connecting to endpoint');
// 		}
// 	}
// }