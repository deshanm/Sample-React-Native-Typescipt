import axios from 'axios';
import {getError} from '../../util';
import {API_URL} from '../../constance';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_DONE = 'GET_USERS_DONE';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export const getUsers = () => async (dispatch: any) => {
  try {
    dispatch({type: GET_USERS});
    const response = await axios.get(`${API_URL}/users/`);
    dispatch({type: GET_USERS_DONE, payload: response.data});
  } catch (error) {
    dispatch({type: GET_USERS_FAILED, payload: getError(error)});
  }
};
