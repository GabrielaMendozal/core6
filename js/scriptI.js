let count= 3;
let countElement = document.querySelector ("#count")

console.log(countElement);

function add1(){
    count++;
    countElement.innerText = count + " " + "like(s)";
    console.log(count);
}
