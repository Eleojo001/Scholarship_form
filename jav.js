let btn=document.getElementById("btn")
let btnTwo=document.getElementById("btnTwo")
let btnM8=document.getElementById("btnM8")
let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let age=document.getElementById("age")
let phone=document.getElementById("phone")
let gender=document.getElementById("gender")
let continent=document.getElementById("continent")
let school=document.getElementById("school")
let mathscore=document.getElementById("mathscore")
let engscore=document.getElementById("engscore")
let geoscore=document.getElementById("geoscore")
let litscore=document.getElementById("litscore")
let chemscore=document.getElementById("chemscore")
let econscore=document.getElementById("econscore")
let physcore=document.getElementById("physcore")
let govtscore=document.getElementById("govtscore")
let mathematics=document.getElementById("Mathematics")
let English=document.getElementById("English")
let geo=document.getElementById("geo")
let lit=document.getElementById("lit")
let chem=document.getElementById("chem")
let econ=document.getElementById("econ")
let phy=document.getElementById("phy")
let govt=document.getElementById("govt")
// error varirables
let fnameError=document.getElementById("fnameError")
let lnameError=document.getElementById("lnameError")
let ageError=document.getElementById("ageError")
let phoneError=document.getElementById("phoneError")
let genderError=document.getElementById("genderError")
let continentError=document.getElementById("continentError")
let schoolError=document.getElementById("schoolError")
let mathscoreError=document.getElementById("mathscoreError")
let engscoreError=document.getElementById("engscoreError")
let geoError=document.getElementById("geoError")
let geoscoreError=document.getElementById("geoscoreError")
let litError=document.getElementById("litError")
let litscoreError=document.getElementById("litscoreError")
let chemError=document.getElementById("chemError")
let chemscoreError=document.getElementById("chemscoreError")
let econErorr=document.getElementById("econErorr")
let econscoreErorr=document.getElementById("econscoreErorr")
let phyErorr=document.getElementById("phyErorr")
let physcoreErorr=document.getElementById("physcoreErorr")
let govtErorr=document.getElementById("govtErorr")
let govtscoreErorr=document.getElementById("govtscoreErorr")
let subjects=["Geography","Chemistry","Economics","Biology","History","Literature-in-English","CRS","Accounting"]
let point=0
let agePoint=0
let countryPoint=0
let gradePoint=0
let totalPoint=0
let average=0
let sumTotal=0
let summaryOne=document.getElementById("summaryOne")
let summaryTwo=document.getElementById("summaryTwo")
let summaryThree=document.getElementById("summaryThree")
let summaryFour=document.getElementById("summaryFour")
let summaryFive=document.getElementById("summaryFive")


btnM8.addEventListener('click',function(){
    validateform()
})

