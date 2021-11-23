

$('#contact-form').submit(
  function(){
    let name = $('#name').val()
    let email = $('#email').val()
    let message = $('#subject').val()
    let messageForm = $('#contact-form')[0]

    if ( !name || !email || !message ){
      alert ('Fill in all the fields')
      return false;
    }
      else{
     messageForm.method = 'post';
     messageForm.action =  'https://github.us20.list-manage.com/subscribe/post?u=41e01e4b83c7e09ab09b8008a&amp;id=3737e5fb47';
     alert ('Form submitted successfully')
     return true
     }
  } 
)
