const resizeIFrameToFitContent = () =>{
    
    const iframes = document.querySelector("iframe");

    iframes.width = iframes.contentWindow.document.body.scrollWidth;
    iframes.height = iframes.contentWindow.document.body.scrollHeight;

    console.log(iframes.width);
    console.log(iframes.height);
}

const resize = () => {
    
    iframes.height = "100%";
}




// setTimeout(resizeIFrameToFitContent, 3000);


const btn = document.querySelector("button");

btn.addEventListener("click", resize);
// btn.addEventListener("click", resize);


// http://localhost:3000/