
const arr1 = [1,2,3]
let html = ""

arr1.forEach((value,index) => html += `<li>value: ${value} --- index: ${index}</li>`);
document.getElementById("app").innerHTML = html
