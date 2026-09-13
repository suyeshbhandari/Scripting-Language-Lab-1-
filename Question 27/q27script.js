const para=document.querySelector('p');
console.log(para);
const para2=document.getElementsByTagName('p');
console.log(para2);
const para3=document.getElementById('p1');
console.log(para3);
const para4=document.getElementById('p2');
console.log(para4);
const para5=document.getElementById('p3');
console.log(para5);
const para6=document.getElementById('p4');
console.log(para6);
const list=document.querySelectorAll('p');
console.log(list);
for(let i=0;i<list.length;i++){
   console.log(list[i].textContent);
}
list[3].textContent="Fourth Paragraph";
list[0].setAttribute('id','para1');
list[1].id='para2';
list[2].setAttribute('class','para3');
list[0].style.color = 'blue';
list[0].style.backgroundColor='wheat';
const color=["red","blue","orange","Skyblue","magenta"];
const background=["grey","brown","charcoal","softblue","deepblue"];
for(let i=0;i<list.length;i++){
 list[i].style.fontSize=` ${10+i*4}px`;
 list[i].style.color=color[i];
 list[i].style.backgroundColor=background[i];
}


list[0].style.fontFamily='Roboto, sans-serif';