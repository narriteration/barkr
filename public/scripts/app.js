console.log( "Sanity Check: JS is working!" );
 var allDogs = [];

// DOC READY
$(document).ready(function(){

    var $dogTarget = $('#dogTarget')
    $.ajax({
      method: 'GET',
      url: '/api/dogs',
      success: handleGetSuccess,
      error: handleGetError
    });

    $('#signup-form').on('submit', function signup(e){
        e.preventDefault();
        var signupData = $('#signup-form').serialize();
        console.log(signupData);
        $.post('/owners', signupData, function(res){
          console.log(res);
        });
    });


    $('#newDogForm').on( 'submit' , function (e) {
      e.preventDefault();
      $.ajax ({
        method: "POST",
        url: '/api/dogs',
        data: $( this ).serializeArray(),
        success: NewDogSuccess,
        error: NewDogError
      })
  });

  function NewDogSuccess(data){
    allDogs.push(data);
    console.log("success booking  " + data.human);
    $('#newDogForm input').val('');
    render();
    $('[data-dog-id='+data._id+']')[0].scrollIntoView();

  };
  function NewDogError(err){
    console.log("errrorrr" +err);
  };


  function getDogHtml(dog) {
    return `<hr>
            <p>

            <div class='col-md-6 row dog border text-center' data-dog-id = ${dog._id}>
            <img src="../images/bookPic.png" alt="book image">
            <br/>
              <b>${dog.dogName}</b>
              is a ${(dog.isBig === true ? 'large' : 'small')} ${dog.breed}.
              <br/>
              ${dog.dogName} is ${(dog.isSocialized === true ? 'great' : 'not very good')} with other dogs.
              <br/>
              </p>
              </div>
              <div class='col-md-6 row dog border text-center' data-dog-id = ${dog._id}>
              <img src="../images/authorPic.png" alt="author image">
              <br/>
                <b>${(dog.human) ? dog.human.ownerName : 'null'}</b>
                is a ${(dog.human) ? dog.human.age : 'null'} year old ${(dog.human) ? dog.human.gender : 'null'}.
                <br/>
                Email is ${(dog.human) ? dog.human.email : 'null'}.
                </p>
                <button id="delete" class="btn btn-danger delete-dog" type="delete">
                <span class="label">Delete</span>
                <span class="glyphicon glyphicon-trash"></span>
                </button>
                <button id="update" class="btn btn-info update-dog" type="update">
                <span class="label">Update Dog</span>
                <span class="glyphicon glyphicon-pencil"></span>
                </button>
                </div>

              `;
  };

  //////////////////// FUNCTIONS BELOW //////////////////////

  function getAllDogsHtml(dogs){
    return dogs.map(getDogHtml);
    console.log("going through all books");
  }
  function render(){
    $dogTarget.empty();
    var allHtml = getAllDogsHtml(allDogs);
    $dogTarget.append(allHtml);
  };

  function handleGetSuccess(data){
    allDogs = data;
    render();
  };


  function handleGetError(err){
    console.log("bummer error" +err);
    $dogTarget.text("failed to load, server working?")
  };


  $('#dogTarget').on('click', '.delete-dog', handleDeleteClick);


  function handleDeleteClick(e){
    var id = $(this).closest('.dog').data('dog-id')
    console.log("clicked delete for"+id);
    $('#deleteModal').data('dog-id',id);
    $('#deleteModal').modal();
    console.log("modal pop up");
    };

    $('#deleteDog').on('click', function deleteButton(e){
      var id = $('#deleteModal').data('dog-id');
      console.log('id is ' + id);
      $.ajax({
        method:"DELETE",
        url: '/api/dogs/' + id,
        success: handleDeleteSuccess,
        error: handleDeleteError,
      });
    function handleDeleteSuccess(e){
      $('#deleteModal').modal('hide');
      $(this).closest('.dog').empty();
      $.get('/api/dogs/'+id, function(data){
        //remove current instance of album
        $('[data-dog-id=' + id + ']').fadeOut();
           //re-render album
        getDogHtml(e);
          });
          console.log("dog deleted");
    }
    function handleDeleteError(e){
      console.log(e + 'error');
    }
    });

  })//end document ready
