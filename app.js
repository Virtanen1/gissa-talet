
function checkNumber(){
    let ju = Math.floor(11*Math.random())
   let input = document.querySelector("input").value
   if (ju == input){
  document.querySelector("div").innerHTML = "Rätt!!!!!!!!!!"
   }
   else{
 document.querySelector("div").innerHTML = "Feil"
   }
}

