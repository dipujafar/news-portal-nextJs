export function getCurrentDate() {
  const today = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = daysOfWeek[today.getDay()];
  const month = monthsOfYear[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();

  return `${day}, ${month}, ${date},${year}`;
}
