const inputButton = document.querySelector('#input')
const addButton = document.querySelector('#add')


const tasks = [
    { id: 1, name: 'Task 1', status: 'completed' }
]


const createTask = () => {
    const taskContent = document.querySelector("#taskContent")
    let html = ''
    for (let task of tasks) {
        html += `<div class="flex justify-between items-center border-[#E1E1E1] border-[1px] h-[40px] px-[9px]">
        <div class="flex items-center">
            <div><input onchange="changeStatus(${task}, event)" type="checkbox" ${task.status === 'completed' ? 'checked' : ''}></div>
            <span id="${task.id}" class="font-700 text-[12px] leading-[16px] ml-[10px] ${task.status === 'completed' ? 'line-through' : ''}">${task.name}</span>
        </div>
        <div class="flex items-center space-x-[8px]">
            <div class="bg-[#0085FF] rounded-[5px] p-[5px]"><img class="size-[10px]" src="./images/pen.svg" alt=""></div>
            <div class="bg-[#FF0000] rounded-[5px] p-[5px]"><img class="size-[10px]" src="./images/trash.svg" alt=""></div>
        </div>
    </div>`
    }
    taskContent.innerHTML = html
}
createTask()

addButton.addEventListener('click', function (e) {
    tasks.unshift({id: tasks.length + 1, name: inputButton.value, status: 'pending'})
    createTask()
})



const changeStatus = (task ,event) => {
    let status = 'pending'
    if(event.target.checked) status = 'completed'
    task.status = status
    createTask()
}