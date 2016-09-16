$(document).ready(function(){
  $(".smooth").smoothScroll({
    offset:-60,
    speed:"auto",
    autoCoefficient:2
  });
  var url = "https://search.issuu.com/api/2_0/document?username=aswwucollegian&pageSize=10&responseParams=title,description&sortBy=epoch";
  $.getJSON(url, function(data) {
    console.log(data);
  });
  // var settings = {
  //   "url": url,
  //   "jsonpCallback": function(data) {console.log("jsonpCallback()",data);},
  //   "success": function(data) {console.log("success()",data);},
  //   "crossDomain": true,
  //   "headers": "Access-Control-Allow-Origin: *"
  // };
  // $.get(settings);
});
