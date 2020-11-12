//these function help us check and restrict the length of the string that we want to show.
export const stringChecker = (str: string) => {
    let previewStringArray = [];

    if (str === null) {
        return null;
    } else {
        for (let i = 0; i < 7; i++) {
            previewStringArray.push(str.split(" ")[i]);
        }
        if  (str.split(" ").length > previewStringArray.length){
            return `${previewStringArray.join(" ")}...`;
        } else {
            return `${previewStringArray.join(" ")}`; 
        }
    }
};

// This function takes the date of the API and then refactors it depending the value. 
export const dateChecker = (day: number, month: number, year: number) => {

    let sortedDate = new Date(year, month, day).toDateString().split(' ');

    if (typeof day === "string" && typeof month === "string" && typeof year === "number") {
        return `${year}`;
    } else if (typeof day === "string" && typeof month === "string" && typeof year === "string") {
        return `No date`;
    } else if (typeof day === "string" && typeof month === "number" && typeof year === "number") {
        return `${sortedDate[1]}, ${sortedDate[3]}`;
    }else {
        return `${sortedDate[1]} ${sortedDate[2]}, ${sortedDate[3]}`;
    }
};

// This function helps us give a visual rating with stars
export const getRating = (rating: number) => {
    if (rating===0) {
        return '';
    } else if (rating < 1.5){
      return '★';
    } else if (rating < 2.5){
      return '★★';
    } else if (rating < 3.5){
      return '★★★';
    } else if (rating < 4.5){
      return '★★★★';
    } else if (rating <= 5){
      return '★★★★★';
    } else {
      return 'Not rated yet';
    }
};