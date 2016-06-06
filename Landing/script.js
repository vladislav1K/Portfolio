var t;
function up() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',50);
  } else clearTimeout(t);
  return false;
}