export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=kIbCPB1zycD5sQa5Pe65bBNv7fWCd51N`;

  const resp = await fetch(url);
  console.log(url);
  const { data } = await resp.json(); //la respuesta a la peticion
  const gif = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gif;
};
