import values from "./values";

class Parser {
    constructor() {
        this.tagregex = /\[.*?\]/;
        this.spanregex = /\<.*?\>/;
    }
    parse(str) {
        var output = '';
        str = str.replace(/\/\[/g, "&#91").replace(/\/\]/g, "&#93");
        str = str
            .replace(/[\x00-\x08\x0b-\x0c\x0e-\x1a\x1c-\x1f\x7f]/g, '')
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ');
        
        const compiletag = (tag) => {
            var tags = values;
            let result = tag.replace(
            /(\w+)(?::([^ ]+))?/g,
            function (match, tagName, tagValue) {
                if (tags[tagName]) {
                if (tags[tagName].preset) {
                    return tags[tagName].style;
                } else {
                    return tags[tagName].style + ': ' + tagValue;
                }
                }
            }
            );
            return result;
        };
        var tokens = str
            .split(/(\[[^\[\]]+\])|([^\[\]]+)|\\(\[|\])/g)
            .filter(Boolean);
        for (var i = 0; i < tokens.length; i++) {
            if (this.tagregex.test(tokens[i])) {
            tokens[i] = tokens[i].replace(/\[/g, '').replace(/\]/g, '');
            if (tokens[i].startsWith('/')) {
                tokens[i] = `</span>`;
            } else {
                tokens[i] = `<span style="`+compiletag(tokens[i])+`" >`;
            }
            }
        }
        output = tokens.join("");
        return output;
    }
    parseToIndividualChar(str) {
        var output = '';
        var stack = [];
        str = str.replace(/\/\[/g, "&#91;").replace(/\/\]/g, "&#93;");
        str = str
            .replace(/[\x00-\x08\x0b-\x0c\x0e-\x1a\x1c-\x1f\x7f]/g, '')
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ');
        
        const compiletag = (tag) => {
            var tags = values;
            let result = tag.replace(
            /(\w+)(?::([^ ]+))?/g,
            function (match, tagName, tagValue) {
                if (tags[tagName]) {
                if (tags[tagName].preset) {
                    return tags[tagName].style;
                } else {
                    return tags[tagName].style + ': ' + tagValue;
                }
                }
            }
            );
            return result;
        };
        var chars = [];
        var tokens = str
            .split(/(\[[^\[\]]+\])|([^\[\]]+)|\\(\[|\])/g)
            .filter(Boolean);
        for (var i = 0; i < tokens.length; i++) {
            if (this.tagregex.test(tokens[i])) {
                var thistoken = tokens[i].replace(/\[/g, '').replace(/\]/g, '');
                if (thistoken.startsWith('/')) {
                    stack.splice(-1);
                } else {
                    stack.push(compiletag(thistoken));
                }
            } else {
                for(var ch = 0; ch < tokens[i].length; ch++) {
                    if(tokens[i].substring(ch,ch+5) == '&#91;' || tokens[i].substring(ch,ch+5) == '&#93;') {
                        chars.push(`<span style="`+stack.join(';')+`" >`+tokens[i].substring(ch,ch+5)+`</span>`);
                        ch+=5;
                    } else if (tokens[i].substring(ch,ch+2) == '\n') {
                        chars.push(`<span style="`+stack.join(';')+`" >`+tokens[i].substring(ch,ch+2)+`</span>`);
                        ch++;
                    }
                    chars.push(`<span style="`+stack.join(';')+`" >`+tokens[i].charAt(ch)+`</span>`);
                }

            }
        }
        output = chars;
        return output;
    }
    parseChar(char) {
        var character = this.parse(char);
    }
}

export default Parser;