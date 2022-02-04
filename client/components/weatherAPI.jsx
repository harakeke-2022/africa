import request from 'superagent'

export function getWeather () {
  return request
    .get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pretoria/today?include=fcst%2Cobs%2Chistfcst%2Cstats%2Ccurrent&key=ZS3SRK6YJDLSL3ACQMQ8U4LX5&contentType=json')
    .set('Accept', 'application/json')
    .then(res => {
      console.log('this is the weather', res.body)
      return res.body
    })
    .catch(err => {
      console.error(err.message)
    })
}
