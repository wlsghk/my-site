window.onload = function () {
    // 원 페이지 스크롤
    docSlider.init();

    const html = document.querySelector('.html');
    const css = document.querySelector('.css');
    const js = document.querySelector('.js');
    const git = document.querySelector('.git');
    const react = document.querySelector('.react');
    const adobe = document.querySelector('.adobe');
    const figma = document.querySelector('.figma');
    const htmlGraph = document.querySelector('.html-graph');
    const cssGraph = document.querySelector('.css-graph');
    const jsGraph = document.querySelector('.js-graph');
    const reactGraph = document.querySelector('.react-graph');
    const gitGraph = document.querySelector('.git-graph');
    const adobeGraph = document.querySelector('.adobe-graph');
    const figmaGraph = document.querySelector('.figma-graph');
    const switchBtn = document.querySelector('.onoff-switch')

    switchBtn.addEventListener('click', e => {
        html.classList.toggle('on');
        css.classList.toggle('on');
        js.classList.toggle('on');
        react.classList.toggle('on');
        git.classList.toggle('on');
        adobe.classList.toggle('on');
        figma.classList.toggle('on');

        htmlGraph.classList.toggle('on');
        cssGraph.classList.toggle('on');
        jsGraph.classList.toggle('on');
        reactGraph.classList.toggle('on');
        gitGraph.classList.toggle('on');
        adobeGraph.classList.toggle('on');
        figmaGraph.classList.toggle('on')
    })
}