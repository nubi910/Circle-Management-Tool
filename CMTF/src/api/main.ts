import instance from './index'; // 앞서 만든 공통 설정 인스턴스

// 유저 목록 조회 (GET)
export const hello = () => {
  return instance.get('/main/hello');
};