const endDate= "1 sep. 2023 10:21 PM"
let lastDate = document.getElementById('endDate')
lastDate.innerText=endDate;

let input = document.querySelectorAll('input')



function clock(){
    let end= new Date(endDate);
    let now= new Date()
    // console.log(end);
    // console.log(now);

    //conversion 
    let diff= (  end - now)/1000;
    // console.log(diff)

if(diff<0)
return;
    //day conversion 

    // console.log(Math.floor(diff/3600/24))
    input[0].value = Math.floor((diff/3600/24))

  //hour conversion 
  input[1].value= Math.floor(diff/3600)%24

  //minute conversion

//   console.log(Math.floor(diff/60)%60);
  input[2].value= Math.floor(diff/60)%60;

  //second conversion 
  console.log(Math.floor(diff)%60);
  input[3].value= Math.floor(diff)%60;


}
clock()


//clock running after 1 second

setInterval ( function(){
    clock()
},1000)