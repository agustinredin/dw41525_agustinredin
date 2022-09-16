const init = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }


    $("form").on("submit", (e) => {
        e.preventDefault();
        
        alert("ENVIADO!");
    })

    jQuery(function() {
        setTimeout(__scroll, 1000)
    
        //usar query string params
        // let queryString = window.location.search;
        // if(queryString != '')
        // {
        //     let service = queryString.substring(3);
        //     setService(service)

        //     //Parseo para botón de vuelta
        //     if(window.innerWidth > 768)
        //     {
        //         let backBtn = $("#backBtn");
        //         backBtn.css("display", "flex");

        //         let prev = queryString.substring(queryString.indexOf('prev='), queryString.length).slice(5)
        //         let current = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);

        //         let redirect = prev.startsWith('index.html') ? '../index.html' : prev;

        //         $('a.hover').each(function(){
        //             this.href += `?prev=${current}`
        //         })

        //         console.log(prev)
        //         console.log(current)
        //         console.log(redirect)
                
        //         backBtn.css("display", "flex")
        //         backBtn.attr("onclick", `window.location.href=${redirect}`)
        //     }
        // }
    })
    
    const setService = (service) => {
        let select = $("select[name=service]");
    
        select.val(service)
    
        // $("html, body").animate({ scrollTop: select.position().top.toString() });
        select.toggleClass("focus-visible")
    }
    
    const __scroll = () => {
        $("body").css("overflow-y", "scroll");
        console.log("scroll!")

        SmoothScroll(document, 120, 12)
    }

    $("#hamburger").on("click", displayMenu)
}

const SmoothScroll = (target, speed, smooth) => {
    if (target === document)
        target = (document.scrollingElement
            || document.documentElement
            || document.body.parentNode
            || document.body) // cross browser support for document scrolling
    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
        && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}

let openMenu = false;

const displayMenu = () => {
    console.log("f() displayMenu")
    
    let elemArray = $("nav a");
    let prop = !openMenu ? "block" : "none";

    for (let i = 0; i < elemArray.length; i++) {
        elemArray[i].style.display = prop;
    }

    $(".header__container").toggleClass("header__container-open");
    $(".header__logo").toggleClass("header__logo-hidden");

    openMenu = prop == "block";
}

init()