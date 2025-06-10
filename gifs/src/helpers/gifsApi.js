export const GifsApi = async(category) => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=6yGmjojy1REBmGQNz5WkI4KFHC6NXdjO&q=Hasbulla&limit=20';
    const response = await fetch(url);
    const {data }= await response.json()

    const gifs = data.map(gif => ({
        id:gif.id,
        title:gif.title,
        img:gif.images.downsized_medium.url
    }))
    console.log(gifs);
    return gifs;
}