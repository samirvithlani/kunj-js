//date all constructor
const date1 = new Date();
console.log(date1); // Current date and time
const date2 = new Date(2023, 0, 1); // January 1, 2023
console.log(date2); // Specific date
const date3 = new Date('2023-01-01T00:00:00'); // ISO format date
console.log(date3); // Specific date in ISO format
const date4 = new Date(1); // Timestamp in milliseconds
console.log(date4); // Specific date from timestamp


// date with different methods
const date5 = new Date();
console.log(date5.getFullYear()); // Get the year
console.log(date5.getMonth()); // Get the month (0-11)
console.log(date5.getDate()); // Get the day of the month (1-31)
console.log(date5.getHours()); // Get the hour (0-23)
console.log(date5.getMinutes()); // Get the minutes (0-59)
console.log(date5.getSeconds()); // Get the seconds (0-59)
console.log(date5.getMilliseconds()); // Get the milliseconds (0-999)
console.log(date5.getDay()); // Get the day of the week (0-6,
// where 0 is Sunday)
console.log(date5.toISOString()); // Convert to ISO string
console.log(date5.toDateString()); // Convert to date string
console.log(date5.toTimeString()); // Convert to time string
console.log(date5.toLocaleDateString()); // Convert to locale date string
console.log(date5.toLocaleTimeString()); // Convert to locale time string
console.log(date5.toLocaleString()); // Convert to locale string
console.log(date5.valueOf()); // Get the timestamp in milliseconds
console.log(date5.getTime()); // Get the timestamp in milliseconds
console.log(date5.getUTCFullYear()); // Get the UTC year
console.log(date5.getUTCMonth()); // Get the UTC month (0-11)
console.log(date5.getUTCDate()); // Get the UTC day of the month (1-31)
console.log(date5.getUTCHours()); // Get the UTC hour (0-23)
console.log(date5.getUTCMinutes()); // Get the UTC minutes (0-59)


//date set methods
var date6 = new Date();
date6.setFullYear(2024); // Set the year to 2024
console.log(date6); // Updated date with new year
date6.setMonth(11); // Set the month to December (0-11)
console.log(date6); // Updated date with new month
date6.setDate(25); // Set the day of the month to 25
console.log(date6); // Updated date with new day
date6.setHours(10); // Set the hour to 10 AM
console.log(date6); // Updated date with new hour
date6.setMinutes(30); // Set the minutes to 30
console.log(date6); // Updated date with new minutes
date6.setSeconds(45); // Set the seconds to 45
console.log(date6); // Updated date with new seconds
date6.setMilliseconds(500); // Set the milliseconds to 500
console.log(date6); // Updated date with new milliseconds
date6.setUTCFullYear(2024); // Set the UTC year to 2024
console.log(date6); // Updated date with new UTC year
date6.setUTCMonth(11); // Set the UTC month to December (0-11)
console.log(date6); // Updated date with new UTC month
date6.setUTCDate(25); // Set the UTC day of the month to 25
console.log(date6); // Updated date with new UTC day
date6.setUTCHours(10); // Set the UTC hour to 10 AM
console.log(date6); // Updated date with new UTC hour

