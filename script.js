 
 const body = document.querySelector('body')
 
 const form = document.querySelector('form')

 const input = document.querySelector('input')
  const ul = document.querySelector('ul')

  form.addEventListener('submit', Savetask)
//   const fullName = fullNameInput.value
//   const email = emailInput.value
//   const number = numberInput.value

  function Savetask (e){
    e.preventDefault()

    // console.log('this is function')


    list = document.createElement('li')
    console.log(input.value)
    list.innerText=input.value
 


    list.className = "list-group-item w-50 mt-2 "
    ul.appendChild(list)
   
    form.reset()

    const delet= document.createElement('button')
    delet.className='btn btn-danger text-light float-end'
   
 delet.innerText="Delete"
  list.appendChild(delet)
  }