const key = "mnvyL6kQ9SZAxH26D82QkTnorxAvvaJo";
//get weather
const getWeather = async id => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const responce = await fetch(base + query);
  const data = await responce.json();
  return data[0];
};
//get city info
const getCity = async city => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const responce = await fetch(base + query);
  const data = await responce.json();

  return data[0];
};
