const iframe = document.querySelector("#iframe");

window.addEventListener('message', function(event) {
    console.log("Message received from the child: " + event.data);

    iframe.height = event.data;
});


