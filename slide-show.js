var num=0,num2=3;
var interval_id;
function movie_show()
{
    var img=document.getElementsByTagName("img");
    if(num==0)
    {
        img[0].setAttribute('src','red.png');
}
else if(num==1){    
img[0].setAttribute('src','green.png');
}    
else if(num==2){
img[0].setAttribute('src','gray.png');
}    
else if(num==3)
{
img[0].setAttribute('src','orange.png');
num=0;
}

num++;
//var array=[img[0].setAttribute('src','red.png'),img[0].setAttribute('src','gray.png'),img[0].setAttribute('src','orange.png')];]
    //array[num];
   // console.log(array[num])        
}
function movie_show2()
{
    var img=document.getElementsByTagName("img");
    if(num2==3)
    {
        img[0].setAttribute('src','red.png');
}
else if(num2==2){    
img[0].setAttribute('src','green.png');
}    
else if(num2==1){
img[0].setAttribute('src','gray.png');
}    
else if(num2==0)
{
img[0].setAttribute('src','orange.png');
num2=3;
}
num2--;
}
function play()
{
    interval_id=setInterval(movie_show,2000)
}
function stop()
{
    clearInterval(interval_id); 
}
var btn = document.getElementById('next');
 btn.addEventListener('click',movie_show);
  var btn = document.getElementById('prev');
  btn.addEventListener('click',movie_show2);
var btn = document.getElementById('pla');
btn.addEventListener('click',play);
var btn = document.getElementById('sto');
btn.addEventListener('click',stop);


