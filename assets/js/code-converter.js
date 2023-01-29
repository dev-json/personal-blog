var list = document.getElementById("code-lines");
var items = list.getElementsByTagName("li");

const keywords = [
    ["String", "#bd93f9"], ["Date", "#bd93f9"], ["int", "#bd93f9"], ["Location", "#bd93f9"],
    ["Country", "#50fa7b"],["City", "#50fa7b"], ["SectionType", "#50fa7b"],
    ["final", "#f1fa8c"], ["if", "#f1fa8c"],
    ["GERMANY", "#ff5555"],["HILDESHEIM", "#ff5555"],["ABOUT_ME", "#ff5555"],
    ["new", "#909090"]
];

for(let i = 0; i < items.length; i++) {
    convertTag(items[i].getElementsByTagName("p"))
}

function convertTag(tag) {
    let text = tag[0].innerHTML;
    for(let i = 0; i < keywords.length; i++) {
        if(text.match(keywords[i][0])) {
            text = text.replaceAll(keywords[i][0], getSpanTag(keywords[i][0], keywords[i][1]), keywords[i][1]);
        }

        if(text.match(/\"(.*?)\"/))
        {
            var s = "\"" + text.match(/\"(.*?)\"/)[1] + "\"";
            text = text.replaceAll(s, getSpanTag(s, "orange"));
        }

        tag[0].innerHTML = text;
    }
}

function getSpanTag(string, color) {
    return "<span style='color: "+color+"; text-transform: initial; font-family: var(--default-code-font);'>" + string + "</span>";
}

