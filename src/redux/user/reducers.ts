import {
  GET_USERS,
  GET_USERS_DONE,
  GET_USERS_FAILED,
  UPDATE_RANDOM,
} from './actions';

export interface UserI {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: null | {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UsersInitial {
  isLoading: boolean;
  users: UserI[];
  usersError: null | string;
  randomNumber: number;
}

export const initialState: UsersInitial = {
  isLoading: false,
  users: [],
  usersError: null,
  randomNumber: 0,
};

const userReducer = (state = initialState, action: any): UsersInitial => {
  switch (action.type) {
    case UPDATE_RANDOM:
      return {...state, randomNumber: action.payload};
    case GET_USERS:
      return {...state, usersError: null, isLoading: true};
    case GET_USERS_FAILED:
      return {
        ...state,
        usersError: action.payload,
        isLoading: false,
      };
    case GET_USERS_DONE:
      return {...state, users: action.payload, isLoading: false};

    default:
      return state;
  }
};

export default userReducer;
