export function truncateString(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export function transformDate(dateString){
    const getDate = /^(\d{4}[-]\d{2}[-]\d{2})/.exec(dateString)
    const splitDate = getDate[0].split("-")
    return [splitDate[1], splitDate[2], splitDate[0]].join("/")
}