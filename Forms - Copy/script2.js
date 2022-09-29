const form = document.getElementById("form");
const Name = document.getElementById("name");
const number = document.getElementById("number");
const mail = document.getElementById("mail");


form.addEventListener('submit',e=>{
    e.preventDefault();
    MyFunc();
    console.log(e)
})

function MyFunc(){
   const nameValue = Name.value.trim();
   const numValue = number.value.trim();
   const mailValue = mail.value.trim();
   
   if(nameValue === ""){
    SetError();
   }
   else{
    Setsuccess();
   }
   
   function SetError(){
    const box = document.querySelector(".tbox");
    const valid = document.querySelector("small");
    const icon = document.querySelector(".icon1");
    valid.className='valid';
    box.className="box";
    icon.className="err-icon";

     
   }

   function Setsuccess(){
    const icon = document.querySelector(".icon2");
    icon.className="suc-icon";
   }
}
