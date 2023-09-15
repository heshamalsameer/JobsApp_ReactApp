let enter = document.getElementById("enter");
let emil = document.getElementById("text");
let pas = document.getElementById("pass");
let sub = document.getElementById("sub");
let error = document.getElementById("error");
let fn = document.getElementById("fN");
let sn = document.getElementById("sN");
let calc = document.getElementById("calc");
let cal = document.getElementById("cal");
let res = document.getElementById("result");
let li = document.getElementById("list");

let arr2 = [  { emil : "hesham@gmail.com",password : "123"},{emil : "ali@1235.com",password : "456"},{emil : "123hh@@.com",password : "789"}];
sub.addEventListener("click" , () => {
    let b = arr2.some((e) => {
        return e.emil === emil.value && e.password === pas.value;
    });   
    if (b) {
       enter.style.display = "none";
       cal.style.display = "block";
       error.style.display = "none";
    } else {
        error.style.display = "block";
    }
});
calc.addEventListener("click", () => {
        switch (li.value) {
            case "+": 
              res.innerText =`${fn.value} ${li.value} ${sn.value} = ${+fn.value + +sn.value}`;
              break;
            case "-": 
              res.innerText = `${fn.value} ${li.value} ${sn.value} = ${fn.value - sn.value}`;
              break;
            case "*":  
             res.innerText =`${fn.value} ${li.value} ${sn.value} = ${fn.value * sn.value}`;
             break;
            case "/":   
            if (sn.value != 0) {
                res.innerText =`${fn.value} ${li.value} ${sn.value} = ${fn.value / sn.value}`;
                res.style.color = `black`;
            }else {
                res.innerText = `secound value is not valid`;
                res.style.color = `red`;
            }
    }
});



