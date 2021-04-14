function fun()
{
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;

    if (uname=="Sahir" && pass=="Suma") 
    {

        var mywindow=window.open("holidays.html","_self");
        
    } 
    else 
    {
        alert("invalid username & password.");
    }
}
function fun1()
{
    var mywindow2=window.open("REGISTRATION_FORM.html");
}

fun()
fun1()