let interviewList = [];
let rejectedList = [];

let totalNum = document.getElementById("totalboxcount");
let interviewNum = document.getElementById("interviewboxcount");
let rejectedNum = document.getElementById("rejectedboxcount");
const allBoxParent  = document.getElementById("allbox");

let btnAll = document.getElementById("btn-all")
let btnInterview = document.getElementById("btn-interview")
let btnRejected = document.getElementById("btn-rejected")


function calculateCount(){
    totalNum.innerText = allBoxParent.children.length;
    interviewNum.innerText = interviewList.length;
    rejectedNum.innerText = rejectedList.length;
}
calculateCount()

function toggleEffect(id) {
    btnAll.classList.remove('bg-blue-500');
    btnInterview.classList.remove('bg-blue-500');
    btnRejected.classList.remove('bg-blue-500');

    btnAll.classList.add('bg-white');
    btnInterview.classList.add('bg-white');
    btnRejected.classList.add('bg-white');

    let selected = document.getElementById(id)
    selected.classList.remove('bg-white')
    selected.classList.add('bg-blue-500')
}