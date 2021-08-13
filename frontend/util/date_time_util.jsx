export const extractDateTime = dateTime => {
  let dateObject = new Date(dateTime);
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

  // // yesterday?
  // if(now.getTime() - dateObj.getTime() < 86400000){
  //   return `yesterday at ${time}`;
  // }
  // if ((now.getDate() - dateObj.getDate() === 1) && (now.getMonth() === dateObj.getMonth()) && (now.getFullYear() === dateObj.getFullYear())) {
  //     return `yesterday at ${time}`;
  // }
  if (
    ((now.getDate() - dateObj.getDate() === 1) && 
    (now.getMonth() === dateObj.getMonth()) && 
    (now.getFullYear() === dateObj.getFullYear())) || 
    ((now.getDate() - dateObj.getDate() < 1)) &&
    (now.getMonth() === dateObj.getMonth()) && 
    (now.getFullYear() === dateObj.getFullYear())
  ) { 
    debugger
    return `yesterday at ${time}`;
  }

  // more than a day ago
  return date;
};