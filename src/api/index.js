import axios from "axios";



const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '04f52d4230mshdf7fc72d5eb6ccep11ea86jsn2bdb3b19a083',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '04f52d4230mshdf7fc72d5eb6ccep11ea86jsn2bdb3b19a083',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    } catch (error) {
        console.log(error)

    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: {
        lon: lng,
        lat: lat,
      },
      headers: {
        'X-RapidAPI-Key': '04f52d4230mshdf7fc72d5eb6ccep11ea86jsn2bdb3b19a083',
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
      }
    });

    console.log(data)

    return data;

  } catch (error) {
    console.log(error)
  }
}