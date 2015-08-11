(function () {
  var simple = false;

  $('#simpleon').on('click', function (e) {
    var span = $(e.currentTarget);

    e.preventDefault();

    $('div.details').slideToggle();

    if (simple) {
      span.text("Simplified view: Off");
    } else {
      span.text("Simplified view: On");
    }

    // not so simple
    simple = !simple;
  });
})();
