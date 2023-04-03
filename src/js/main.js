const iframe = document.querySelector("#iframe");

window.addEventListener('message', function(event) {
    iframe.height = event.data;
});


