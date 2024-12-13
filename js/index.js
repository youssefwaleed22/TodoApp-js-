// var taskInputBtn  = document.getElementById("taskInput");
// var todoAddButton = document.getElementById("todo-button");
// var todosContainer = document.getElementById("todos-container");
// var mySelect  = document.getElementById("mySelect");
// var searchInput=document.getElementById("searchInput");
//  var allTodos = []
//  if(localStorage.getItem('allTodos') !=null){
//     allTodos = JSON.parse(localStorage.getItem("allTodos"));
//     displayData(allTodos)
//  }
// todoAddButton.addEventListener('click',function(){
//     var task = {
//         taskDetails:taskInputBtn.value,
//         isCompleted:false,
//         id:`${Math.random()*10000}-${Math.random()*10000}`
//     }
//     allTodos.push(task);
//     localStorage.setItem('allTodos',JSON.stringify(allTodos))
//     displayData(allTodos);
//     clear()
// })


// function displayData(arr){
//     var cartoona = ""
// for (var task of arr) {
//     cartoona+=`
//     <div class="col-11 todo ${task.isCompleted == true ? "completed":""}">
//     <div class="row bg-dark">
//       <div class="col-8  py-3 fs-5">${task.taskDetails}</div>
//       <div class="col-2  py-3 bg-success d-flex justify-content-center" onclick="beCompleted('${task.id}')"><i class="fa-solid fa-check fs-3  d-flex align-items-center"></i></div>
//       <div class="col-2  py-3 bg-danger d-flex justify-content-center" onclick="deltedTodo('${task.id}')"><i class="fa-solid fa-trash fs-3  d-flex align-items-center"></i></div>
//     </div>
//   </div>
//     `
// }
// todosContainer.innerHTML = cartoona
// }
// function beCompleted(id){
//  var foundedIndex = allTodos.findIndex(function(task){return task.id == id });
//  allTodos[foundedIndex].isCompleted = allTodos[foundedIndex].isCompleted == true ? false : true
//  localStorage.setItem('allTodos',JSON.stringify(allTodos));
//  DisplayAccordingToSelectValue();

// }

// mySelect.addEventListener('change',function(){
//     DisplayAccordingToSelectValue()
// })


// function DisplayAccordingToSelectValue (){
//     switch(mySelect.options[mySelect.options.selectedIndex].value){
//         case 'all':
//             displayData(allTodos);
//             break;
//         case 'completed':
//            var compltedFilterd =  allTodos.filter(function(hamada){ return hamada.isCompleted == true});
//            displayData(compltedFilterd);
//            break;
//         case 'uncompleted' : 
//         var unCompletedFilter =allTodos.filter(function(hambozo){ return hambozo.isCompleted==false});
//         displayData(unCompletedFilter)
//     }
// }



// function deltedTodo(id){
//     console.log(id);
//     var index = allTodos.findIndex(function(task){return task.id == id});
//     allTodos.splice(index,1)
//     displayData(allTodos);
//     localStorage.setItem("allTodos",JSON.stringify(allTodos));    
// }


// searchInput.addEventListener('input',function(e){
//     console.log(e.target.value);
//     var searchResult=[] 
//     for(var i = 0 ; i<allTodos.length ;i++){
        
//         if(allTodos[i].taskDetails.toLowerCase().includes(e.target.value.toLowerCase())){
//             searchResult.push(allTodos[i])
//         }
//     }
//     displayData(searchResult)
// })

// function clear(){
//     taskInputBtn.value= ""
// }


let taskInput = document.getElementById("taskInput");
let adToDoBtn = document.getElementById("todo-button");
let mySelect = document.getElementById("mySelect");
let searchInput = document.getElementById("searchInput");
let allToDoList = [];


if(localStorage.getItem("taskToDo") != null ){
    allToDoList = JSON.parse(localStorage.getItem("taskToDo"));
     displayAllToDos(allToDoList)

}


