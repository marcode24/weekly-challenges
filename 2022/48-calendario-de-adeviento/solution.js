const findGift = (date) => {
  const dateStart = new Date('2022-12-01T00:00:00.000-06:00');
  const dateEnd = new Date('2022-12-24T23:59:59.000-06:00');
  const gifts = Array.from({ length: 24 }, (_, i) => i + 1);
  const currentDate = new Date(date);
  if (currentDate < dateStart) {
    const difference = Math.abs(dateStart - currentDate);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    return `Faltan ${days} dia${days > 1 ? 's' : ''} para el evento`;
  }

  if (currentDate > dateEnd) {
    const difference = Math.abs(dateEnd - currentDate);
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return `Han pasado ${days} dia${days > 1 ? 's' : ''} desde que finalizo el evento`;
  }
  return `Regalo ${gifts[currentDate.getDate() - 1]}`;
};

module.exports = findGift;
