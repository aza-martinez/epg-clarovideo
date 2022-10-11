export const durationToMinutes = (dateEnd) => {
  if (dateEnd) {
    const today = new Date();
    const currentMinutes = today.getMinutes();
    today.setMinutes(currentMinutes < 30 ? 0 : 30);
    const endDate = new Date(dateEnd);

    const minutes = Math.abs((endDate - today) / 1000 / 60);
    return minutes;
  }
};
