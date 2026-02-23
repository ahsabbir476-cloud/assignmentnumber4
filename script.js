let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let totalNum = document.getElementById("totalboxcount");
let interviewNum = document.getElementById("interviewboxcount");
let rejectedNum = document.getElementById("rejectedboxcount");
const allBoxParent = document.getElementById("allbox");

let btnAll = document.getElementById("btn-all")
let btnInterview = document.getElementById("btn-interview")
let btnRejected = document.getElementById("btn-rejected")

let mainAll = document.getElementById("main");

let filteredSection = document.getElementById("filtered-section")

function calculateCount() {
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
    currentStatus = id
    selected.classList.remove('bg-white')
    selected.classList.add('bg-blue-500')

    if (id == 'btn-interview') {
        allBoxParent.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderInterview() 
    } else if (id == 'btn-all') {
        allBoxParent.classList.remove('hidden')
        filteredSection.classList.add('hidden')
        renderInterview() 
    } else if (id == 'btn-rejected'){
        allBoxParent.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderRejected()
    }
}

mainAll.addEventListener('click', function (event) {

    if (event.target.classList.contains('btnInterview')) {
        const parentDiv = event.target.parentNode.parentNode;
        const companyName = parentDiv.querySelector('.companyname').innerText;
        const description = parentDiv.querySelector('.description').innerText;
        const details = parentDiv.querySelector('.details').innerText;
        let status = parentDiv.querySelector('.status').innerText;
        const description2 = parentDiv.querySelector('.description2').innerText;
        parentDiv.querySelector('.status').innerText = 'Interviewed'
        const cardInfo = {
            companyName,
            description,
            details,
            status: 'Interviewed',
            description2
        }

        const companyExist = interviewList.find(item => item.companyName == cardInfo.companyName);
        if (!companyExist) {
            interviewList.push(cardInfo)
        }
        
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)
        calculateCount()
        renderInterview()
    } else if (event.target.classList.contains('btnRejected')) {
        const parentDiv = event.target.parentNode.parentNode;
        const companyName = parentDiv.querySelector('.companyname').innerText;
        const description = parentDiv.querySelector('.description').innerText;
        const details = parentDiv.querySelector('.details').innerText;
        let status = parentDiv.querySelector('.status').innerText;
        const description2 = parentDiv.querySelector('.description2').innerText;
        parentDiv.querySelector('.status').innerText = 'Rejected'
        const cardInfo = {
            companyName,
            description,
            details,
            status: 'Rejected',
            description2
        }

        const companyExist = rejectedList.find(item => item.companyName == cardInfo.companyName);
        if (!companyExist) {
            rejectedList.push(cardInfo)
        }


        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)
        calculateCount()
    }
})

function renderInterview() {
    filteredSection.innerHTML = ''

    for (let interview of interviewList) {
        let div = document.createElement('div')
        div.className = 'flex justify-between p-4 bg-white border rounded mb-4'
        div.innerHTML = `
                
                <div>
                    <h2 class="companyname text-[20px] font-bold">${interview.companyName}</h2>
                    <p class="description text-gray-500 text-[16px]">${interview.description}</p>
                    <p class="details pt-2 pb-2"></p>
                    <button class="status bg-gray-200 p-1.5 rounded-[2px]">${interview.status}</button>
                    <p class="description2 pt-1.5 pb-1.5">${interview.description2}</p>
                    <div class="flex gap-3">
                        <button class="text-green-500 p-3 border rounded-[5px]">INTERVIEW</button>
                        <button class="text-red-500 p-3 border rounded-[5px]">REJECTED</button>
                    </div>
                </div>
                <div>delete</div>

        `
        filteredSection.appendChild(div)
    }
}

function renderRejected() {
    filteredSection.innerHTML = ''

    for (let rejected of rejectedList) {
        let div = document.createElement('div')
        div.className = 'flex justify-between p-4 bg-white border rounded mb-4'
        div.innerHTML = `
                
                <div>
                    <h2 class="companyname text-[20px] font-bold">${rejected.companyName}</h2>
                    <p class="description text-gray-500 text-[16px]">${rejected.description}</p>
                    <p class="details pt-2 pb-2"></p>
                    <button class="status bg-gray-200 p-1.5 rounded-[2px]">${rejected.status}</button>
                    <p class="description2 pt-1.5 pb-1.5">${rejected.description2}</p>
                    <div class="flex gap-3">
                        <button class="text-green-500 p-3 border rounded-[5px]">INTERVIEW</button>
                        <button class="text-red-500 p-3 border rounded-[5px]">REJECTED</button>
                    </div>
                </div>
                <div>delete</div>

        `
        filteredSection.appendChild(div)
    }
}
