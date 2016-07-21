"use strict";
/**
 * [Instance Myeditor]
 * @param {[type]} selector [description]
 */
var s, editor, parentEditor, textArea;

function Myeditor(setting) {

    s = this.setting;
    s = setting;
    this.init();

}

Myeditor.prototype.default = {
    selector: 'default',
    editorWidth: '100%',
    editorHeight: '500px'
};

Myeditor.prototype.attrEditor = {
    'class': 'myeditor',
    'contenteditable': 'true',
}

// Set selector to change css
Myeditor.prototype.init = function() {
    if (typeof s != "object") {
        s = this.default;
    } else {
        for (var p in this.default) {
            if (!s.hasOwnProperty(p)) {
                s[p] = this.default[p];
            }
        }
    }

    this.createEditor();

};

/**
 * Create Edit content of editor.
 * @return void
 */
Myeditor.prototype.createEditor = function() {
    textArea = document.getElementById(s.selector);
    parentEditor = textArea.parentElement;
    editor = document.createElement("div");

    parentEditor.insertBefore(editor, textArea);
    editor.style.width = s.editorWidth;
    editor.style.height = s.editorHeight;
    this.setAttributes(this.attrEditor, editor);
    editor.addEventListener('keydown', function(){
      console.log(this.value);
    });

}

Myeditor.prototype.setAttributes = function(at, selector) {
    for (var key in at) {
        selector.setAttribute(key, at[key]);
    }
}
