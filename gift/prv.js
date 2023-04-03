window.addEventListener("keydown",function (e) {
    if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) { 
        e.preventDefault();
    }

})
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        
        return false;
    } else {
        return true;
    }
};
document.addEventListener('keydown', function(event) {
    if (event.metaKey && (event.key === 'f' || event.key === 'u')) {
      event.preventDefault();
    }
  });
  