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
      console.log('err', err);
    })
}

yelpInit('prime-table-stockton-2');
