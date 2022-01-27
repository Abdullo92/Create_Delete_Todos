const input = document.querySelector('#input');
const btnAddVal = document.querySelector('#btn');
const ul = document.querySelector('#ul');
const total = document.querySelector('#total');
let i = 0;
//adding the event
btnAddVal.addEventListener('click', (e) => {
    //if value empty do not add anything after clicking the button -->> add
    if (input.value === '') return;

    createDeleteElems(input.value);

    //clearing the input place after clicking button -->>add
    input.value = '';
});
  //func creating and deleting elems
  function createDeleteElems(value) {
      //increase the total --> i++ <--
      i++;
      //create the tag --> li 
      const li = document.createElement('li')
      //add class name --> li
      li.className = 'li'
      li.textContent = value;
      //add li tag inside the tag --> ul
      ul.appendChild(li);
       //create the tag --> btnRemove 
       const btnRemove = document.createElement('button')
       //add class name --> btnRemove
       btnRemove.className = 'btnRemove'
       btnRemove.textContent = 'delete'
       li.appendChild(btnRemove)
      //deleting li after clicking the button --> delete
      btnRemove.addEventListener('click', e => {
          //decrease in total --> i-- <--
           i--;
           total.textContent = i;
           ul.removeChild(li)
       });

       //toggle class active
       li.addEventListener('click', e => {
          li.classList.toggle('li_active')
      });
     
      total.textContent = i;
  }