btnTwo.addEventListener('click',function(){
    validateform()
})
btn.addEventListener('click',function(){
    validateform()
})
function validateform(){
    if(fname.value==""){
console.log("it works")
        fnameError.innerHTML="Required!"
        
    }else if(lname.value==""){
        console.log("it works")
  
  console.log("it works")      
  lnameError.innerHTML="Required!"
        
    }else if(age.value==""){
        console.log("it works")

console.log("it works")       
 ageError.innerHTML="Required!"
        
    }else if(phone.value==""){
        console.log("it works")
        phoneError.innerHTML="Required!"
        
    }else if(gender.value==""){
        console.log("it works")
        genderError.innerHTML="Required!"
        
    }else if(continent.value==""){
        console.log("it works")
        continentError.innerHTML="Required!"
        
    }else if(school.value==""){
        console.log("it works")
        schoolError.innerHTML="Required!"
    }else if(mathscore.value==""){
        console.log("it works")
        mathscoreError.innerHTML="Required!"
        
    }else if(engscore.value==""){
        console.log("it works")
        engscoreError.innerHTML="Required!"
        
    }else if(geo.value==""){
        console.log("it works")
        geoError.innerHTML="Reqired!"
        
    }else if(geoscore.value==""){
        console.log("it works")
        geoscoreError.innerHTML="Required!"
        
    }else if(lit.value==""){
        console.log("it works")
        litError.innerHTML="Required!"
        
    }else if(litscore.value==""){
 
 console.log("it works")       
 litscoreError.innerHTML="Required!"
        
    }else if(chem.value==""){
        console.log("it works")
        chemError.innerHTML="Required!"
        
    }else if(chemscore.value==""){
 
 console.log("it works")       
 chemscoreError.innerHTML="Required!"
        
    }else if(econ.value==""){
        console.log("it works")
        econErorr.innerHTML="Required!"
        
    }else if(econscore.value==""){
        console.log("it works")
        econscoreErorr.innerHTML="Required!"
        
    }else if(phy.value==""){
        console.log("it works")
        phyErorr.innerHTML="Required!"
        
    }else if(physcore.value==""){
        console.log("it works")
 
 console.log("it works")       
 physcoreErorr.innerHTML="Required!"
        
    }else if(govt.value==""){
        console.log("it works")
        govtErorr.innerHTML="Required!"
        
    }else if(govtscore.value==""){
        console.log("it works")
        govtscoreErorr="Required!"

        console.log("it works")
    }else{
        appAction()
    }
    console.log()
    clearError()
}
function clearError(){
    if(fname.value!==""){
        fnameError.innerHTML=""
        console.log("its works")
    }if(lname.value!==""){
        lnameError.innerHTML=""
        console.log("its works")
    }if(age.value!==""){
        ageError.innerHTML=""
        console.log("its works")
    }if(phone.value!==""){
        phoneError.innerHTML=""
        console.log("its works")
    }if(gender.value!==""){
        genderError.innerHTML=""
        console.log("its works")
    }if(continent.value!==""){
        continentError.innerHTML=""
        console.log("its works")
    }if(school.value!==""){
        schoolError.innerHTML=""
        console.log("its works")
    }if(mathscore.value!==""){
        mathscoreError.innerHTML=""
        console.log("its works")
    }if(engscore.value!==""){
        engscoreError.innerHTML=""
        console.log("its works")
    }if(geo.value!==""){
        geoError.innerHTML=""
        console.log("its works")
    }if(geoscore.value!==""){
        geoscoreError.innerHTML=""
        console.log("its works")
    }if(lit.value!==""){
        litError.innerHTML=""
        console.log("its works")
    }if(litscore.value!==""){
        litscoreError.innerHTML=""
        console.log("its works")
    }if(chem.value!==""){
        chemError.innerHTML=""
        console.log("its works")
    }if(chemscore.value!==""){
        chemscoreError.innerHTML=""
        console.log("its works")
    }if(econ.value!==""){
        econErorr.innerHTML=""
        console.log("its works")
    }if(econscore.value!==""){
        econscoreErorr.innerHTML=""
        console.log("its works")
    }if(phy.value!==""){
        phyErorr.innerHTML=""
        console.log("its works")
    }if(physcore.value!==""){
        physcoreErorr.innerHTML=""
        console.log("its works")
    }if(govt.value!==""){
        govtErorr.innerHTML=""
        console.log("its works")
    }if(govtscoreErorr.value!==""){
        govtscoreErorr.innerHTML=""
        console.log("its works")
    }
    console.log("all works")
}



loopGeo()
looplit()
loopChem()
loopEcon()
loopPhy()
loopGovt()

