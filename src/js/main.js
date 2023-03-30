const iframe1 = document.querySelector("#iframe_1");

console.log(iframe1);
console.log(iframe1.height);

const resizeIFrameToFitContent_1 = () => { 

    iframe1.width = iframe1.contentWindow.document.body.scrollWidth;
    iframe1.height = iframe1.contentWindow.document.body.scrollHeight;

    console.log(iframe1);
    console.log(iframe1.height);
}


const btn1 = document.querySelector("#btn_1");



btn1.addEventListener("click", resizeIFrameToFitContent_1);

const iframe2 = document.querySelector("#iframe_1");

console.log(iframe2);
console.log(iframe2.height);

const resizeIFrameToFitContent_2 = () => { 

    iframe2.width = iframe2.contentWindow.document.body.scrollWidth;
    iframe2.height = iframe2.contentWindow.document.body.scrollHeight;

    console.log(iframe2);
    console.log(iframe2.height);
}


const btn2 = document.querySelector("#btn_2");

btn1.addEventListener("click", resizeIFrameToFitContent_2);

