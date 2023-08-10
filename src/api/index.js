import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

export const placeData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, 
            {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Key': '34f39be683msh0d64f9ab720d79fp15e867jsn38fb760855d1',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
              }
            );

        return data
    } catch (error) {
        console.log(error)
    }
}

