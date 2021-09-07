

export const dateConverter = (date) => {

   const convertedDate = new Date(date)
   const datestr =  convertedDate.toLocaleDateString()
    return datestr
}