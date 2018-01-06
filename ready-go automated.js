var num=1;
function color_game() 
{
    var img=document.getElementsByTagName("img");
    for(i=0;i<3;i++)
    {
        img[i].setAttribute('src', 'gray.png');
    }


if(num==1)
{
img[0].src='red.png'
}

else if(num==2)
{
img[1].setAttribute('src','orange.png');
}
else if(num==3)
{
img[2].setAttribute('src','green.png');
num=0;
}
num++;

    
}
setInterval(color_game,2000);