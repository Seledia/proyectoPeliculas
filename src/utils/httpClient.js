import React from 'react';

const httpClient = (path) =>{
	const API= "https://api.themoviedb.org/3";
	return(


		fetch (API + path,{
				headers: {
					Authorization: 
					"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmUzOWQzOWViMDllODczYmNlYjljODAxZDRkYjQ5OSIsInN1YiI6IjYxMWNmNTVjY2E4MzU0MDA3NGNiMmQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PLc3G1mTJsIxZ55CDPVpQeduIsgcL6_VO351Zfih7Cs",
					"Content-Type": 
					"application/json;charset=utf-8",
				},
			}).then(result => result.json())
		);
}
export default httpClient;