const addBtn = document.getElementById("btnadd")


addBtn.addEventListener('click', ()=> addNewNote())

function addNewNote(text =''){
  const note = document.createElement('div')
  note.classList.add('note')
  
  

  note.innerHTML= `
  </div>


<div class = "notebody">

  <div class = "note">
    <div class = "tools">
      <button class = "edit"><i class = "fas fa-edit" ></i></button>
      <button class = "delete"><i class = "fas fa-trash-alt" ></i></button>
    </div>
    
    <div class = "main${text ? "" : "hidden"}"></div>
   <textarea class = "${text? "hidden" : ""}></textarea>
    </div>  
  `
const editBtn = note.querySelector('.edit')
const deleteBtn = note.querySelector('.delete')
const main = note.querySelector('.main')
const textArea = note.querySelector('.textarea')


  document.body.appendChild(note)
}







function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }



  

