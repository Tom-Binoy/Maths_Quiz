// users' name
   p1n = localStorage.getItem("user_p1");
   p2n = localStorage.getItem("user_p2");
   


   // valiable used common
   ansq = "";
   score1 = 0;
   score2 = 0;
   questiont = 1;
   s =" "
   

  // score and name updating variables
   p1up = score1+s+"points for "+p1n;
   p2up = score2+s+"points for "+p2n;


    // input location
    input1 = document.getElementById("ques")
    input2 = document.getElementById("ans")
   


    // input1 eventListener
    input1.addEventListener("keypress", function(event){
        if(event.key == "Enter"){

          document.getElementById("output").style.display = "block";
          document.getElementById("at").style.display = "block";
          document.getElementById("qat").style.display = "none";
   
            // question splliting 
          question = document.getElementById("ques").value;
          split = question.split(" ")
          no1 = Number(split[0]);
          no2 = Number(split[1]);
   
          // random operator seletion
          op = Math.floor(Math.random()*5)
   
          // random operator seletion
          op = operator1(op)

          // is it Hard
          b = easy1(op,no1,no2);
          h = [b[0], b[1], b[2]];
          console.log( h.length+" ",h )
          if(h[0] == false ){
               console.log("question is not hard")
               //question assigning
          
                 row = h[1];
                 console.log(row);
    
                 document.getElementById("put").innerHTML = row;
                 ansq = h[2];
                 console.log(ansq);
    
                 // making div vissible
         
                input1.style.display ="none";
                document.getElementById("at").innerHTML = p2n+" Please Wright The Answer In Input.";
          }
        }
      })
    
    
// input2 event listener
  input2.addEventListener("keypress",function(event){
   if(event.key == "Enter"){
     answer = document.getElementById("ans").value
          
      if(ansq == answer){
        if(questiont == 1){
          questiont = 2;
          score2++
          setupq()
        }
        else{
          questiont = 1;
          score1++
          setupq()
        }    
      }else{

      }
    }
  })
    

    function operator1(r){
      array = ['x','-','+','÷'];
      result = array[r]
      return result;
    }

function ans(op,n1,n2){
  switch (op){
    case "x" :
      result = n1*n2 ;
      break;
    case "+" :
      result = n1+n2 ;
      break;
    case "-" :
      result = n1-n2 ;
      break;
    case "÷" :
      result = n1/n2 ;
      break;
    default :
      result = "NaN"
  }

  return result;
}

function hard(op,n1,n2){
  let qt = n1+op+n2.toString();
  let at1 = ans(op,n1,n2).toString();

  if(qt.includes(".")  == true || at1.includes(".") == true ){
    return true;
  }
  else{
      return false;
  }
}

function easy1(op,n1,n2){
  
  if( op == "÷" ){
    
    
    if(n1 < n2){
      type = n2+" "+op+" "+n1+" = ______";
      answ = ans(op,n2,n1);
      console.log(n2+op+n1," is not hard")
      return true, type, answ;
    }
    else{
      type = n1+" "+op+" "+n2+" = ______";
      answ = ans(op,n1,n2);
      console.log(n1+op+n2," is not hard")
      return true, type, answ;
    }
  }
  else if(hard(op,n1,n2) == true ){
    
    
    if(hard(op,n2,n1) == true ){
      alert("This Question is hard. Try another")
      input1.value = "";
    }
    else{
      type = n2+" "+op+" "+n1+" = ______";
      answ = ans(op,n2,n1);
      console.log(n2+op+n1," is not hard")
      return true, type, answ;
    }
  }
  else{
      type = n1+" "+op+" "+n2+" = ______";
      answ = ans(op,n1,n2);
      console.log(n1+op+n2," is not hard")
      return true, type,answ;
  }
}

function setupq(){
    
  // player name placing
    document.getElementById("p1_n").innerHTML = p1up;
    document.getElementById("p2_n").innerHTML = p2up;
    
    qturn =   document.getElementById("qat")
    
    
  if( questiont == 1 ){
    qturn.innerHTML = p1n+s+"Please Enter The Question In Folloing Input.";
    document.getElementById("output").style.display = "none";
    document.getElementById("at").style.display = "none";
    document.getElementById("qat").style.display = "block";
  }
  else{
    qturn.innerHTML = p1n+s+"Please Enter The Question In Folloing Input.";
    document.getElementById("output").style.display = "none";
    document.getElementById("at").style.display = "none";
    document.getElementById("qat").style.display = "block";
  }
}