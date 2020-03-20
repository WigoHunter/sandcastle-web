type DateFormat = string | Date;

export const timeDiff = (cur: DateFormat, prev: DateFormat): string => {
  const current = new Date(cur).getTime();
  const previous = new Date(prev).getTime();

  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return "just now";
  } else if (elapsed < msPerHour) {
    const m = Math.round(elapsed / msPerMinute);
    return `${m} minute${m > 1 ? "s" : ""} ago`;
  } else if (elapsed < msPerDay) {
    const h = Math.round(elapsed / msPerHour);
    return `${h} hour${h > 1 ? "s" : ""} ago`;
  } else if (elapsed < msPerMonth) {
    const d = Math.round(elapsed / msPerDay);
    return `${d} day${d > 1 ? "s" : ""} ago`;
  } else if (elapsed < msPerYear) {
    const m = Math.round(elapsed / msPerMonth);
    return `${m} month${m > 1 ? "s" : ""} ago`;
  } else {
    const y = Math.round(elapsed / msPerYear);
    return `${y} year${y > 1 ? "s" : ""} ago`;
  }
};
