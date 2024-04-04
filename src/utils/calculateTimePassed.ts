function calculateTimePassed(createdAt: string): string {
  const createdDate = new Date(createdAt).getTime();
  const now = new Date().getTime();
  const passedTime = now - createdDate;
  const differenceInSeconds = Math.floor(passedTime / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInMonths / 12);

  if (differenceInSeconds < 120) {
    return '1 minute ago';
  }
  if (differenceInMinutes < 60) {
    return `${differenceInMinutes} minutes ago`;
  }
  if (differenceInHours < 2) {
    return '1 hour ago';
  }
  if (differenceInHours < 24) {
    return `${differenceInHours} hours ago`;
  }
  if (differenceInDays < 2) {
    return '1 day ago';
  }
  if (differenceInDays <= 30) {
    return `${differenceInDays} days ago`;
  }
  if (differenceInMonths < 2) {
    return '1 month ago';
  }
  if (differenceInMonths <= 11) {
    return `${differenceInMonths} months ago`;
  }
  if (differenceInYears < 2) {
    return '1 year ago';
  }
  return `${Math.floor(differenceInMonths / 12)} years ago`;
}

export default calculateTimePassed;