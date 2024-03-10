const inputButton = document.querySelector('#input')
const addButton = document.querySelector('#add')


const tasks = [
    { id: 1, name: 'Task 1' }
]


const createTask = () => {
    const taskContent = document.querySelector("#taskContent")
    let html = ''
    for (let task of tasks) {
        html += `<div class="flex justify-between items-center border-[#E1E1E1] border-[1px] h-[40px] px-[9px]">
        <div class="flex items-center">
            <div><img src="./images/Frame.svg" alt="" class="size-[15px] mr-[10px]"></div>
            <span id="${task.id}" class="font-700 text-[12px] leading-[16px]">${task.name}</span>
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
    tasks.unshift({id: tasks.length + 1, name: inputButton.value})
    createTask()
})