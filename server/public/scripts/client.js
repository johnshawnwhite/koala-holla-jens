console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
       koalaName: $('#koalaName').val(),
       koalaAge: $('#koalaAge').val(),
       koalaGender: $('#koalaGender').val(),
       readyToTransfer: $('#readyToTransfer').val(),
       koalaNote: $('#koalaNote').val(),
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}
//Post new Koala to the Server
function addKoala() {
  
  $.ajax({
    method: 'POST', 
    url: '/koalas', 
    data: {
      koalaToSend = {
        koalaName: $('#koalaName').val(),
        koalaAge: $('#koalaAge').val(),
        koalaGender: $('#koalaGender').val(),
        readyToTransfer: $('#readyToTransfer').val(),
        koalaNote: $('#koalaNote').val(),
      }
    }
  })
  .then(function (response) {
    console.log('Claws!!');
  })
  .catch(function (error) {
    alert('request failed');
  })
}


// send koalas list to the dom
function getKoalas() {
  console.log( 'in getKoalas' );
  $.ajax({
    method: 'GET',
    url: '/koalas',
  })
    .then(result => {
      console.log('GET /koalas', result);

        
      $('#viewKoalas').empty();
        for (let koalaToSend of result) {
          $('#viewKoalas').append(
            <tr>
        <td>${koalaToSend.koalaName}</td> 
        <td>${koalaToSend.koalaAge} </td>
        <td>${koalaToSend.koalaGender}</td> 
        <td>${koalaToSend.readyToTransfer}</td> 
        <td>${koalaToSend.koalaNote}</td>
        <td></td>
        <td></td>
          </tr>
          );
      }


    })
    .catch(err => {
      console.log(' GET /koalas', err);


      
      
    })
}


function saveKoala() {
  $.ajax({
    method: 'GET',
    url: '/koalas'
  })
  .then(function (response) { 
    console.log('Claws!!', response);
  })
  .catch(function (error) { 
    console.log('Error!', error)
  });
}
