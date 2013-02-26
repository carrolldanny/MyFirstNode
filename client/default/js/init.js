/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {
  // The local config variable from config.js can be accessed directly
  document.getElementById('localConfig').innerHTML = "<p>Hello World</p>";

  document.getElementById('run_button').onclick = function() {
    
    var rand = Math.floor((Math.random()*10)+1);
    document.getElementById('localConfig').innerHTML = "<p>"+ rand +"</p>";
    // Invoke a cloud action call to get the remote configuration
    // See: http://docs.feedhenry.com/wiki/Actions
    $fh.act(
      {
        act:'myFunction',
        req: {
          num: rand
        }
      },
      function(res) {
        document.getElementById('cloudConfig').innerHTML = "<p>" + JSON.stringify(res) + "</p>";
        //alert(res);
      },
      function(err,msg) {
        document.getElementById('cloudConfig').innerHTML = "<p>ERROR: " + JSON.stringify(msg.error) + "</p>";
        //alert('An error occured: ' + code + ' : ' + errorprops);
      }
    );
  };
  
  document.getElementById('error_button').onclick = function() {
    alert('clicked');
    $fh.act(
      {
        act:'errorFunction',
        req: {
          num: rand
        }
      },
      function(res) {
        //document.getElementById('cloudConfig').innerHTML = "<p>" + JSON.stringify(res) + "</p>";
        document.getElementById('cloudConfig').innerHTML = "<p>error</p>";
        //alert(res);
      },
      function(err,msg) {
        //document.getElementById('cloudConfig').innerHTML = "<p>ERROR: " + JSON.stringify(msg.error) + "</p>";
        document.getElementById('cloudConfig').innerHTML = "<p>no error</p>";
        //alert('An error occured: ' + code + ' : ' + errorprops);
      }
    );
  };
});