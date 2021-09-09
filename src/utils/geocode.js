const request = require("postman-request");
const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYWRlbGNoZWxhYmkiLCJhIjoiY2tzZzk5M3VwMDZhbzMxbWJ4dnFydzU0MSJ9.6kyc9fC8oCTAcICGJfMD6w";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to locations services!", undefined);
    } else if (body.features.length === 0) {
      callback("Enable to find location.Try another search", undefined);
    } else {
      const { features } = body;
      const longitude = features[0].center[0];
      const latitude = features[0].center[1];
      const location = features[0].place_name;
      callback(undefined, {
        latitude,
        longitude,
        location,
      });
    }
  });
};
module.exports = geocode;
