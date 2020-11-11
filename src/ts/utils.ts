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