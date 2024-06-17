let add = document.getElementById('addTask');

let button = document.getElementById('plus');

let taskList = document.getElementById('listOfTask');





function newTask(){
    let element = document.createElement('div');
    element.innerHTML = "<div class='list'>" + add.value + "</div>";

    element.setAttribute('class', 'list');

    taskList.appendChild(element);
  

    let choose = document.querySelectorAll(".list"); 
    choose.forEach(sun => {
        sun.onclick = () => {
            sun.classList.toggle('done');
        }
    })

    add.value = null;
}

function addOnPage(){
    let saveOnPage = document.getElementById('plus');

    localStorage.getItem('saveOnPage', element.innerHTML);

   
}
button.onclick = newTask;


const colors = ['#ffd230', '#d2c7ff', '#faa49a', '#d6df7e', '#322d31', '#322d31', '#oc5fb3', '#ffebae', '#a7b5fe', '#7cb8c0', '#543787', '#f3843c', '#fcebd7', '#daf743', '#ff93b3', '#ee1c43', '#0056bb', '#00666a' ]

const changeColor = document.getElementById('palette');

changeColor.addEventListener('click' , () => {
    const fon = document.querySelector('.container');
    fon.style.backgroundColor = colors[getRandomNumber()];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

