export const convertDatetime = (dateString) => {
  let date = new Date(dateString);
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
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
  let dayOfWeek = daysOfWeek[date.getUTCDay()];
  let dayNumber = date.getUTCDate();
  let month = months[date.getUTCMonth()];
  let year = date.getUTCFullYear();
  let result = `${dayOfWeek} ${dayNumber} ${month} ${year}`;
  return result;
};
