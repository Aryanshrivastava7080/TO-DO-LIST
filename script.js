const inpt = document.getElementById('inpt')
    // const buton = document.getElementById('btn')
const checkbox = document.querySelector('#checkbox')


function addTask() {
    if (inpt.value === '') {
        alert("please enter a task")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inpt.value
        checkbox.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inpt.value = '';
    saveData();
}

checkbox.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("check");
        saveData();

    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData() {
    localStorage.setItem("data", checkbox.innerHTML);
}

function showdata() {
    checkbox.innerHTML = localStorage.getItem('data');
}
showdata();


// let arr = [300, 8, 900, 400, 6]
// let n = arr.length;
// let temp='';
// for (let i = 0; i <= n - 1; i++) {
//    if(arr[i]>arr[i+1]){
//     temp+=arr[i];
//    }
//    else{

//    }
// }

// a = 100
// console.log(a)