document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const theForm = document.getElementById("create-task-form");
  const todoUl = document.getElementById('tasks');
  const destroy=(event)=>{
      event.target.remove()
  }

  const addTask=()=>{
  event.preventDefault();
  let taskText = document.getElementById("new-task-description");
  let newli = setUpLis();
  
  newli.innerText = taskText.value;
  taskText.placeholder ;
  newli.addEventListener('click', destroy)
  
  todoUl.append(newli);
  
  
  };

  let setUpLis =()=>{
    return li = document.createElement('li')
  }


// the event listener👇🏾

theForm.addEventListener("submit",addTask);
 







  
});



