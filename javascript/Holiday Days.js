function fun()
{
    var mywindow=window.open("Holiday Days.html","_self");
}

function fun1()
{
    var mywindow2=window.open("Holiday Gallery.html","_self");
}
function fun2()
{
    var mywindow3=window.open("Holiday Contact.html","_self");
}
function fun3()
{
    var mywindow3=window.open("Holiday About.html","_self");
}
function fun31() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}
function fun11()
{
    var mywindow11=window.open("Holiday Gallery(Mumbai).html","_self");
}
function fun12()
{
    var mywindow11=window.open("Holiday Gallery(Goa).html","_self");
}
function fun13()
{
    var mywindow11=window.open("Holiday Gallery(Gujarat).html","_self");
}
function fun14()
{
    var mywindow11=window.open("Holiday Gallery(Himachal Pradesh).html","_self");
}
function fun15()
{
    var mywindow11=window.open("Holiday Gallery(Delhi).html","_self");
}
function fun16()
{
    var mywindow11=window.open("Holiday Gallery(Rajasthan).html","_self");
}
function fun21()
{
    var mywindow11=window.open("Holiday Contact(Mumbai).html","_self");
}
function fun22()
{
    var mywindow11=window.open("Holiday Contact(Goa).html","_self");
}
function fun23()
{
    var mywindow11=window.open("Holiday Contact(Gujarat).html","_self");
}
function fun24()
{
    var mywindow11=window.open("Holiday Contact(Himachal Pradesh).html","_self");
}
function fun25()
{
    var mywindow11=window.open("Holiday Contact(Delhi).html","_self");
}
function fun26()
{
    var mywindow11=window.open("Holiday Contact(Rajasthan).html","_self");
}
function fun100()
{
    var mywindow11=window.open("https://www.facebook.com/");
}
function fun101()
{
    var mywindow11=window.open("https://twitter.com/");
}
function fun102()
{
    var mywindow11=window.open("https://www.instagram.com/");
}

$(window).on("scroll", function() {
    if($(window).scrollTop() > 8) {
        $(".navbar").addClass("change");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar").removeClass("change");
    }
});