

export async function getApi(){

const response = await fetch("https://api.thedogapi.com/v1/breeds");


console.log(response)
const data = await response.json();

console.log(data)
return data


}

getApi();