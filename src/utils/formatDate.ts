export function addTimeZone(date: string) {
  const formatedDate = new Date(date);
  const timezoneOffset = formatedDate.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(formatedDate.getTime() + timezoneOffset);

  return localDate;
}

export function formatDate(date: string | Date) {
  const options = {
    timeZone: 'America/Sao_Paulo',
  };

  const formatedDate = new Date(date);
  const timezoneOffset = formatedDate.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(formatedDate.getTime() + timezoneOffset);

  return new Intl.DateTimeFormat('pt-br', options).format(localDate);
}

export function formatShortDate(date: string | Date) {
  const localDate = new Date(date);

  const dateFormated = new Intl.DateTimeFormat('pt-br', {
    day: '2-digit',
    month: 'short',
  }).format(localDate);

  const removedString = dateFormated.replace(' de', '');
  const removedDot = removedString.replace('.', '');
  const upperDate = removedDot.toUpperCase();

  return upperDate;
}
