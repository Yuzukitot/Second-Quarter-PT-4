//store the reference  ...box ... droppable
const draggableElement = document.querySelectorAll('.box');
const droppableElement = document.querySelectorAll('.droppable');
let score = 0;
//DRAG START
draggableElement.forEach(element => {

  element.addEventListener('dragstart', (drgStart) => {
    drgStart.dataTransfer.setData('text', drgStart.target.id);
    //apply the css draggableFormat       ---CSS CLASS---
    drgStart.currentTarget.classList.add('draggableFormat');
    //console.log('dragstart event is activated!');
    // console.log(drgStart); //to check if data transfer is working

  }); //end of dragstart    
});


//DROP EVENT
droppableElement.forEach(element => {
  element.addEventListener('drop', drpEvt => {
    drpEvt.preventDefault();
    const droppedElementId = drpEvt.dataTransfer.getData('text'); //BOX1
    const dropZoneId = drpEvt.target.getAttribute('data-draggable-id');
    const draggableElement = document.getElementById(droppedElementId);

    drpEvt.target.appendChild(document.getElementById(droppedElementId));
    //drpEvt.target.appendChild(draggableElement.cloneNode(true));
    //console.log(dropZoneId);
    if (droppedElementId === dropZoneId) {
      //console.log('Right');
      score += 1;
      document.getElementById('remarks').innerText = "RIGHT!";
      document.getElementById('scores').innerText = score;
    } else {
      //console.log('Wrong');
      document.getElementById('remarks').innerText = "WRONG!";
    } //end of if else

  }); //end of add eventListener

  //DRAG OVER
  element.addEventListener('dragover', (drgOverEvt) => {
    drgOverEvt.preventDefault();
  }); //end of drag over
});

//DRAG END
draggableElement.forEach(element => {
  element.addEventListener('dragend', drgendEvt => {
    //drgendEvt.currentTarget.classList.remove('draggableFormat');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const box1 = document.getElementById('box1');
  box1.style.backgroundImage = 'url(amazon.png)';
  const box2 = document.getElementById('box2');
  box2.style.backgroundImage = 'url(Cocacola.png)';
  const box3 = document.getElementById('box3');
  box3.style.backgroundImage = 'url(iphone.png)';
  const box4 = document.getElementById('box4');
  box4.style.backgroundImage = 'url(nike.png)';
   const box5 = document.getElementById('box5');
  box5.style.backgroundImage = 'url(Shell-Logo.png)';
    const box6 = document.getElementById('box6');
    box6.style.backgroundImage = 'url(Snapchat.png)';
    const box7 = document.getElementById('box7');
      box7.style.backgroundImage = 'url(XorTwitter.png)';
     const box8 = document.getElementById('box8');
        box8.style.backgroundImage = 'url(Steam.png)';
     const box9 = document.getElementById('box9');
        box9.style.backgroundImage = 'url(Chrome.png)';
    const box10 = document.getElementById('box10');
       box10.style.backgroundImage = 'url(Pepsi.png)';
});
function reset(event){
  location.reload()
}