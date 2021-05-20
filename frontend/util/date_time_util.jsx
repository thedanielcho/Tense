export const extractDateTime = dateTime => {
  let dateObject = new Date(dateTime);
  debugger
  // find the time and adjust it
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  let time = dateObject.toLocaleTimeString('en-US', timeOptions);
  
  //find the date
  const dateOptions = { month: 'numeric', day: 'numeric', year: 'numeric' };
  let date = dateObject.toLocaleDateString('en-US', dateOptions);
  
  const now = new Date();
  const dateObj = new Date(date);
  
  // today?
  
  if ((now.getDate() === dateObj.getDate()) && (now.getMonth() === dateObj.getMonth()) && (now.getFullYear() === dateObj.getFullYear())) {
      return `${time}`;
  }

  // yesterday?
  if ((now.getDate() - dateObj.getDate() === 1) || (now.getMonth() - dateObj.getMonth() === 1) || (now.getYear() - dateObj.getFullYear() === 1)) {
      return `yesterday at ${time}`;
  }

  // more than a day ago
  return date;
};