import {
  FETCH_GAMES,
  FETCH_STANDINGS,
  FETCH_CALENDAR,
  SET_DATE,
  ERROR_404
} from "./types";
import axios from "axios";

//server url to interface the backend with the front end. Use Andy's url and allow CORS for testing
const baseurl = "http://localhost:8000/api/nba"; // This is used for Local systems
// const baseurl = '/api/nba'; // This will be used for production

//function to dispatch the reducer, used in the fetchGamesFromApi to handle async call
function gamesAction(res) {
  return {
    type: FETCH_GAMES,
    payload: res
  };
}

// function to dispatch the render error for the 404 calls that go past the scheduled games of the playoffs
function renderError(err) {
  return {
    type: ERROR_404,
    payload: err
  };
}

export function fetchGamesFromApi(day) {
  const games = `${baseurl}/games/${day}`;
  return dispatch => {
    return axios
      .get(games)
      .then(res => {
        //when response is received, dispatches gamesAction function with the received response as a param
        dispatch(gamesAction(res));
      })
      .catch(err => {
        console.log("error", err);
        dispatch(renderError(err));
      });
  };
}

//function to dispatch the standings reducer
function standingsAction(res) {
  return {
    type: FETCH_STANDINGS,
    payload: res
  };
}

export function fetchStandingsFromApi() {
  const standings = `${baseurl}/standings`;
  return dispatch => {
    return axios
      .get(standings)
      .then(res => {
        dispatch(standingsAction(res));
      })
      .catch(err => {
        console.log("error", err);
      });
  };
}

function convertDate(date) {
  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [
    date.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd
  ].join("");
}

export function setViewedDate(date) {
  const dateLongForm = date.toDateString();
  const dateNumeric = convertDate(date); //converts given date to YYYYMMDD
  return {
    type: SET_DATE,
    numeric: dateNumeric,
    longDate: dateLongForm,
    unformattedDate: date
  };
}

//function to dispatch the calendar reducer
function calendarAction(res) {
  return {
    type: FETCH_CALENDAR,
    payload: res
  };
}

export function fetchCalendarFromApi() {
  const calendar = `${baseurl}/calendar`;
  return dispatch => {
    return axios
      .get(calendar)
      .then(res => {
        dispatch(calendarAction(res));
      })
      .catch(err => {
        console.log("error", err);
      });
  };
}
