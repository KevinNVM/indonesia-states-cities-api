var express = require("express");
var router = express.Router();
const {
  getCountry,
  getStatesById,
  getStates,
  getCities,
  getCityById,
} = require("./../controllers/v1Controller");

router.get("/", (req, res) => {
  res.send({
    message:
      "Welcome to API Provinsi dan Kota Indonesia, Visit my github: https://github.com/kevinnvm",
    docs: "https://github.com/kevinnvm/indonesia-states-cities-api",
    apiVersion: "1.0.0",
    apiLastUpdated: "16/03/2023 23:09",
    routes: {
      getCountry: {
        path: "/country",
        params: null,
      },
      getStates: {
        path: "/states",
        params: {
          search: {
            default: null,
            example: "/states?search={search-parameter}",
          },
          limit: {
            default: "15",
            example: "/states?limit=20",
            description: "-1 for no limit",
          },
        },
      },
      getCities: {
        path: "/cities",
        params: {
          search: {
            default: null,
            example: "/cities?search={search-parameter}",
          },
          limit: {
            default: "50",
            example: "/cities?limit=200",
            description: "-1 limit for no limit",
          },
        },
      },
    },
  });
});

router.get("/country", getCountry);
router.get("/states", getStates);
router.get("/states/:id", getStatesById);

router.get("/cities", getCities);
router.get("/cities/:id", getCityById);

module.exports = router;
