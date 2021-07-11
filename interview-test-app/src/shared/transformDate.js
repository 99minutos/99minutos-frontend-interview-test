
export const transformDate=(dateToTransform,{ splittedBy="-",concatenateWith="/",needToSort=false}={})=>{
    const [año, mes, rest] = dateToTransform.split(splittedBy);
    const dia = rest.substring(0, 2);
    const transformedDate = `${dia}${concatenateWith}${mes}${concatenateWith}${año}`;
    const dateForSorting = `${año}${mes}${dia}`;

    if(needToSort)return dateForSorting 
    else return transformedDate
    
}