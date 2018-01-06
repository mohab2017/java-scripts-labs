function live ()
{
  var p=document.getElementsByTagName('p');
 var j;
  var a=[];
  var z=[];
  for(var i=0;i<5;i++)
  {
      j=0;
      a[i]=document.createElement('a');
      document.body.replaceChild(a[i],p[j]);
       z[i]=document.createElement('p');
       z[i].innerHTML='\n ';
      document.body.appendChild(z[i]);
  }
  a[0].setAttribute('href','www.google.com');
  a[0].innerHTML='google';
  a[1].setAttribute('href','www.facebook.com');
  a[1].innerHTML='facebook';
  a[2].setAttribute('href','www.twitter.com');
  a[2].innerHTML='twitter';
}