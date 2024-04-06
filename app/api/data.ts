'use server';
import { MongoClient } from 'mongodb'
var axios = require('axios');

async function fetchData() {

  var data = JSON.stringify({
      "collection": "AllGames",
      "database": "ModernGames",
      "dataSource": "VGrid",
      "projection": {
        "_id": 1, "name": 1, "developers": 1, "platforms": 1, "genres": 1, "esrb_rating": 1, "background_image": 1, "tags": 1
      },
      "sort": {
        "name": 1
      },
      "limit": 10
  });

  var config = {
      method: 'post',
      url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-rfmtx/endpoint/data/v1/action/find',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'lqfxRwTsWTolNS2HcXQRhiMhX1AtIJyKlQlM08dznIIJ9a3px7tw9G1doAY6vFgK',
      },
      data: data
  };

  return axios(config)
      .then(function (response: any) {
          //console.log('Response data:', response.data);
          return response.data.documents;
      })
      .catch(function (error: any) {
          console.log(error);
      });
}

export default fetchData;
