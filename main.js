async function fetchData(){
  
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = response.data;
    console.log(data)
  }
  catch (error) {
    console.log("Error fetching data",error)
  }
}

fetchData()