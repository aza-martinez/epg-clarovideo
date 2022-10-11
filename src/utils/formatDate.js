export const formatDate = (date) => {
  if (date) {
    return new Date(date)
      .toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
      ?.replace(":", ".");
  }
  return null;
};
