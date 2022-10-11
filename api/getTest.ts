import axios from "axios";

let config = {
  method: "get",
  url: "http://localhost:8000",
  headers: {},
};

export let result: object;

axios(config)
  .then(function (response) {
    result = response.data;
  })
  .catch(function (error) {
    result = error;
  });
