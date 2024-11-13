 
 const body = document.querySelector('body')
 
 const form = document.querySelector('form')

 const name = document.querySelector('#name')

 const email = document.querySelector('#email')

 const phone = document.querySelector('#phone')
  const ul = document.querySelector('ul')

  form.addEventListener('submit', Savetask)
//   const fullName = fullNameInput.value
//   const email = emailInput.value
//   const number = numberInput.value

  function Savetask (e){
    e.preventDefault()

    // console.log('this is function')


    list = document.createElement('li')
    console.log(name.value)
    list.innerText=name.value
    para = document.createElement('li')
 para.innerText=email.value
number=document.createElement('li')
number.innerText=phone.value

    list.className = "list-group-item w-50 mt-2 "
     para.className = "list-group-item w-50 mt-2 "
      number.className = "list-group-item w-50 mt-2 "
    ul.appendChild(list)
    ul.appendChild(para)
    ul.appendChild(number)
   
    form.reset()

    const delet= document.createElement('button')
    delet.className='btn btn-danger text-light float-end'
   
 delet.innerText="Delete"
  list.appendChild(delet)
  const deletes= document.createElement('button')
    deletes.className='btn btn-danger text-light float-end'
    deletes.innerText="Delete"
   
  para.appendChild(deletes)
  const cut = document.createElement('button')
  cut.className='btn btn-danger text-light float-end'
  number.appendChild(cut)
  cut.innerText=" Delete"
  }
  
function DeleteTask(e){

  if(e.target.className.includes("btn")){
      li = e.target.parentElement 
      console.log(li)
      li.remove()
  }



}



ul.addEventListener('click' , DeleteTask)