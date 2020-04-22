import moment from 'moment';

const formatBrazilianDate = (date: Date): string =>
  moment(date).format('DD/MM/YYYY');

export default formatBrazilianDate;
