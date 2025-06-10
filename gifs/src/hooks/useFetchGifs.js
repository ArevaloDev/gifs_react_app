import { useEffect, useState } from "react";
import { GifsApi } from "../helpers/gifsApi";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async () => {
    const gifs = await GifsApi(category);
    setImages(gifs);
    setIsLoading(false)
  };

  useEffect(() => {
    getGifs();
  }, []);


  return{
            images,
            isLoading
    
        }

    
  
};
