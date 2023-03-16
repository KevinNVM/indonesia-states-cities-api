const fs = require("fs");
const path = require("path");

const getStatesFromJSON = () => {
  let states;

  try {
    states = fs.readFileSync(
      path.join(__dirname, "../data/json/states.json"),
      "utf8"
    );
    states = JSON.parse(states);
  } catch (err) {
    res.status(500).send({
      message: "Sorry, Could not get data",
      error: "Internal Server Error",
    });
  }

  return states;
};

const getCitiesFromJSON = () => {
  let cities;

  try {
    cities = fs.readFileSync(
      path.join(__dirname, "../data/json/cities.json"),
      "utf8"
    );
    cities = JSON.parse(cities);
  } catch (err) {
    res.status(500).send({
      message: "Sorry, Could not get data",
      error: "Internal Server Error",
    });
  }

  return cities;
};

const getStates = (req, res) => {
  let states;
  const searchParam = req.query.search;
  const queryLimit = req.query.limit || 15;

  try {
    states = fs.readFileSync(
      path.join(__dirname, "../data/json/states.json"),
      "utf8"
    );
    states = JSON.parse(states);
  } catch (err) {
    res.status(500).send({
      message: "Sorry, Could not get data",
      error: "Internal Server Error",
    });
  }

  if (searchParam) {
    states = states.filter((value) =>
      value.name?.toLowerCase().includes(searchParam)
    );
  }

  if (queryLimit) {
    states = states.slice(0, parseInt(queryLimit));
  }

  states = states.length >= 1 ? states : null;

  res.send({
    route: "/states",
    message: states == null ? "States not found" : undefined,
    count: states?.length,
    data: states,
  });
};

const getCountry = (req, res) => {
  let country;

  try {
    country = fs.readFileSync(
      path.join(__dirname, "../data/json/country.json"),
      "utf8"
    );
    country = JSON.parse(country);
  } catch (err) {
    res.status(500).send({
      message: "Sorry, Could not get data",
      error: "Internal Server Error",
    });
  }

  res.send({
    route: "/country",
    data: country,
  });
};

const getStatesById = (req, res) => {
  const states = getStatesFromJSON();
  const paramId = req.params.id;

  const filteredStates =
    states.filter((state) => state.id == paramId)[0] || null;

  res.send({
    route: "/states/:id",
    data: filteredStates,
    message: filteredStates == null ? "State not found" : undefined,
  });
};

const getCities = (req, res) => {
  let cities;
  const searchParam = req.query.search;
  const queryLimit = req.query.limit || 50;

  try {
    cities = fs.readFileSync(
      path.join(__dirname, "../data/json/cities.json"),
      "utf8"
    );
    cities = JSON.parse(cities);
  } catch (err) {
    res.status(500).send({
      message: "Sorry, Could not get data",
      error: "Internal Server Error",
    });
  }

  if (searchParam && searchParam !== -1) {
    cities = cities.filter((value) =>
      value.name?.toLowerCase().includes(searchParam)
    );
  }

  if (queryLimit) {
    cities = cities.slice(0, parseInt(queryLimit));
  }

  cities = cities.length >= 1 ? cities : null;

  res.send({
    route: "/cities",
    message: cities == null ? "Cities not found" : undefined,
    count: cities?.length,
    data: cities,
  });
};

const getCityById = (req, res) => {
  const cities = getCitiesFromJSON();
  const paramId = req.params.id;

  const city = cities.filter((city) => city.id == paramId)[0] || null;

  res.send({
    route: "/cities/:id",
    data: city,
    message: city == null ? "City not found" : undefined,
  });
};

module.exports = {
  getCountry,
  getStatesById,
  getStates,
  getCities,
  getCityById,
};
