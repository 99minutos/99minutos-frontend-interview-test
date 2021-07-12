export const formatDate = (date:string): string => {
    const newdate = new Date(date) || date;

    if (isValidDate(newdate)) {       

        return newdate.getDay()===0 
                    ? `${newdate.getMonth()}/${newdate.getFullYear()}`
                    : `${newdate.getDay()}/${newdate.getMonth()}/${newdate.getFullYear()}`
    }

    
    return date;
}

const isValidDate = (d:any):boolean => {
    return d instanceof Date && !isNaN(d.getTime());
}