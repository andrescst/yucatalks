// src/controllers/appBar_controller.js
import { Controller } from "stimulus"
const axios = require('axios');

export default class extends Controller {
    static get targets() {
        return []
      }
    connect() {
      let image = this.element;
      this.url = 'https://api.giphy.com/v1/gifs/random?api_key=SBVvRPx3fnRlm2SKHoraxB1vsbaUn4Tt&tag=sorry&rating=G'
      
      axios.get(this.url)
      .then(function (response) {
        // handle success
        let src = response.data.data.fixed_height_downsampled_url;
        console.log(response.data
            );
         image.src = src;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }
}