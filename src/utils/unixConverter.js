export function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000)
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let year = a.getFullYear()
  let month = months[a.getMonth()]
  let date = a.getDate()
  date = date.toString().length === 1 ? `0${date}` : date
  let hour = a.getHours()
  hour = hour.toString().length === 1 ? `0${hour}` : hour
  let min = a.getMinutes()
  min = min.toString().length === 1 ? `0${min}` : min
  let sec = a.getSeconds()
  sec = sec.toString().length === 1 ? `0${sec}` : sec
  return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
}
