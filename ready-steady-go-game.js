function traffic_game (num)
{
    var img=document.getElementsByTagName("img");
    // var initial_state;
    //  initial_state[0]=img[0].setAttribute('src',gray.png);
    //  initial_state[1]=img[1].setAttribute('src',gray.png);
    //  initial_state[2]=img[2].setAttribute('src',gray.png);
    //var  array=[initial_state[0],initial_state[1],initial_state[2]];
    img[0].setAttribute('src','red.png');
    for(i=0;i,i<3;i++)
    {
        img[i].setAttribute('src', 'gray.png');
    }
    if(num==1)
        img[0].setAttribute('src','red.png');
    else if(num==2)
        img[1].setAttribute('src','orange.png');
    else if(num==3)
        img[2].setAttribute('src','green.png');
}
