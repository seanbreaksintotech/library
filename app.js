
//add book button


class Note{
constructor(title, author, pages, read){
this.title = title
this.author = author
this.pages = pages
this.read = read

}
}







const addBtn = document.getElementById("btnadd")


// document.querySelector('#formContainer').addEventListener('submit', (e)
// => {
//   const title = document.querySelector("#title").value;
//   const author = document.querySelector("#author").value;
//   const pages = document.querySelector("#number").value;
//   const read= document.querySelector("#read").value;


//   const note = new Note (title, author, pages, read)

//   console.log(book)
// });







//submit button that submits note from form
addBtn.addEventListener('click', ()=> addNewNote())



function addNewNote(text =''){

  const note = document.createElement('div')
  note.classList.add('note')
  
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#number").value;
  const read= document.querySelector("#read").value;


  // const note = new Note (title, author, pages, read)






  note.innerHTML= `
  </div>


<div class = "notebody">

  <div class = "note">
    <div class = "tools">
      
      <button class = "delete"><i class = "fas fa-trash-alt" ></i></button>
      
    </div>
    
    <div class = "main">
    
    <ul> 
      <li> TITLE: ${title} </li>
      <li> AUTHOR: ${author} </li>
      <li> No.OF PAGES: ${pages} </li>
      <li> READ: ${read} </li>
    </ul>

    </div>
   
  
  
    
  `
const editBtn = note.querySelector('.edit')
const deleteBtn = note.querySelector('.delete')
const main = note.querySelector('.main')
const textArea = note.querySelector('.textarea')


deleteBtn.addEventListener('click', () => {
  note.remove()
})



     
    document.body.appendChild(note)
  

  
}






// pop up form
function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }



  

