var bookNameInput = document.getElementById("bookNameInput");
var bookUrlInput = document.getElementById("bookUrlInput");
var tableBody = document.getElementById("tableBody");
var closeBtn = document.getElementById("closeBtn");
var box = document.getElementById("window");

var booksContainer = [];

if (localStorage.getItem("myBooks") != null) {
  booksContainer = JSON.parse(localStorage.getItem("myBooks"));
  displayBooks(booksContainer);
} else {
  booksContainer = [];
}

// Add
function addBooks() {
  if (validationUrl() & validationName()) {
    var books = {
      bookName: bookNameInput.value,
      bookUrl: bookUrlInput.value,
    };

    booksContainer.push(books);
    localStorage.setItem("myBooks", JSON.stringify(booksContainer));
    clear();
    displayBooks();
    function clear() {
      bookNameInput.value = "";
      bookUrlInput.value = "";
    }
  } else {
    openModal();
  }
}
function displayBooks() {
  var cartoons = ``;
  // var displayIndex=0;
  for (var i = 0; i < booksContainer.length; i++) {
    // displayIndex=i+1
    cartoons += `    <tr>

      <td>${i + 1}</td> 
      <td>${booksContainer[i].bookName}</td> 
      <td> <button onclick="visitBook(${i})" class=" btn btn-success "><i class="fa-solid fa-eye pq"></i>Visit</button></td>
      <td>
      <button onclick="deleteBooks(${i})"  class="btn  btn-danger"><i class="fa-solid fa-trash kj"></i>Delete</button>
</td>
</tr>
`;
  }
  // tableBody.innerHTML.cartoons;
  document.getElementById("tableBody").innerHTML = cartoons;
}

function deleteBooks(deleteIndex) {
  booksContainer.splice(deleteIndex, 1);
  localStorage.setItem("myBooks", JSON.stringify(booksContainer));

  displayBooks();
}

function visitBook(index) {
  var url = booksContainer[index].bookUrl;

  window.open(url, "_blank");
}

function validationUrl() {
  var nameRegex = /https:/;

  return nameRegex.test(bookUrlInput.value);
}
function validationName() {
  var nameRegex = /^[a-z]{3,9}$/;

  return nameRegex.test(bookNameInput.value);
}

function openModal() {
  box.classList.remove("d-none");
  console.log("halo");
}
function closeModal() {
  box.classList.add("d-none");
}
