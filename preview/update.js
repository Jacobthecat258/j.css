//$ Function
function $(e) {
    return document.querySelector(e);
}

//Apply j.css
var head = $("head");
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https"