export const getGifs = async (category) => {
  //guardamos la url con el nombre que vamos a hacer en la query
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Fu8g8SRsLPkmtEhi4S240ho2A2h9s3de&q=${category}&limit=10`;

  //hacemos el fetch de la url
  const resp = await fetch(url);
  //cogemos la data de la respuesta pasada a formato JSON
  const { data } = await resp.json();

  //Guardamos todos los gifs con la estructura {id,title,url}
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  //Devolvemos el conjunto de gifs
  return gifs;
}