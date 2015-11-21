(function fizzbuzzfeed() {
  var $titles = $('.grid-posts .lede__title a')
    .add('#post-title').add('.sidebar_featured_unit h3 a')
    .add('.sidebar-post h2 a');

  $titles.each(function() {
    var $this = $(this), text = $this.text().trim();

    if (text.match(/\d+/g) != null) {
      var number = text.match(/\d+/g)[0], fizzbuzz = "";

      if (number % 3 == 0 && number % 5 == 0) {
        fizzbuzz = "FizzBuzz";
      } else if (number % 3 == 0) {
        fizzbuzz = "Fizz";
      } else if (number % 5 == 0) {
        fizzbuzz = "Buzz";
      }

      if (fizzbuzz != "") {
        var replace = text.replace(/\d+/, fizzbuzz);
        $this.text(replace);
      }
    } else {
      return;
    }
  })
})();