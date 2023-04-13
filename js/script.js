window.onload = function () {
    console.log(`
📂 Hello
  └📁 Stranger
     └📁 WelcomeTo
        └⚠️ MySite.html

`);
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

    // 포트폴리오 스와이퍼
    var secondSwiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".projects-box",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });

    // 포트폴리오 버튼 클릭 시 페이지 이동
    const daeguDemo = document.querySelector('.daegu-demo-btn');
    const daeguGithub = document.querySelector('.daegu-github-btn');
    const hyftDemo = document.querySelector('.hyft-demo-btn');
    const hyftGithub = document.querySelector('.hyft-github-btn');
    const dosirakDemo = document.querySelector('.dosirak-demo-btn');
    const dosirakGithub = document.querySelector('.dosirak-github-btn');
    const baevolutionDemo = document.querySelector('.baevolution-demo-btn');
    const baevolutionGithub = document.querySelector('.baevolution-github-btn');

    daeguDemo.addEventListener('click', e => {
        window.open('https://wlsghk.github.io/firstProject/html/first.html');
    })

    daeguGithub.addEventListener('click', e => {
        window.open('https://github.com/wlsghk/firstProject');
    })

    hyftDemo.addEventListener('click', e => {
        window.open('https://sanghyuk95.github.io/HYFT/sanghyuk/index.html');
    })

    hyftGithub.addEventListener('click', e => {
        window.open('https://github.com/wlsghk/lastProject');
    })

    dosirakDemo.addEventListener('click', e => {
        window.open('https://wlsghk.github.io/dosiraktong/index.html');
    })

    dosirakGithub.addEventListener('click', e => {
        window.open('https://github.com/wlsghk/dosiraktong');
    })

    baevolutionDemo.addEventListener('click', e => {
        window.open('https://wlsghk.github.io/my-site/index.html');
    })

    baevolutionGithub.addEventListener('click', e => {
        window.open('https://github.com/wlsghk/my-site');
    })

    // 파이널 페이지 마우스 오버시 배경 재생
    const finalText = document.querySelector('.final-text')
    const codingImg = document.querySelector('.final-img')
    const finalGoal = document.querySelector('.final-goal')

    finalText.addEventListener('mouseover', e => {
        codingImg.src = "./img/coding.gif"
        finalGoal.style.display = "block";
    })
    finalText.addEventListener('mouseout', e => {
        codingImg.src = "./img/coding.png"
        finalGoal.style.display = "none"
    })



    let c = document.querySelector(".c");

    window.addEventListener("mousemove", (e) => {

        requestAnimationFrame(() => {
            c.style.top = e.pageY + "px";
            c.style.left = e.pageX + "px";

            let d = document.createElement("div");
            d.classList.add('co');
            d.style.top = e.pageY + "px";
            d.style.left = e.pageX + "px";
            d.style.setProperty(`--hue`, Math.floor(Math.random() * 360));

            setTimeout(() => {
                d.style.opacity = 0;
                d.style.transform = 'scale(12)';
                setTimeout(() => c.removeChild(d), 1100);
            }, 500)

            c.appendChild(d);
        })
    });

    // 미디어쿼리
    window.addEventListener('resize', e => {
        if (innerWidth <= 991) {
            myPic.src = "./img/myprofile-mobile.png"
        } else {
            myPic.src = "./img/myprofile.png"
        }
    })
}