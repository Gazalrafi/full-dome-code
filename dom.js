//examine the document object
// console.dir(document);
//  console.log(document.domain);
// console.log(document.url)
// console.log(document.title)
// document.title=123;
// console.log(document.doctype);
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// //document.all[10].textContent='hello';
// console.log(document.forms[0])
// console.log(document.links)
//console.log(document.images)

//get element by Id

//console.log(document.getElementById('header-title'))
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');

//console.log(headerTitle)
//headerTitle.textContent='hello';
//headerTitle.innertext='Goodbye';
//console.log(headerTitle.textContent)
//console.log(headerTitle.innerText)
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';
/*var x=document.getElementById("bold");
x.style.color="green";

//get eements by class name
var items=document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items)
console.log(items[1])
items[1].textContent='hello2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';
*/

//items.style.background='grey'; //this do not work
// because we have to go through loop to doing this
/*
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='grey';
}
*/
/*for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}
items[3].style.backgroundColor='green';
*/


//get elements by tag name
/*var li=document.getElementsByTagName('list-group-item');
console.log(li)
console.log(li)
console.log(li[1])
li[1].textContent='hello2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';

for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}
li[3].style.backgroundColor='green';
*/

//Query selector
/*
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px grey';

var input=document.querySelector('input');
input.value='Hello world';

var submit=document.querySelector('input[type="submit"]');
submit.value='send'

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';
*/
//Query selector all

// var titles=document.querySelectorAll('.title');
// console.log(titles)
// titles[0].textContent='hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='skyblue';
// }


// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<even.length;i++){
//     even[i].style.backgroundColor='lightgreen';
// }

// var invisible=document.querySelector('.list-group-item:nth-child(3)');
// invisible.style.visibility='hidden';

// var item=document.querySelector('.list-group-item:nth-child(2)');
// item.style.backgroundColor='green';

var item=document.querySelectorAll('.list-group-item:nth-child(2)');
for(var i=0;i<item.length;i++){
item[i].style.color='green';
}
