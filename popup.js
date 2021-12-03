const init = function() {
    const injectElement = document.createElement('div');
    let allParagraphs = document.getElementsByTagName("p");
    injectElement.className = 'injected';
    injectElement.innerHTML = 'I INJECT SHIT NOW';
    document.body.appendChild(injectElement);
    console.log(allParagraphs);
}
init();