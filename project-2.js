<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
  <meta charset="UTF-8">
    <script type="text/javascipt">
    
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("new-task").onsubmit = function() {
      const li=document.createElement('li');
      li.innerHTML=document.query Selector('#task').value;
      
      document.querySelector("#tasks_list").append(li);
    document.querySelector("#task").value = ' ';
      
    }
    });
                      
      </script>
      </head>
      <body>
      <h1>Task List</h1>
<ul id="tasks_list">
  </ul>
<form id="new-task">
  <input id="task" autocomplete="off" autofocusc placeholder="New Task" type="text">
    <input id="submit" type="submit">
      
      
  
      <form id="form">
        <input id="message" type="text"/>
          <input type="submit">
            </form>
      </body>
  </html>
