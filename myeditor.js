"use strict";
/**
 * [Instance Myeditor]
 * @param {[type]} selector [description]
 */
var s,editor;
function Myeditor(setting) {

  s = this.setting;
  s = setting;
  this.init();

}

Myeditor.prototype.default = {
  selector : 'default',
  editorWidth : '100%',
  editorHeight : '500px'
};

// Set selector to change css
Myeditor.prototype.init = function() {
    if(typeof s != "object"){
      s = this.default;
    } else {
      for (var p in this.default){
        if(!s.hasOwnProperty(p)){
          s[p] = this.default[p];
        }
      }
    }
    editor = document.getElementById(s.selector);
    editor.setAttribute('class', 'myeditor');
    editor.style.width = s.editorWidth;
    editor.style.height = s.editorHeight;
};
