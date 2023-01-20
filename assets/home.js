// const dropdown = document.querySelector('.dropdown');
// const select = dropdown.querySelector('.select');
// const caret = dropdown.querySelector('.caret');
// const menu = dropdown.querySelector('.menu');
// const options = dropdown.querySelectorAll('.menu li');
// const selected = dropdown.querySelector('.selected');


// // add a click event to the select element

// select.addEventListener('click',()=>{
//     // add the clicked select styles to the select element
//     // select.classList.toggle('select-clicked');
//     caret.classList.toggle('caret-rotate');
//     menu.classList.toggle('menu-open');
// });

// options.forEach(option=>{
//     option.addEventListener('click',()=>{
//         selected.innerText = option.innerText;
//         // select.classList.remove('selected-clicked');
//         caret.classList.remove('caret-rotate');
//         menu.classList.remove('menu-open');
//         options.forEach(option =>{
//             option.classList.remove('active');
//         });
//         option.classList.toggle('active');
//     })
// });

const types= document.querySelectorAll('#type');
console.log(types);
types.forEach(type=>{
    var text = type.innerText;
    text = text.toLowerCase();
    console.log("hello",text);
    if (text == "personel"){
        type.style.backgroundColor = "orange";
    }
    else if(text == "work"){
        type.style.backgroundColor = "rgb(232,87,101)";

    }
    else{
        type.style.backgroundColor = "rgba(21, 60, 84, 1)";
    }
});
