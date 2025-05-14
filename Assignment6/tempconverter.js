//Temp Converter

const celsInput=document.querySelector('#celsInput')
const fareInput=document.querySelector('#fareInput')

const celsBtn=document.querySelector('.celsInput')
const fareBtn=document.querySelector('.fareInput')

const celsmsg=document.querySelector('.msgOut1')
const faremsg=document.querySelector('.msgOut2')

const celsmsg2=document.querySelector('msgout3')
const farenmsg2=document.querySelector('msgout4')

celsBtn.addEventListener('click', function(){
    let newFaren=Number(celsInput.value)*1.8+32;
    celsmsg.textContent=`${celsInput.value}°C is ${newFaren}°F `;
    console.log(celsFunc(celsInput));
})

fareBtn.addEventListener('click', function(){
    let newCels=Number(fareInput.value)-32;
    newCels*=5/9;
    faremsg.textContent=`${fareInput.value}°F is ${Math.ceil(newCels)}°C `;
    console.log(farenFunc(fareInput))
})

const celsFunc=temp=>`${celsInput.value}°C is ${Number(celsInput.value)*1.8+32}°F `;
const farenFunc=temp=>`${fareInput.value}°C is ${Math.ceil((Number(fareInput.value)-32)*5/9)}°F `;
