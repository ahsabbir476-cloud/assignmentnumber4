let interviewList = [];
let rejectedList = [];
let totalNum = document.getElementById("totalboxcount");
let interviewNum = document.getElementById("interviewboxcount");
let rejectedNum = document.getElementById("rejectedboxcount");
const allBoxParent  = document.getElementById("allbox");
function calculateCount(){
    totalNum.innerText = allBoxParent.children.length;
    interviewNum.innerText = interviewList.length;
    rejectedNum.innerText = rejectedList.length;
}
calculateCount()