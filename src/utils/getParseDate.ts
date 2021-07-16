// format of args to parse "2020-10-24T11:31:00-04:00"
const getParseDate = (dateTime: string): string => {
  const splitDateTime: Array<string> = dateTime.split('T');
  const date: string = splitDateTime[0];
  return date.split('-')
    .reverse()
    .join('/');
}

export default getParseDate;