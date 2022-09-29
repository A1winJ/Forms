
function myFunc(){

    let ans = document.querySelectorAll('.tbox');
ans.forEach((content)=>
{
console.log(content.value);
})
    
if(document.querySelector('.gen1').checked){
    console.log('Male')
}
if(document.querySelector('.gen2').checked){
    console.log('Female')
}

let date = document.querySelector('.dob');
console.log(date.value);

let drop = document.querySelector('.drop');
console.log(drop.value);

let addr = document.querySelector('.tarea');
console.log(addr.value);

let check = document.querySelector('.check');
console.log(check.value);

// alert("Your data is saved successfully")

var den = {
    "Name":"Victor",
    "phone":"654762546875",
}

var a = new XMLHttpRequest();
a.onreadystatechange=function(){

    if(this.readyState==4 && this.status==200){
    // const div = document.createElement('div');
    // const textNode = document.createTextNode(this.responseText);
    document.querySelector('.hlo').innerHTML = this.responseText;
    console.log("hello");
    console.log(this.getResponseHeader('Content-type'));
    // div.append(textNode);

    
    }
};
// const card=document.getElementsByClassName('sec2');
//     card.append(div);


// $.post('https://localhost:44352/api/Coller', {Name:'client', phone:'8436785'});
a.open("GET","https://localhost:44352/api/Coller",true);
a.send(den);
}