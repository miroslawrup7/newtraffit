const iframes = document.querySelector("iframe");

const resizeIFrameToFitContent = () =>{
    
    

    iframes.width = iframes.contentWindow.document.body.scrollWidth;
    iframes.height = iframes.contentWindow.document.body.scrollHeight;

   
    console.log(iframes.height);
}

const resize = () => {
    
    iframes.height = "100%";
}

console.log(iframes.height);


// setTimeout(resizeIFrameToFitContent, 3000);


const btn = document.querySelector("button");

btn.addEventListener("click", resize);
// btn.addEventListener("click", resize);


// http://localhost:3000/