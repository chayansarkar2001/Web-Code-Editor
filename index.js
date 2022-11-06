const webview = document.getElementById('webview');
const html = document.getElementById('html')
const css = document.getElementById('css')
const javascript = document.getElementById('javascript')
const htmlCode = document.getElementById('htmlCode')
const cssCode = document.getElementById('cssCode')
const javascriptCode = document.getElementById('javascriptCode')
const run = document.getElementById('runButton')

let code = "<h1>chayan</h1>"
const disabled = ()=>{
    html.classList.remove('active')
    css.classList.remove('active')
    javascript.classList.remove('active')
    htmlCode.classList.add('disableCode')
    cssCode.classList.add('disableCode')
    javascriptCode.classList.add('disableCode')
}
html.addEventListener('click',(e)=>{
    disabled();
    html.classList.add('active');
    htmlCode.classList.remove('disableCode')

})
css.addEventListener('click',(e)=>{
    disabled();
    css.classList.add('active');
    cssCode.classList.remove('disableCode')
})
javascript.addEventListener('click',(e)=>{
    disabled();
    javascript.classList.add('active');
    javascriptCode.classList.remove('disableCode')
})

run.addEventListener('click',(e)=>{
    localStorage.setItem("html",htmlCode.value);
    localStorage.setItem("css",cssCode.value);
    localStorage.setItem("javascript",javascriptCode.value);

    code=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>${cssCode.value}</style>
    </head>
    <body>
        ${htmlCode.value}
        <script>${javascriptCode.value}</script>
    </body>
    </html>`
    
    webview.srcdoc=code;
})

window.addEventListener('load',(e)=>{
    htmlCode.value = localStorage.getItem("html") || "";
    cssCode.value = localStorage.getItem("css") || "";
    javascriptCode.value = localStorage.getItem("javascript") || "";
})


window.addEventListener('beforeunload', (e)=>{
    e.preventDefault()
    localStorage.clear()
    e.returnValue="";
});

// to insert tab in textarea
document.querySelectorAll('textarea').forEach((textarea)=>{
    textarea.addEventListener('keydown', function(e) {
        if (e.key == 'Tab') {
            e.preventDefault();
            console.log('tabpress')
            var start = this.selectionStart;
            var end = this.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
        
            // put caret at right position again
            this.selectionStart = this.selectionEnd = start + 1;
        }
    });
})
