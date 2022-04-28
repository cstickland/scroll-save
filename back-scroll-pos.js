$(function () {
    let pathName = document.location.pathname;
    window.onbeforeunload = function () {
        let scrollPosition = document.scrollTop();
        sessionStorage.setItem("scrollPosition_" + pathName, scrollPosition.toString());
    }
    setTimeout(() => {
        for(let key in sessionStorage){
            if(key.includes("scrollPosition")) {
                sessionStorage.removeItem(key)
            }
        }  
      }, 60000);
    if (sessionStorage["scrollPosition_" + pathName]) {
        document.scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
    }  
});

