var inputs_para1 = [];
var inputs_para2 = [];
function getpara1()
{
var display_para1=[];
for(var i=1;i<6;i++)
{  
    inputs_para1.push(document.getElementById("para1_ib_"+i).value);    
}
display_para1.push('<h4>');
for (var k = 0; k < 5; k++) 
    {
        //display_para1.push( "<h4>"+ inputs_para1[k]+"</h4>");
        display_para1.push(inputs_para1[k]);
       // console.log(display_para1);
    }

   display_para1.push('</h4>');
   console.log(display_para1);
document.getElementById("showpara1").innerHTML = display_para1.join(". ");
}

function getpara2()
{
var display_para2=[];
for(var i=1;i<6;i++)
{  
    inputs_para2.push(document.getElementById("para2_ib_"+i).value);    
}
display_para2.push('<h4>');
for (var k = 0; k < 5; k++) 
    {
        //display_para1.push( "<h4>"+ inputs_para1[k]+"</h4>");
        display_para2.push(inputs_para2[k]);
       // console.log(display_para1);
    }

   display_para2.push('</h4>');
   console.log(display_para2);
document.getElementById("showpara2").innerHTML = display_para2.join(". ");


}