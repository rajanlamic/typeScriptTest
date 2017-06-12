/**
 * Created by kalpana on 03/06/17.
 */

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    return labelledObj.label;
}

let myObj = {size: 10, label: "Size 10 Object"};

document.getElementById("root").innerHTML = printLabel(myObj);