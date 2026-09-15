let con=document.getElementById("content")
let name=document.getElementById("name")
let oname=document.getElementById("oname")
let fname=document.getElementById("f-name")
let sname=document.getElementById("s-name")
let ans=document.getElementById("ans")
let counts=document.getElementById("counts")
let result=document.getElementById("result")
let arr=[{key:"F",value:"Friends",active:true},{key:"L",value:"Love",active:true},{key:"A",value:"Affection",active:true},{key:"M",value:"Marriage",active:true},{key:"E",value:"Enemy",active:true},{key:"S",value:"Sister",active:true}]
let nm=[]
let onm=[]
let first;
let second;
// let ccarr=[]
// let duplet={}


function check(){
    // if(!name.trim||!oname.trim){
    //      errorMsg()
    //      return
    // }
nm=name.value.toUpperCase().replace(/\s/g, "").split("").map(a=>{return {v:a,active:true}})
onm=oname.value.toUpperCase().replace(/\s/g, "").split("").map(a=>{return {v:a,active:true}})
console.log(nm,onm)
findDuplicats()
}
function errorMsg(){
alert(`please enter name and other name `)
}
function findDuplicats(){
//    let ans= ccarr.reduce((obj,v,ind)=>{
//         return ind!==ccarr.indexOf(v)?{...obj,[v]:obj[v]+1}:{...obj,[v]:1}
//     },{})
//   duplet=ans
first=nm.length<=onm.length?nm:onm
second=nm.length<=onm.length?onm:nm
for(let i=0;i<first.length;i++){
for(let j=0;j<second.length;j++){
if(first[i].v==second[j].v&&(first[i].active&&second[j].active)){
    first[i].active=false
    second[j].active=false
}
}
}
showData()
}

function showData(){
    ans.style.display="flex"
    counts.style.display="flex"
    let vl=first.filter(a=>a.active).length+second.filter(a=>a.active).length
    let counting=0
    let intv=setInterval(()=>{
        counting++
        counts.innerHTML=`${counting} `
        if(counting==vl){
            clearInterval(intv)
            result.style.display="flex"
            showingResult(vl,counting)
        }
    },100)
    first.forEach((obj)=>{
        let span=document.createElement("span")
        span.innerHTML=obj.v
        span.className=`${obj.active?'':'same'}`
        fname.appendChild(span)
    })
       second.forEach((obj)=>{
        let span=document.createElement("span")
        span.innerHTML=obj.v
        span.className=`${obj.active?'':'same'}`
        sname.appendChild(span)
    })
}
function showingResult(vl, counting){
    let sarr=[...arr]
let index=0
let count=counting
while(count>1){
    index=(index+vl-1)%arr.length
    sarr.splice(index,1)
    count--
}
console.log(index)
result.innerHTML=`${arr[index].value}`
console.log(arr[index].value)
}