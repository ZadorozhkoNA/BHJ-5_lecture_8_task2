'use strict';

let openWindow = document.getElementById( 'subscribe-modal' );
let closeWindow = openWindow.querySelector( '.modal__close' );

function close( event ) {
  event.preventDefault();
  let window = event.currentTarget.closest( '#subscribe-modal' );
  if ( window.classList.contains( 'modal_active' ) ) {
    window.classList.remove( 'modal_active' );
    document.cookie = 'window=close';
  }
}

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
  }
}

if ( getCookie( 'window' ) !== 'close' ) {
  openWindow.classList.add( 'modal_active' );
}

closeWindow.addEventListener( 'click', close );
