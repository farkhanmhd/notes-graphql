export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return (
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date) +
    ", " +
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date)
  );
}
