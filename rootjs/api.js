function startup(d) {
    document.title = d.title;
}
function newTextComponent(t,d,c,par,bg) {
    var parent = document.getElementById(par);
    var elem = document.createElement('span');
    elem.classList.add('textcomponent');
    if((bg != null)||(bg != '')||(bg != undefined)) {
        elem.style.backgroundColor = 'var(--'+bg+')';
    }
    if((c != null)||(c != '')||(c != undefined)) {
        elem.style.color = 'var(--'+c+')';
    }
    if ((d != null)||(d != '')||(d != undefined)) {
        var decor = d.split(" ");
        var textdecor = [];
        for (let decorelem = 0; decorelem < decor.length; decorelem++) {
            switch(decor[decorelem]) {
                case 'bold':
                    elem.style.fontWeight = 'bolder';
                    break;
                case 'italic':
                    elem.style.fontStyle = 'oblique';
                    break;
                case 'underline':
                    textdecor.push('underline');
                    break;
                case 'strikethrough':
                    textdecor.push('line-through');
                    break;
                case 'overline':
                    textdecor.push('overline');
                    break;
            }
        }
        elem.style.textDecoration = textdecor.join(" ");
    }
    if ((t == null)||(t == '')||(t == undefined)) console.error("Please provide a text parameter for the text component.");
    elem.innerText = t;
    if ((par == null)||(par == '')||(par == undefined)) console.error("Please provide a parent to append the text component to.");
    parent.appendChild(elem);
}
function newText(id,d,par,bg) {
    var parent = document.getElementById(par);
    var elem = document.createElement('p');
    elem.classList.add('text');
    elem.id = id;
    if((bg != null)||(bg != '')||(bg != undefined)) {
        elem.style.backgroundColor = 'var(--'+bg+')';
    }
    if ((par == null)||(par == '')||(par == undefined)) console.error("Please provide a parent to append the text element to.");
    parent.appendChild(elem);
    for (let string = 0; string < d.length; string++) {
        newTextComponent(d[string].text,d[string].decorations,d[string].color,elem.id,d[string].backgroundcolor);
    }
    return elem;
}
function newSection(id,d,par,bg) {
    var parent = document.getElementById(par);
    var elem = document.createElement('div');
    elem.classList.add('section');
    elem.id = id;
    if((bg != null)||(bg != '')||(bg != undefined)) {
        elem.style.backgroundColor = 'var(--'+bg+')';
    }
    if ((par == null)||(par == '')||(par == undefined)) console.error("Please provide a parent to append the section element to.");
    parent.appendChild(elem);
    for (let text = 0; text < d.length; text++) {
        var textelem = d[text];
        var texteleminst = newText(textelem.id,[],elem.id,textelem.backgroundcolor);
        for (let string = 0; string < textelem.text.length; string++) {
            var textcompelem = textelem.text[string];
            newTextComponent(textcompelem.text,textcompelem.decorations,textcompelem.color,texteleminst.id,textcompelem.backgroundcolor);
        }
    }
    return elem;
}
function newLine(id,d) {
    var parent = document.getElementById('terminalscreen');
    var elem = document.createElement('div');
    elem.classList.add('line');
    elem.id = id;
    parent.appendChild(elem);
    for (let section = 0; section < d.length; section++) {
        var secelem = d[section];
        var seceleminst = newSection(secelem.id,[],elem.id,secelem.backgroundcolor);
        for (let text = 0; text < d[section].section.length; text++) {
            var textelem = d[section].section[text];
            var texteleminst = newText(textelem.id,[],seceleminst.id,textelem.backgroundcolor);
            for (let string = 0; string < textelem.text.length; string++) {
                var textcompelem = textelem.text[string];
                newTextComponent(textcompelem.text,textcompelem.decorations,textcompelem.color,texteleminst.id,textcompelem.backgroundcolor);
            }
        }
    }
    return elem;
}
function newElement(id,d,type,par) {

}
function newScreen() {

}