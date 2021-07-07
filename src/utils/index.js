const arrayMes =[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
export function getFecha(dat){
    const newd = new Date(dat)
    return{
        day:newd.getDate(),
        month:arrayMes[newd.getMonth()-1],
        year:newd.getFullYear()
    }
}