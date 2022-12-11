function startup(d) {
    document.title = d.title;
}
function newTextComponent(t,d,c,par) {
    var parent = document.getElementById(par);
    var elem = document.createElement('span');
    elem.classList.add('textcomponent');
    elem.style.color = 'var(--'+c+')';
    switch(d) {
        case 'bold':
            console.log("bold");
            break;
        case 'italic':
            console.log("italic");
            break;
        case 'underline':
            console.log("underline");
            break;
        case 'strikethrough':
            console.log("strikethrough");
            break;
        case 'overline':
            console.log('overline');
            break;
        default:
            console.log('none');
    }
    elem.innerText = t;
    parent.appendChild(elem);
}
function newText(id,d,par) {
    var parent = document.getElementById(par);
    var elem = document.createElement('p');
    elem.classList.add('text');
    elem.id = id;
    parent.appendChild(elem);
    for (let string = 0; string < d.length; string++) {
        newTextComponent(d[string].text,d[string].decoration,d[string].color,elem.id);
    }
    return elem;
}
function newSection(id,d,par) {
    var parent = document.getElementById(par);
    var elem = document.createElement('div');
    elem.classList.add('section');
    elem.id = id;
    parent.appendChild(elem);
    for (let text = 0; text < d.length; text++) {
        var textelem = d[text];
        var texteleminst = newText(textelem.id,[],elem.id);
        for (let string = 0; string < textelem.text.length; string++) {
            var textcompelem = textelem.text[string];
            newTextComponent(textcompelem.text,textcompelem.decorations,textcompelem.color,texteleminst.id);
        }
    }
    return elem;
}
function newLine(id,d) {
    var parent = document.getElementById('terminalscreen');
    var elem = document.createElement('div');
    elem.classList.add('line');
    elem.id = id;
    parent.append(elem);
    for (let section = 0; section < d.length; section++) {
        var secelem = d[section];
        var seceleminst = newSection(secelem.id,[],elem.id);
        for (let text = 0; text < d[section].section.length; text++) {
            var textelem = d[section].section[text];
            var texteleminst = newText(textelem.id,[],seceleminst.id);
            for (let string = 0; string < textelem.text.length; string++) {
                var textcompelem = textelem.text[string];
                newTextComponent(textcompelem.text,textcompelem.decorations,textcompelem.color,texteleminst.id);
            }
        }
    }
    return elem;
}