const init = () => {

    window.onload = function () {
        window.scrollTo(0, 0);

        console.log("proj final entregado")
      }

    $("form").on("submit", (e) => {
        e.preventDefault();
        
        alert("ENVIADO!");
    })

    jQuery(function() {
        setTimeout(__scroll, 800)
    })

    const setService = (service) => {
        let select = $("select[name=service]");

        select.val(service)
    
        select.toggleClass("focus-visible")
    }
    
    const __scroll = () => {
        $("body").css("overflow-y", "scroll");
        console.log("scroll!")
    }
    
    $("#hamburger").on("click", function(e) {
        if($("#navbarTogglerIcon").hasClass("fa-bars")){
            $("#navbarTogglerIcon").removeClass("fa-bars")
            $("#navbarTogglerIcon").addClass("fa-times")
            return;
        }
        $("#navbarTogglerIcon").addClass("fa-bars")
        $("#navbarTogglerIcon").removeClass("fa-times")
    })

    let main = $("main").attr("class");

    console.log(main)
    if(main.includes("contact")) {
        let serviceSelected = window.location.href.split('?q=');
        if(serviceSelected.length > 1)
        {
            setService(serviceSelected[1]);
        }
    }

}

init()