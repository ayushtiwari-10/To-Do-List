document.addEventListener('DOMContentLoaded', (event) => {
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var timeValue = document.getElementById("myTime").value;
      var t = document.createTextNode(inputValue + " (" + timeValue + ")");
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";
      document.getElementById("myTime").value = "09:00";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        updateProgress();
      };
  
      updateProgress();
    }
  
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        updateProgress();
      }
    }, false);
  
    document.querySelector(".addBtn").addEventListener('click', newElement);
  
    function updateProgress() {
      var listItems = document.querySelectorAll('ul li');
      var totalTasks = listItems.length;
      var completedTasks = document.querySelectorAll('ul li.checked').length;
      var progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
      document.getElementById("myProgressBar").style.width = progress + "%";
      document.getElementById("myProgressBar").setAttribute('aria-valuenow', progress);
    }
  });
  