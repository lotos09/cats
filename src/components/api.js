const urlRandom = `https://api.thecatapi.com/v1/images/search`;
export const testRequest = async () => {
    const response = await fetch(urlRandom, {
        method: 'GET',
        headers: {
            'x-api-key': '576d231c-ff92-47e2-a0a5-07e23c6f42ff'
        }
    });
    let baseApi = await response.json();
    return baseApi[0].url;
}




const urlBreeds = 'https://api.thecatapi.com/v1/breeds?attach_breed=0';
export const getBreeds = async () => {
    const response = await fetch(urlBreeds, {
        method: 'GET',
        headers: {
            'x-api-key': '576d231c-ff92-47e2-a0a5-07e23c6f42ff'
        }
    });

    return response.json();
}

