// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButton = document.querySelector('.like-glyph')
const errorThrow = document.getElementById('modal')

likeButton.addEventListener('click', () => {
  mimicServerCall()
  .then(() => {
    likeButton.innerText = FULL_HEART
    likeButton.classList.add('activated-heart')
  })

  .catch(() => {
    errorThrow.classList.remove('hidden');
    errorThrow.querySelector('p').innerText = 'Server Error'
    setTimeout(() => {
      errorThrow.classList.add('hidden');
    }, 3000);
  })

  if (likeButton.innerText === '❤') {
    likeButton.innerText = '♡';
    likeButton.classList.remove('activated-heart');
  } else {
    likeButton.innerText = '❤';
    likeButton.classList.add('activated-heart');
  }

}, )
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

