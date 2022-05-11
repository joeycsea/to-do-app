// 1) query the DOM for the form element
const formElement = document.querySelector('form');
console.log(formElement);

// add a submit event listener on the form
formElement.addEventListener('submit', function(e){
   // stop the page from refreshing when the form is submitted
   e.preventDefault();
      //log out the event object which is generated when the form is submitted:
      console.log(e);

      // alert(`You've submitted the form!`);

      //query the DOM for the input element and check whether it's empty:
      const inputElement = document.getElementById('toDoItem');
  
   // only if the user has entered an actual task (AKA input is not empty) --> This is an IF STATEMENT:
   if (inputElement.value !== '') {

      // grab the user's TO DO item from the form input

      //create an li
      const liElement = document.createElement('li');
      
      // display TO DO on the page within an li element
          // include a checkbox icon within the li
      liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;

      // create an text element represents the text we have to add(our TO - DO)
      const taskContent = document.createTextNode(inputElement.value);
      console.log(taskContent);
      // and append that text element to the li
      liElement.appendChild(taskContent);
      
      // add the li element to the ul
      document.querySelector('ul').appendChild(liElement);

      // clear the input 
      inputElement.value = '';

   } else {
      alert (`Please do not leave input empty before submitting the form.`)
   }
   
});


// clicking on a task allows you to toggle between checked/unchecked (AKA done vs not done)

      // RULE #1 of event listeners - you can only add event listeners to elements which exist in the DOM at the time of the code execution!!

// const listElements = document.querySelector(`li`);

// listElements.addEventListener('click', function(){
//    //when a list item is clicked on:
//    console.log(`this has been completed`);
// });

//in order to attach a click event listener to the li's which do not exist on the page yet, we can use EVENT-PROPOGATION 
const ul = document.querySelector('ul');
ul.addEventListener('click', function(e){

   //the this keyword reps the object which owns the code which is currently running
   //so this will give us back the ul consistently which is not what we wnat
      // console.log(this);

      //log out the event object
   // console.log(e);
   
   //As long as we clicked on the icon then:
   if(e.target.localName === "i") {
      console.log('checkbox was clicked');
      
      // toggle between checked/unchecked (AKA done vs not done) on the target element
      e.target.classList.toggle('fa-square-check');
      e.target.classList.toggle('fa-square');
      
      // for adding the text-muted color when checked:
      e.target.parentNode.classList.toggle('text-muted');
   }
});

// BONUS LEVEL:
// add a "Reset" button which clears all of the TO DOs
   //add button below h1
   const clearButton = document.querySelector('button');

   clearButton.addEventListener('click', function (e) {
      const checkedItems = document.querySelectorAll('.text-muted');
      for (i = 0; i < checkedItems.length; i++) {
         checkedItems[i].remove();
      }
   });


// add an "Edit task" button
// add a "Remove task" button to each task
// add a congratulations alert when all of the existing TO DOs are checked off 
// add a "Take a break" message if 5 or more tasks are completed

