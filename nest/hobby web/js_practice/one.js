function animate_string(id) {
  var ele = document.getElementById(id);
  var textNode = ele.childNodes[0];
  var text = textNode.data;

  setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}
