console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#submitKoala' ).on( 'click', function(){
    console.log( 'in submitKoala on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
       koalaName: $('#koalaName').val(),
       koalaGender: $('#koalaGender').val(),
       koalaAge: $('#koalaAge').val(),
       readyToTransfer: $('#readyToTransfer').val(),
       koalaNote: $('#koalaNote').val(),
    };
    // call saveKoala with the new obejct
    addKoala( koalaToSend );
  }); 
}
//Post new Koala to the Server
function addKoala(koalaToSend) {
  $.ajax({
    method: 'POST', 
    url: '/koalas', 
    data: koalaToSend
  })
  .then(function (response) {
    console.log('Claws!!');
    getKoalas();
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
            `<tr>
              <td>${koalaToSend.name}</td> 
              <td>${koalaToSend.gender}</td> 
              <td>${koalaToSend.age} </td>
              <td>${koalaToSend.readyToTransfer}</td> 
              <td>${koalaToSend.notes}</td>
              <td></td>
              <td></td>
            </tr>`
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
