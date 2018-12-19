//Add new item
function newItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myinput").value;
  var t = document.createTextNode(inputValue);
  li.append(t);
  if (inputValue == '') {
    alert("Please write something!");
  }else{
    document.getElementById('myul').appendChild(li);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
    li.appendChild(span);
  }
  document.getElementById("myinput").value = "";
}

window.onload = function() {
  // Create a "close" button and append it to each list item
  var myNodelist = document.getElementsByTagName('li');
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  var close = document.getElementsByClassName("close");
  var i;
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}
