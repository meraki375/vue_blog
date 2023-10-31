import axio from 'axios'
 

/** @desc 高德地图天气API */
export function weathe() {
  return axio.get(`https://restapi.amap.com/v3/weather/weatherInfo?key=c6168fbe3fd52b76e6b00341334bf9c2&city=440307`)
}


