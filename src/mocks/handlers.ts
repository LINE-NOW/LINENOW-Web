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
  http.post('/api/v1/logout', async () => {
    // 로그아웃 시 로컬 스토리지에서 토큰을 삭제한다고 가정
    // const accessToken = localStorage.getItem('accessToken');
    const accessToken = '12345';

    // 토큰이 존재할 경우 로그아웃 성공 처리
    if (accessToken) {
      return new HttpResponse(
        JSON.stringify({ message: 'Logout successful' }),
        {
          status: 200,
        }
      );
    } else {
      return new HttpResponse(null, {
        status: 400,
        statusText: 'Logout failed',
      });
    }
  }),
];
