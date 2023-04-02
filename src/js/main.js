window.addEventListener('message', function(event) {
    console.log("Message received from the child: " + event.data); // Message received from child

    iframe2.height = event.data;
});


