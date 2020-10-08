<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
  <meta charset="UTF-8">
    <script type="text/javascipt">
    
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("button").onclick = function() {
      let msg = document.querySelector("#message").value;
      alert(msg);
    }
    })
                      
      </script>
      </head>
      <body>
      <h1>Task</h1>
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
