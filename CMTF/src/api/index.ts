import axios from 'axios';

const instance = axios.create({
  // 프록시 설정을 타기 위해 /api 접두사 기본 적용
  baseURL: '/api/v1', 
  timeout: 5000, // 5초 이상 응답 없으면 차단
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터: 필요한 경우 토큰 등을 주입
instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 에러 핸들링 일괄 처리
instance.interceptors.response.use(
  (response) => {return response.data;}, // 데이터를 한 단계 벗겨서 전달
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    // 여기서 공통 에러 알림(Toast 등)을 띄울 수 있음
    return Promise.reject(error);
  }
);

export default instance;