$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var phrase = $("input#phrase").val();
    var result = pigLatin(phrase+" ");
    $("#result").text(result);
  });
});

var pigLatin = function(phrase){
  var vowel = /(qu|[^aeiou]{0,1}(?:qu|[^aeiouy]*))(\w*)(\W*)(\s)/ig
  return phrase.replace(vowel, "$2$1ay$3$4");
};
