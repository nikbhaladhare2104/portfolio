var aboutlinks = document.getElementsByClassName("about-links");
var aboutcontents = document.getElementsByClassName("about-contents");

function openlink(linkname){
    for(link of aboutlinks){
        link.classList.remove("active-link");
    
    }
    for(content of aboutcontents){
        content.classList.remove("active-content");
    
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(linkname).classList.add("active-content");
}   

