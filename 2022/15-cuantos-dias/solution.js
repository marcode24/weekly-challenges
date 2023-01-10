const differenceInDays = (date1, date2) => {
  const regexDate = /^([0-9]){2}[/]([0-9]){2}[/]([0-9]){4}$/; // dd/MM/yyyy
  if (!regexDate.test(date1) || !regexDate.test(date2)) return null;
  date1 = date1.split('/');
  date2 = date2.split('/');
  date1 = new Date(date1[2], date1[1] - 1, date1[0]);
  date2 = new Date(date2[2], date2[1] - 1, date2[0]);
  if (date1 > date2) [date1, date2] = [date2, date1];
  return Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
};

module.exports = differenceInDays;
