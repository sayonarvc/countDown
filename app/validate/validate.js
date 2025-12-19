export function isValidFutureDate(dateTime) {
  const now = new Date();
  return dateTime > now;
}