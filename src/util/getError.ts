import {AxiosError} from 'axios';

export function getError(response: AxiosError | Error) {
  console.log('response', response);
  return 'something went wrong';
}
