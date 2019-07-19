import axios from "axios";

export async function fetchCollections() {
  let response = await axios({
    method: "get",
    url: "https://developers.zomato.com/api/v2.1/collections?city_id=306",
    headers: {
      "user-key": "b26f02984b714751b6c2f50247e4b9a8",
      "content-type": "application/json"
    }
  });
  return response.data.collections;
}

export async function fetchRestaurants() {
  let response = await axios({
    method: "get",
    url: "https://developers.zomato.com/api/v2.1/search?city_id=306",
    headers: { "user-key": "b26f02984b714751b6c2f50247e4b9a8" }
  });

  return response.data.restaurants;
}

export async function getCuisinesApi(query) {
  let cuisineResponse = await axios({
    method: "get",
    url: `https://developers.zomato.com/api/v2.1/search?entity_id=306&q=${query}`,
    headers: { "user-key": "b26f02984b714751b6c2f50247e4b9a8" }
  });

  return cuisineResponse.data.restaurants;
}
