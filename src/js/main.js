const iframe1 = document.querySelector("#iframe_1");

const resizeIFrameToFitContent_1 = () => { 
    iframe1.height = iframe1.contentWindow.document.body.scrollHeight;
}

const btn1 = document.querySelector("#btn_1");
btn1.addEventListener("click", resizeIFrameToFitContent_1);



const iframe2 = document.querySelector("#iframe_2");

const resizeIFrameToFitContent_2 = () => { 
    iframe2.height = iframe2.contentWindow.document.body.scrollHeight;
}

const btn2 = document.querySelector("#btn_2");
btn2.addEventListener("click", resizeIFrameToFitContent_2);