adToDoBtn.addEventListener("click",function(){
    // console.log(taskInput.value)
    let task = {
      taskDetails : taskInput.value,
      isCompleted: false , 
      id : `${Math.random() * 10000} - ${Math.random() * 10000}`
    }
allToDoList.push(task);
localStorage.setItem("taskToDo" , JSON.stringify(allToDoList) )

 displayAllToDos(allToDoList);

// console.log(allToDoList);

})


function displayAllToDos(arr){

    let cartoona = "";
    

 for (let task of arr) {
    cartoona+= `
    <div class="col-11 todo  ${task.isCompleted == true ? "completed" : " " } ">
              
    <div class="row bg-dark">
                
    <div class="col-8  py-3 fs-5">${task.taskDetails}</div>
                
    <div onclick="beCompleted('${task.id}')" class="col-2  py-3 bg-success d-flex justify-content-center"><i class="fa-solid fa-check fs-3  d-flex align-items-center"></i></div>
                
    <div onclick="deleteTask('${task.id}')" class="col-2  py-3 bg-danger d-flex justify-content-center"><i class="fa-solid fa-trash fs-3  d-flex align-items-center"></i></div>
              
    </div>
            
    </div>
    `

 }

 document.getElementById("todos-container").innerHTML = cartoona ; 
}

function beCompleted(id){
  console.log(id);
  let index = allToDoList.findIndex(function(task){
    return task.id == id
  })

  console.log(index); 
  allToDoList[index].isCompleted = allToDoList[index].isCompleted == true ? false : true;   // ely atdas 3aleh 5aly isCompleted bat3to b truee w lw b true 5aleh false 
  DisplayAccordingToSelectValue()        // talama 3amlt ta8ir 3al array lazm a3rd tany 34an ta8ir yban fy html 
  
    
}
mySelect.addEventListener("change",function(){

  //  select option value bat3 el option selected 
  console.log(mySelect.options[mySelect.selectedIndex].value);

  // 3 condtions                   index 
  DisplayAccordingToSelectValue()

})

function DisplayAccordingToSelectValue (){
  switch (mySelect.options[mySelect.selectedIndex].value) {
    case "all":
      displayAllToDos(allToDoList)
      localStorage.setItem("taskToDo" , JSON.stringify(allToDoList) )
      break;

    case "completed":
      let completedTask = allToDoList.filter(function(task){  
         return task.isCompleted == true
     })
     displayAllToDos(completedTask)
     localStorage.setItem("taskToDo" , JSON.stringify(allToDoList) )
      break;
    case "uncompleted":
      let unCompletedTask = allToDoList.filter(function(task){  
         return task.isCompleted == false
     })
     displayAllToDos(unCompletedTask)
     localStorage.setItem("taskToDo" , JSON.stringify(allToDoList) )
      break;
  
    default:
      break;
  }

}


searchInput.addEventListener("input",function(e){

  
  let term = e.target.value ;  //value bat3t input 
  let searchResult = [];  
       // arr 
  for (let i = 0; i < allToDoList.length; i++) {
   if(allToDoList[i].taskDetails.toLowerCase().includes(term.toLowerCase())){
    searchResult.push(allToDoList[i])

   }
   
   displayAllToDos(searchResult)
    
  }
})


function deleteTask(id){
 let indexOnDelete = allToDoList.findIndex(function(task){
  return task.id == id 
 })
 allToDoList.splice(indexOnDelete , 1);
 localStorage.setItem("taskToDo" , JSON.stringify(allToDoList) )
 displayAllToDos(allToDoList);
}










// filter data => (array methods => higher ordered function )
// var filteredData = users.filter(function(task){
//     return task.isMarried == true

// })
// console.log(filteredData);
// var index = users.findIndex(function(task){
// return task.name == "ibrahim"
    
// })
// console.log(index);

// findIndex ( array methods ) 



