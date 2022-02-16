export const removeDuplicates = (array: any[], property: string) => {
  const uniq = new Set()
  return array.filter((item) => {
    const isUniq = !uniq.has(item[property])
    uniq.add(item[property])
    return isUniq
  })
}

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function serializeGetParams (params: any) {
  let str = ''
  for (const key in params) {
    if (str !== '') {
      str += '&'
    }
    str += key + '=' + encodeURIComponent(params[key])
  }
  return str
}
