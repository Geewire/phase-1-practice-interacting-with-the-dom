//making the counter increase with each second

let i = 0
function increment() {
     i++; // increment
    document.getElementById('counter').innerHTML = i ; // add it with a breakline
} let interval = setInterval(increment, 1000)


/*adding an event listener to (-) to decrease counter*/
let decrease = document.getElementById('minus')
decrease.addEventListener('click', decrement)
 function decrement(){
      i--;      document.getElementById('counter').innerHTML = i;
}


/*adding an event listener to + to increase counter*/
let increase = document.getElementById('plus')
increase.addEventListener('click', incrementThruClick)
 function incrementThruClick(){
      i++;      document.getElementById('counter').innerHTML = i;
}


/*adding an event listener to like to to display how many times it was licked*/
let like = document.getElementById('heart') 
document.getElementById('counter').innerHTML = i
like.addEventListener('click', comment)
function comment(){
      let list = document.createElement('ol')
      list.textContent = `I have been liked ${i} times` 
     document.querySelector('.likes').appendChild(list)
}

/*adding an event listener to pause  counter,diable all buttons and switch label to resume*/
let pause = document.getElementById('pause') 
document.getElementById('counter').innerHTML = i
pause.addEventListener('click', counterStop)
function counterStop(){
      clearInterval(interval); //pause counter
      //disable all buttons
     like.removeEventListener('click', comment); 
     increase.removeEventListener('click', incrementThruClick)
     decrease.removeEventListener('click', decrement)
     //switch the label on the button from "pause" to "resume and resume counter and enable button"
    pause.textContent = "resume" //change text
    pause.addEventListener('click', resume) // add event listener
function resume(){
      setInterval(increment, 1000); //resume counter
      //resume buttons
      like.addEventListener('click', comment);
      pause.addEventListener('click', counterStop);
      increase.addEventListener('click', incrementThruClick);
      decrease.addEventListener('click', decrement);
      
    }
}


/*Leave comments on my gameplay, such as: "Wow, what a fun game this is.*/

let submit = document.getElementById('comment-form')
submit.addEventListener("submit", function (a) {
      a.preventDefault();
 commentText= submit.children[0]
 commentValue= commentText.value
 let p = document.createElement('p')
 let div = document.getElementById('list')
 div.appendChild(p)
 p.innerText= commentValue
})
