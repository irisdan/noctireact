import axios from 'axios';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_ERROR = 'FETCH_EVENTS_ERROR';

export const FETCH_ONE_EVENT = 'FETCH_ONE_EVENT';
export const FETCH_ONE_EVENT_SUCCESS = 'FETCH_ONE_EVENT_SUCCESS';
export const FETCH_ONE_EVENT_ERROR = 'FETCH_ONE_EVENT_ERROR';

export const fetchEvents = () => {
	const request = axios.get("/api/events");
	return {
		type: FETCH_EVENTS,
		payload: request,
	};
}

export const fetchEventsSuccess = (events) => {
	return {
		type: FETCH_EVENTS_SUCCESS,
		payload: events,
	};
}

export const fetchEventsFailure = (error) => {
	return {
		type: FETCH_EVENTS_ERROR,
		payload: error,
	};
}

export const fetchOneEvent = (id) => {
	const request = axios.get(`/api/events/${id}`);
	return {
		type: FETCH_ONE_EVENT,
		payload: request,
	};
}

export const fetchOneEventSuccess = (event) => {
	return {
		type: FETCH_ONE_EVENT_SUCCESS,
		payload: event,
	};
}

export const fetchOneEventFailure = (error) => {
	return {
		type: FETCH_ONE_EVENT_ERROR,
		payload: error,
	};
}

