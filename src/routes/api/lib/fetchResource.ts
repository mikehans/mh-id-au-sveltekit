import dotenv from "dotenv";

export async function fetchResource(resourceUri: string) : Promise<unknown>{
    dotenv.config();

    const dataResult = await fetch(resourceUri, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(dataResult.ok){
        const json = await dataResult.json();
        return new Promise(resolve => resolve(json));
    } else {
        return new Promise((resolve, reject ) => reject("Could not resolve endpoint"));
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

// async function getAuthToken(): Promise<string>{
//     const authUrl = `${import.meta.env.VITE_API_URL}/auth/local`;

// 	const authResult = await fetch(authUrl, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			identifier: `${import.meta.env.VITE_API_USERNAME}`,
// 			password: `${import.meta.env.VITE_API_PASSWORD}`
// 		})
// 	});

//     if(authResult.ok){
//         const json = await authResult.json();

//         return new Promise(resolve => resolve(json.jwt));
//     } else {
//         throw new Error("Failed auth");
//     }
// }