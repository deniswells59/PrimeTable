function yelpInit(id) {
  var yelpBox = $('.yelp-wrapper');

  $.ajax('//primetable.herokuapp.com/api/reviews/' + id)
    .done(function(data) {
      $(yelpBox).parent().attr('href', data.url);
      $(yelpBox).find('.yelp-img-wrapper img').attr('src', data.image_url);
      $(yelpBox).find('.yelp-title').text(data.name);
      $(yelpBox).find('.rating').attr('data-rating', data.rating);
      $(yelpBox).find('.yelp-bottom-row p').text(data.review_count + " Reviews");

      $(yelpBox).removeClass('loading');
    })
    .fail(function(err) {
      var err = $('<p>').addClass('center').text('An error occurred while connecting.')
      var prompt = $('<p>').addClass('center').text('Click Here to go to Yelp.')
      var link = $('<a>').attr({
        'href': 'https://www.yelp.com/biz/prime-table-stockton-2',
        'target': '_blank'
      })
      .append(prompt);

      $(yelpBox).parent().attr({
        'href': 'https://www.yelp.com/biz/prime-table-stockton-2',
        'target': '_blank'
      });
      $('.yelp-loader').remove();
      $(yelpBox).append([err, link]);
    })
}

yelpInit('prime-table-stockton-2');
