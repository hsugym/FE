// API Base URL 설정
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// API URL 헬퍼 함수
export const getApiUrl = (path) => {
  return `${API_BASE_URL}${path}`;
};
