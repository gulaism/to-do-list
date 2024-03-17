const inputButton = document.querySelector('#input')
const addButton = document.querySelector('#add')
const taskContent = document.querySelector("#taskContent")

let editIndex = ''
const tasks = [
    { id: 1, name: 'Task 1', status: 'completed' }
]


const createTask = () => {
    
    let html = ''
    for (let index in tasks) {
        html += `<div class="flex justify-between items-center border-[#E1E1E1] border-[1px] h-[40px] px-[9px]">
        <div class="flex items-center">
            <div><input onchange="changeStatus(${index}, event)" type="checkbox" ${tasks[index].status === 'completed' ? 'checked' : ''}></div>
            <span id="${tasks[index].id}" class="font-700 text-[12px] leading-[16px] ml-[10px] ${tasks[index].status === 'completed' ? 'line-through' : ''}">${tasks[index].name}</span>
        </div>
        <div class="flex items-center space-x-[8px]">
            <button onclick="editElement(${index})" class="bg-[#0085FF] rounded-[5px] p-[5px]"><img class="size-[10px]" src="./images/pen.svg" alt=""></button>
            <button onclick="deleteElement(${index})" class="bg-[#FF0000] rounded-[5px] p-[5px]"><img class="size-[10px]" src="./images/trash.svg" alt=""></button>
        </div>
    </div>`
    }
    taskContent.innerHTML = html
}
createTask()

addButton.addEventListener('click', function (e) {
    if(editIndex.toString()){
        tasks[editIndex].name = inputButton.value
        editIndex = ''
    }
    else {
        tasks.unshift({id: tasks.length + 1, name: inputButton.value, status: 'pending'})
    }
    
    createTask()
    inputButton.value = ' ';
})



const changeStatus = (index, event) => {
    let status = 'pending'
    if(event.target.checked) status = 'completed'
    tasks[index].status = status
    createTask()

}

const deleteElement = (index) => {
    const value = confirm('Do you want to delete this task?')
    if(value === true) tasks.splice(index, 1)
    
    createTask()
}

const editElement = (index) => {
    editIndex = index
    inputButton.value = tasks[index].name
}