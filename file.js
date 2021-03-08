 
alert("Hello Dear 😎")



var userinput = prompt ("Did you read  1984 novel befor?") 
var massage1 = "Congratulations !!! 🤩"
var massage2 = " NOOOOOO, Search about the 1984 novel and READ it !! 😖"



while ( userinput != "no"  &&  userinput != "yes")
{ 
    userinput = prompt("Answer with yes or no, for please !");
} 





if (userinput == "yes")
{
     console.log(userinput);

    alert(massage1)
    
     document.write(massage1 );
     
     var num = prompt ("How many person would you like to celebrate with you?")
         
    Function1();

    alert ("Good bye 🤓");
}     
   

  else if (userinput == "no")
{
    alert(massage2)

     var answer2 = prompt ("Would you like to read it?")

     document.write ( massage2 );  



    if (answer2 == "no")
    {
        var num2 = confirm ("Good bye 🤓")
    }

    else if (answer2 == "yes")   
    {   
        var num2 = prompt ("How many person would you like to celebrate with you?")

      Function2();         
   
    } 
     
     
}

function Function1() 
{
    for (var i = 0; i < num ; i++)
     {      
      var img = new Image();
      img.src = "./200.gif"
      document.body.appendChild(img);
     }
}

function Function2()
{
    for (var i = 0; i < num2 ; i++)
        {     
          var img = new Image();
          img.src = "./100.gif"
          document.body.appendChild(img);
         }
}



