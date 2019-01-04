function Chrono() {
    timeoutID = window.setTimeout(Popup, 10000);
  }
  
  function Popup() {
    validation = confirm("Veux tu allez sur xxxvidsxxx");
    if (validation == true)
    {
      window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }
  
  Chrono();