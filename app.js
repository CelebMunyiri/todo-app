const section=document.querySelector('.section')
const add=document.querySelector('.add');
const list=document.createElement('div');
const input=document.querySelector('.input')
const remove=document.querySelector('.remove')
//list.innerHTML=input.value
add.addEventListener('click',()=>{
    list.innerHTML=`${input.value} <button class='remove'>Remove</button>`
    section.append(list);
    list.classList.add('list')
});
remove.addEventListener('click',()=>{
    list.remove;
})

console.log(input.value)