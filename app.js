$(document).ready(function(){
  var output="";
  var calculate="";
  $("#display").text("0");
       
$("button").not("#clear,.operator").click(function(){
      calculate += $(this).text();
      $("#display").text(calculate);
 })
       
$('#clear').on('click',function(){
   calculate="";
   $("#display").text("0");
});
       
$(".operator").not("#equals").click(function(){
   operator=$(this).text();
   calculate += operator;
   $("#display").text(calculate);
})
       
$("#equals").click(function(){
  output = eval(calculate);
   
    // console.log(expression),
    // output=eval(expression);
    $("#display").text(output);
    // console.log(expression),
    calculate="";
 })


 });
  