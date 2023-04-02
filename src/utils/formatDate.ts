export function addTimeZone(date: string) {
  const formatedDate = new Date(date);
  const timezoneOffset = formatedDate.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(formatedDate.getTime() + timezoneOffset);

  return localDate;
}

export function formatDate(date: string) {
  const options = {
    timeZone: 'America/Sao_Paulo',
  };

  const formatedDate = new Date(date);
  const timezoneOffset = formatedDate.getTimezoneOffset() * 60 * 1000;
  const localDate = new Date(formatedDate.getTime() + timezoneOffset);

  return new Intl.DateTimeFormat('pt-br', options).format(localDate);
}

export function formatShortDate(date: string) {
  const localDate = new Date(date);

  return new Intl.DateTimeFormat('pt-br', {
    month: 'short',
    year: 'numeric',
  }).format(localDate);
}
