const form = document.getElementById("form");
const Name = document.getElementById("fname");
const number = document.getElementById("fphone");
const mail = document.getElementById("fmail");

const valid = document.querySelector("small");
const box = document.querySelector(".tbox");
    
    const icon1 = document.querySelector(".icon1");
    const icon2 = document.querySelector(".icon2");

    console.log("It works");

// box.forEach((content)=>
// {
    
// });



form.addEventListener('submit',e=>{
    e.preventDefault();
    MyFunc();
    console.log(e)
})
function MyFunc(){
    const nameValue = Name.value.trim();
   const numValue = number.value.trim();
   const mailValue = mail.value.trim();

   if(nameValue === ''){
    const content = document.querySelector(".form-control");

    SetError(content);
   }
   else{
    const content = document.querySelector(".form-control");

    Setsuccess(content);
}

function SetError(content){

    // control.forEach((content)=>{
        content.className = "form-control fail";
    // });

    // box.classList.remove("gbox");
    // valid.classList.add('valid');
    // box.classList.add("box");
    // icon1.classList.add("err-icon");
    // icon2.classList.remove("suc-icon");
}

function Setsuccess(content){
// control.forEach((content)=>{
content.className = "form-control success";
// });
    
    // box.classList.add("gbox");
    // icon2.classList.add("suc-icon");
    // icon1.classList.remove('err-icon');
    // valid.classList.remove('valid');
    // box.classList.remove("box");
}
}