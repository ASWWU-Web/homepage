$(document).ready(function(){
  $(".smooth").smoothScroll({
    offset:-60,
    speed:"auto",
    autoCoefficient:2
  });
  $.getJSON("https://aswwu.com/server/feed?name=issuu", function(data) {
    if(data.response.docs[0].docname)
      $("#collegianContainer").prepend("<div class='embed-responsive embed-responsive-16by9'><div data-url='https://issuu.com/aswwucollegian/docs/" + data.response.docs[0].docname + "' class='issuuembed embed-responsive-item'></div><script type='text/javascript' src='//e.issuu.com/embed.js' async='true'></script></div>");
    else
      $("#collegianContainer").prepend("<p class='text-danger'>Couldn't get the latest Collegian. :(</p>");
  }).fail(function() {
    $("#collegianContainer").prepend("<p class='text-danger'>Couldn't get the latest Collegian. :(</p>");
  });
});
