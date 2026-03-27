function now() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hour = today.getHours();
  minute = today.getMinutes();
  seconds = today.getSeconds();
  return `${year}-${two(month)}-${two(day)} ${two(hour)}:${two(minute)}:${two(seconds)}`
}
function two(num) {
  // if (num < 10) return "0" + num; else return num;
  return (num < 10) ? "0" + num : num;
}