function loopGeo(){
    let allOptions=""
    for(let a=0; a< subjects.length;a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
    geo.innerHTML=`<option value="">Select subject</option>${allOptions}`
    console.log()
}
function looplit(){
    let allOptions=""
    for(let a=0; a< subjects.length;a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
    lit.innerHTML=`<option value="">Select subject</option>${allOptions}`
    console.log()
}
function loopChem(){
    let allOptions=""
    for(let a=0; a< subjects.length;a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
        console.log()
    }
    chem.innerHTML=`<option value="">Select subject</option>${allOptions}`
    console.log()
}
function loopEcon(){
    let allOptions=""
    for(let a=0; a< subjects.length;a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
    econ.innerHTML=`<option value="">Select subject</option>${allOptions}`
    console.log()
}
function loopPhy(){
    let allOptions=""
    for(let a=0; a< subjects.length;a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
        
    }
    phy.innerHTML=`<option value="">Select subject</option>${allOptions}`
    console.log()
}
function loopGovt(){
    let allOptions=""
    for(let a=0; a< subjects.length;a++){
        allOptions+=`<option value="${a}"> ${subjects[a]}</option>`
    }
    govt.innerHTML=`<option value="">Select subject</option>${allOptions}`
    console.log()
}
// console.log()

function appAction(){
    if(age.value=="1"){
        point=point+100
        alert("100 points for you age")
        console.log("you have 100 points")
    }else if(age.value=="2"){
        point=point+80
        alert("you have 80 points for you age")
        console.log("you have 80 points")
    }else if(age.value=="3"){
        point=point+50
        alert("50 points for you age")
        console.log("50 points")
    }else if(age.value=="4"){
        point=point+30
        console.log("you have 30 points for you age")
        alert("you have 30 points")
    }else if(age.value=="5"){
        point=point+10
        alert("you have 10 points for you age")
        console.log("you have 10 points")
    }
    
    alert("average age point "+point)
    countrytotal()
}
function countrytotal(){
    if(continent.value=="1"){
        countryPoint=countryPoint+50
        alert("50 points based on your country")
        console.log("you have 50 points")
    }else if(continent.value=="2"){
        countryPoint=countryPoint+40
        alert("you have 80 points based on your country")
        console.log("you have 80 points")
    }else if(continent.value=="3"){
        countryPoint=countryPoint+30
        alert("50 points based on your country")
        console.log("50 points")
    }else if(continent.value=="4"){
        countryPoint=countryPoint+30
        console.log("you have 30 points based on your country")
        alert("you have 30 points")
    }else if(continent.value=="5"){
        countryPoint=countryPoint+10
        alert("you have 10 points")
        console.log("you have 10 points")
    }
    
    alert("contry average is "+countryPoint)
    console.log("contry average is "+countryPoint)

    sumtotal()
}


function sumtotal(){
    totalPoint=parseInt(mathscore.value)+parseInt(engscore.value)+parseInt(geoscore.value)+parseInt(litscore.value)+parseInt(chemscore.value)+parseInt(econscore.value)+parseInt(physcore.value)+parseInt(govtscore.value)
    alert(totalPoint + " is your total point")
    avg()
    console.log()
}
function avg(){
    average=totalPoint/8
    alert(average + " is your average")
    if(average>=90&&average<=100){
        alert("you have an 150 points based on  cummulative average")
        console.log()
        
    }else if(average>=85&&average<=89){
        alert("you have 140 points")
        console.log()
        
    }
    else if(average>=75&&average<=84){
        alert("you have an 120 point  based on cummulative averages fo your grades")
        console.log()
        
    }else if(average>=65&&average<=74){
        alert("you have 100 points based on cummulative averages fo your grades")
        console.log()
        
    }else if(average>=60&&average<=64){
        alert("you have an 80 points based on  cummulative average fo your grades")
        console.log()
        
    }else if(average>=50&&average<=59){
        alert("you have an 50 points based on  cummulative average fo your grades")
        console.log()
        
    }else if(average>=40&&average<=49){
        alert("you have an 20 points based on  cummulative average fo your grades")
        console.log()
        
    }
    
    alert("percentage aveg score "+average)
    console.log()

    cummulativetotal()
    

}
function cummulativetotal(){
    sumTotal=point+countryPoint+average
    alert("your sumtotal is "+ sumTotal)
    if(sumTotal<180 || sumTotal>=50){
        summaryOne.innerHTML="Congratulations!!! you have been Awarded Scholarship" 
        summaryThree.innerHTML=`Your total point based on age is ${point}`
        summaryFour.innerHTML=`Your total point based on your continent is ${countryPoint}`
        summaryFive.innerHTML=`Your total point based on your continent is ${average}` 
        end()
        console.log()
    }
    else{
            summaryTwo.innerHTML="Sorry you are not eligible for this scholarship"
    }
}



function end(){

  const labels = [
    'Age',
    'Continent',
    'Grade',
    
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'SUMMARY OF STUDENT PERFORMANCE',
      backgroundColor: ['rgb(28, 49, 6) ', 'rgb(0, 255, 55) ','rgb(200, 255, 0) '] ,
      borderColor: 'rgb(255, 99, 132)',
      data: [point, countryPoint, average, ],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  }


