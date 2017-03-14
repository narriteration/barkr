console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var $dogTarget = $('#dogTarget')
  $.ajax({
    method: 'GET',
    url: '/api/dogs',
    success: handleSuccess,
    error: handleError
  });





  function getDogHtml(dog) {
    // var authorString =book.author.map(renderAuthor);
    return `<hr>
            <p>
            <div class='row dog' data-dog-id = ${dog._id}>
            <img src="../images/bookPic.png" alt="book image">
              <b>${dog.dogName}</b>
              has bredd of ${dog.breed}. is good with dogs: ${dog.isSocialized}. dog is big: ${dog.isBig}, here is image of dog:  ${dog.imgDog}.
              <br/>
              </div>
              </p>`;
              <img src="../images/authorPic.png" alt="author image">
              The author is ${(dog.human) ? dog.human.ownderName : 'null'}
               . They are ${(book.author) ? (book.author.alive === true ? 'alive': 'dead') : 'null'}
              , and are ${(book.author) ? book.author.age : 'null'} years old.
              <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${book._id}>Delete</button>
              </div>
            </p>;
  }










})//end document ready
