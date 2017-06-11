import express from 'express';
import request from 'request';

const router = express.Router();

router.get('/reviews', (req, res) => {
  request.post('https://api.yelp.com/oauth2/token', {
      form: {
        client_id: 'gUE3qbXwpTzDJeKA0Cy4qA',
        client_secret: process.env.CLIENT_SECRET
      }
    }, (err, resp, body) => {
      if(err) return res.status(400).send(err);

      let token = JSON.parse(body).access_token;
      request({
        url: 'https://api.yelp.com/v3/businesses/prime-table-stockton-2/reviews',
        headers: {
          'Authorization': `BEARER ${token}`
        }
      }, (err, resp, body) => {
        if(err) return res.status(400).send(err);
        let data = JSON.parse(body).reviews;
        let review;
        data.forEach(rev => {
          if(rev.rating === 5) return review = rev;
        });

        res.send(review);
      });
    });
});

module.exports = router;
