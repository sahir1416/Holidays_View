function fun4()
{
    var uname=document.getElementById("uname").value;
    var pass=document.getElementById("pass").value;

    if (uname=="developer" && pass=="buddies") 
    {

        var mywindow=window.open("Holiday Days.html","_self");
        
    }
    else 
    {
        alert("invalid username & password.");
    }
}
function fun401()
{
    var mywindow2=window.open("Registration (1).html");
}


fun4()
fun401()
