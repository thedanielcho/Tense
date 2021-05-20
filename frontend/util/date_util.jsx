export const extractDate = dateTime => {
  if (dateTime){
    let dateObject = new Date(dateTime);
    let date = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium'}).format(dateObject);
    return date
  }
}