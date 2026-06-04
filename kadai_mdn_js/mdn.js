const date = new Date();

const formated = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}).format(date);

document.write(formated);