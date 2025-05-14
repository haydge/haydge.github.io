//BMI Calculator
//Try this again using arrays
const person1=document.querySelector('#name1');
const person2=document.querySelector('#name2');
const mass1=document.querySelector('#weight1');
const mass2=document.querySelector('#weight2');
const body1=document.querySelector('#height1');
const body2=document.querySelector('#height2');

const namebtn1=document.querySelector('.name1');
const namebtn2=document.querySelector('.name2');
const weightbtn1=document.querySelector('.weight1');
const weightbtn2=document.querySelector('.weight2');
const heightbtn1=document.querySelector('.height1');
const heightbtn2=document.querySelector('.height2');
const compbtn=document.querySelector('.bmiOutput');

const nameEnt1=document.querySelector('.nameEnt1');
const nameEnt2=document.querySelector('.nameEnt2');
const heightEnt1=document.querySelector('.heightEnt1');
const heightEnt2=document.querySelector('.heightEnt2');
const weightEnt1=document.querySelector('.weightEnt1');
const weightEnt2=document.querySelector('.weightEnt2');
const compete=document.querySelector('.resultComp');


namebtn1.addEventListener('click', function(){
  console.log('Hello',person1.value);
  nameEnt1.textContent=`Hello ${person1.value}`;  
})

namebtn2.addEventListener('click', function(){
    console.log('Hello',person2.value);
    nameEnt2.textContent=`Hello ${person2.value}`;  
})

heightbtn1.addEventListener('click', function(){
    console.log(`You are ${body1.value} meters tall`);
    heightEnt1.textContent=`You are ${body1.value} meters tall`;  
})

heightbtn2.addEventListener('click', function(){
    console.log(`You are ${body2.value} meters tall`);  
    heightEnt2.textContent=`You are ${body2.value} meters tall`;
})

weightbtn1.addEventListener('click', function(){
    console.log(`You weight ${mass1.value}kg`);  
    weightEnt1.textContent=`You weight ${mass1.value}kg`;
})

weightbtn2.addEventListener('click', function(){
    console.log(`You weight ${mass2.value}kg`);  
    weightEnt2.textContent=`You weight ${mass2.value}kg`;
})  



let x = "Uncertain";

compbtn.addEventListener('click', function(){
    
    // let denom1=Number(body1)*Number(body1);
    // let denom2=Number(body2)*Number(body2);
    let denom1=Number(body1.value)*Number(body1.value);
    let denom2=Number(body2.value)*Number(body2.value);
    let bmi1=Number(mass1.value)/denom1;
    let bmi2=Number(mass2.value)/denom2;


if(Number(bmi1)>(Number(bmi2))){
    x = "True";
    compete.textContent=`${person1}'s BMI of ${bmi1} is higher than ${person2}'s BMI of ${bmi2}.`;
}
else{
    x = "False";
    compete.textContent=`${person2}'s BMI of ${bmi2} is higher than ${person1}'s BMI of ${bmi1}.`;
}

    console.log(`The BMI of ${person1.value} is ${Math.floor(bmi1)}, The BMI of ${person2.value} is ${Math.floor(bmi2)}. ${person1.value}'s BMI is higher than ${person2.value}'s BMI; that is ${x}`)
    console.log("This is denoma1, ",denom1);
    console.log("This is bmi1,", bmi1);
})

