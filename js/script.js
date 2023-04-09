window.onload = function () {
    // 원 페이지 스크롤
    docSlider.init();

    // 메인 페이지 텍스트 애니메이션
    var spanText = function spanText(text) {
        var string = text.innerText;
        var spaned = '';
        for (var i = 0; i < string.length; i++) {
            if (string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
            else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
        }
        text.innerHTML = spaned;
    }

    var headline = document.querySelector(".main h1");

    spanText(headline);

    let animations = document.querySelectorAll('.main-title');

    animations.forEach(animation => {
        let letters = animation.querySelectorAll('.main-title span');
        letters.forEach((letter, i) => {
            letter.style.animationDelay = (i * 0.1) + 's';
        })
    })

    // 스킬 그래프
    const myPic = document.querySelector('.my-pic img')
    const myExplain = document.querySelector('.my-explain')
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
        myPic.classList.toggle('on');
        myExplain.classList.toggle('on');

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

    const body = document.querySelectorAll('section')
    const nav = document.querySelector(".navbar")

    // 파이널 페이지 마우스 오버시 배경 재생
    const finalText = document.querySelector('.final-text')
    const codingImg = document.querySelector('.final-img')

    finalText.addEventListener('mouseover', e => {
        codingImg.src = "./img/coding.gif"
    })
    finalText.addEventListener('mouseout', e => {
        codingImg.src = "./img/coding.png"
    })
}