import { delay, http, HttpResponse } from 'msw';

//dummy
import {
  dummyNowWaitingsResponse,
  dummyWaitingsResponse,
} from './dummy/waitings';
import { dummyBoothListResponse } from './dummy/boothList';

const COMMON_DELAY = 0;

const getDelayedResponse = (responseData: any) => {
  return async () => {
    await delay(COMMON_DELAY);
    return HttpResponse.json(responseData);
  };
};

const deleteDelayedResponse = () => {
  return async () => {
    await delay(COMMON_DELAY);
    return HttpResponse.json({
      status: true,
      message: 'User successfully deleted',
      code: 200,
    });
  };
};

export const handlers = [
  http.get('/api/v1/waitings', getDelayedResponse(dummyWaitingsResponse)),
  http.get(
    '/api/v1/waitings/now-waitings',
    getDelayedResponse(dummyNowWaitingsResponse)
  ),
  http.get('/api/v1/booths', getDelayedResponse(dummyBoothListResponse)),
  http.delete('/api/v1/deleteID', deleteDelayedResponse()),
];
