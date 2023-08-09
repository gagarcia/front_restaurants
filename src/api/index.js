import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '34f39be683msh0d64f9ab720d79fp15e867jsn38fb760855d1',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const placeData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);

        return data
    } catch (error) {
        console.log(error)
    }
}

