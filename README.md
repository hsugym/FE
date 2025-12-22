# Hansung Gym Management System - Frontend

한성대학교 헬스장 통합 관리 시스템의 프론트엔드 애플리케이션입니다.

## 목차
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [시스템 아키텍처](#시스템-아키텍처)
- [데이터 플로우](#데이터-플로우)
- [프로젝트 구조](#프로젝트-구조)
- [설치 및 실행](#설치-및-실행)
- [주요 페이지](#주요-페이지)

---

## 주요 기능

### 1. 메인 화면 (스크린샷)
![메인 화면](./my-app/public/screenshots/메인홈.png)
- 헬스장 소개 및 메인 비주얼
- 실시간 혼잡도 표시
- 주요 기능 바로가기

### 2. 멘토링 신청 화면
![멘토링 신청](./my-app/public/screenshots/멘토모집글.png)
- 멘토-멘티 매칭 신청
- 매칭 상태 확인
- 멘토링 프로필 조회
- 매칭 수락/거절

### 3. 멘토멘티 프로필
![멘토 프로필](./my-app/public/screenshots/멘토링신청페이지.png)
- 멘토 상세 정보
- 전문 분야 및 경력
- 멘토링 가능 시간
- 매칭 신청

### 4. 멘토 모달
- 멘토링 상세 정보 팝업
- 멘토 소개 및 리뷰
- 매칭 신청 버튼

### 5. 나의 멘토
- 현재 매칭된 멘토 정보
- 멘토링 일정 관리
- 멘토와의 소통 기록

### 6. 나의 모든 멘토
- 과거 및 현재 멘토 목록
- 멘토링 히스토리
- 멘토 평가 및 리뷰

### 7. 수업 분석 화면
![수업 분석](./my-app/public/screenshots/수업 현재상태.png)
- 수업 참여 통계
- 출석률 분석
- 수업별 성과 그래프

### 8. 수업
![수업](./my-app/public/screenshots/수업.png)
- 수업 목록 및 시간표
- 수강 신청 및 취소
- 정원 확인
- 내 수업 관리

### 9. 목표 관리
![목표 관리](./my-app/public/screenshots/목표관리.png)
- 개인 목표 생성 및 관리
- 목표 달성률 시각화
- 목표 완료 체크
- 목표 기반 포인트 획득

### 10. 공지사항
![공지사항](./my-app/public/screenshots/공지사항.png)
- 헬스장 공지사항
- 이벤트 안내
- 중요 알림

### 11. 공지사항 화면 (상세)
![공지사항 화면](./my-app/public/screenshots/공지사항 하나클릭한거예시.png)
- 공지사항 상세 내용
- 첨부 파일 다운로드
- 댓글 및 문의

### 12. 공지사항 화면
- 새 공지사항 작성
- 이미지 및 파일 첨부
- 공지 등록

### 13. 마이페이지
![마이페이지](./my-app/public/screenshots/마이페이지.png)
- 개인 프로필 관리
- 보유 포인트 확인
- 활동 통계 대시보드
- 획득 뱃지 표시

### 14. 나의 보기
![나의 보기](./my-app/public/screenshots/나의요약.png)
- 내 활동 요약
- 운동/식단 기록
- 목표 진행 상황

### 15. 로그인 화면
![로그인 화면](./my-app/public/screenshots/로그인화면.png)
- 학번 기반 로그인
- JWT 토큰 인증
- 자동 로그인 유지

### 16. 회원가입 화면
![회원가입 화면](./my-app/public/screenshots/회원가입화면.png)
- 신규 회원 가입
- 학번 및 개인정보 입력
- 약관 동의

### 17. 기록 추가 (가이드)
![기록 추가 가이드](./my-app/public/screenshots/기록추가하기.png)
- 운동/식단 기록 추가 가이드
- 입력 방법 안내
- 팁 및 주의사항

### 18. 베스트 루틴
- 추천 운동 루틴
- 인기 루틴 목록
- 루틴 상세 정보

### 19. 식단 투표 화면
![식단 투표 화면](./my-app/public/screenshots/식단루틴추천.png)
- 식단 추천 투표
- 인기 식단 순위
- 투표 참여

### 20. 운동 루틴 화면
![운동 루틴 화면](./my-app/public/screenshots/운동루틴추천.png)
- 운동 루틴 목록
- 루틴별 운동 종목
- 루틴 시작하기

### 21. 멘도 모달 (추가)
![멘도 모달](./my-app/public/screenshots/멘토멘티정보.png)
- 멘토링 신청 확인
- 매칭 정보 확인

### 22. 멘토 모달 (탈퇴)
- 멘토링 종료
- 탈퇴 확인 팝업

### 23. 랜덤 상성 멘토링 (기능 추가 전)
- 랜덤 매칭 기능 (개발 예정)
- AI 기반 상성 매칭

### 24. 랜덤 상성 멘토링 (기능 추가 후)
- 랜덤 매칭 기능 활성화
- 자동 멘토 추천
- 상성 점수 표시

### 25. 포인트교환소
![포인트교환소](./my-app/public/screenshots/포인트교환소.png)
- 포인트 교환소

---

## 기술 스택

### Frontend Framework
- **React** (v19.2) - UI 라이브러리
- **React Router DOM** (v7.9) - 클라이언트 사이드 라우팅

### State Management
- **Context API** - 전역 상태 관리
  - AuthContext - 인증 상태
  - PointContext - 포인트 상태
  - ThemeContext - 테마 상태
  - MatchContext - 멘토링 매칭 상태

### Styling
- **Tailwind CSS** (v3.4) - 유틸리티 CSS 프레임워크
- **PostCSS** - CSS 후처리
- **Autoprefixer** - 브라우저 호환성

### Data Visualization
- **Chart.js** (v4.5) - 차트 라이브러리
- **react-chartjs-2** (v5.3) - React Chart.js 래퍼

### Animation
- **Framer Motion** (v12.23) - 애니메이션 라이브러리

### UI/UX
- **react-hot-toast** (v2.6) - 토스트 알림

### Testing
- **@testing-library/react** - React 컴포넌트 테스팅
- **@testing-library/jest-dom** - Jest DOM 매처
- **@testing-library/user-event** - 사용자 이벤트 시뮬레이션

### Build Tools
- **React Scripts** (v5.0) - Create React App 빌드 도구

---

## 시스템 아키텍처

```
┌─────────────────────────────────────────────────────────────┐
│                      Browser (Client)                        │
└────────────────────────┬────────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    React Application                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  App Component                        │  │
│  │              (Router + Providers)                     │  │
│  └────────────────────┬─────────────────────────────────┘  │
│                       │                                      │
│  ┌────────────────────▼─────────────────────────────────┐  │
│  │              Context Providers                        │  │
│  │  • ThemeProvider  (다크모드)                          │  │
│  │  • AuthProvider   (인증 상태)                         │  │
│  │  • PointProvider  (포인트 상태)                       │  │
│  │  • MatchProvider  (멘토링 매칭)                       │  │
│  └────────────────────┬─────────────────────────────────┘  │
│                       │                                      │
│  ┌────────────────────▼─────────────────────────────────┐  │
│  │                  Page Components                      │  │
│  │  • Home           • Login         • MyPage            │  │
│  │  • Exercise       • Goal          • Class             │  │
│  │  • Mentoring      • Guide         • Notice            │  │
│  │  • Incentive      • RewardShop                        │  │
│  └────────────────────┬─────────────────────────────────┘  │
│                       │                                      │
│  ┌────────────────────▼─────────────────────────────────┐  │
│  │              Reusable Components                      │  │
│  │  • Navbar         • DailyRecordCard                   │  │
│  │  • QuestList      • WeightChart                       │  │
│  │  • Mentoring Components                               │  │
│  └────────────────────┬─────────────────────────────────┘  │
│                       │                                      │
│  ┌────────────────────▼─────────────────────────────────┐  │
│  │                  API Layer                            │  │
│  │              (config/api.js)                          │  │
│  │  • HTTP Client (fetch)                                │  │
│  │  • JWT Token Management                               │  │
│  │  • Error Handling                                     │  │
│  └────────────────────┬─────────────────────────────────┘  │
└────────────────────────┼────────────────────────────────────┘
                         │ HTTPS/REST API
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    Backend API Server                        │
│                  (Express.js - Railway)                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 데이터 플로우

### 1. 인증 플로우
```
User enters credentials
         ↓
Login Component → POST /api/auth/login
         ↓
Backend validates & returns JWT
         ↓
AuthContext stores token in localStorage
         ↓
AuthContext updates isAuthenticated state
         ↓
Protected routes become accessible
         ↓
All API requests include Authorization header
```

### 2. 포인트 업데이트 플로우
```
User performs action (운동/식단/출석)
         ↓
Component → POST /api/exercises (or diet/attendance)
         ↓
Backend processes & updates points
         ↓
Response includes updated total_points
         ↓
PointContext updates global point state
         ↓
All components showing points re-render
         ↓
Toast notification shows point change
```

### 3. 실시간 데이터 동기화
```
Component mounts
         ↓
useEffect → GET /api/data
         ↓
Update local state
         ↓
Render UI with data
         ↓
User action triggers update
         ↓
POST/PUT/DELETE /api/data
         ↓
Re-fetch data → GET /api/data
         ↓
Update local state
         ↓
UI re-renders with fresh data
```

### 4. 테마 전환 플로우
```
User clicks theme toggle
         ↓
ThemeContext updates theme state
         ↓
localStorage saves theme preference
         ↓
document.documentElement.classList updates
         ↓
Tailwind dark: classes apply
         ↓
All components re-render with new theme
```

---

## 프로젝트 구조

```
FE/my-app/
├── public/
│   ├── index.html                # HTML 템플릿
│   ├── login.jpg                 # 로그인 배경 이미지
│   └── videos/
│       └── gym.mp4               # 홈 배경 비디오
├── src/
│   ├── App.js                    # 메인 앱 컴포넌트
│   ├── App.css                   # 전역 스타일
│   ├── index.js                  # React 진입점
│   ├── index.css                 # Tailwind 진입점
│   │
│   ├── components/               # 재사용 가능한 컴포넌트
│   │   ├── Navbar.jsx            # 네비게이션 바
│   │   ├── DailyRecordCard.jsx   # 일일 기록 카드
│   │   ├── QuestList.jsx         # 퀘스트 목록
│   │   ├── WeightChart.jsx       # 체중 차트
│   │   └── mentoring/            # 멘토링 관련 컴포넌트
│   │
│   ├── pages/                    # 페이지 컴포넌트
│   │   ├── Home.jsx              # 홈 페이지
│   │   ├── Login.jsx             # 로그인 페이지
│   │   ├── MyPage.jsx            # 마이페이지
│   │   ├── Exercise.jsx          # 운동 기록 페이지
│   │   ├── Goal.jsx              # 목표 설정 페이지
│   │   ├── Class.jsx             # 수업 신청 페이지
│   │   ├── Notice.jsx            # 공지사항 페이지
│   │   ├── Incentive.jsx         # 인센티브 페이지
│   │   ├── RewardShop.jsx        # 보상 상점 페이지
│   │   ├── Guide.jsx             # 가이드 페이지
│   │   ├── guide/                # 가이드 탭 컴포넌트
│   │   │   ├── RoutineTab.jsx    # 루틴 가이드
│   │   │   └── DietTab.jsx       # 식단 가이드
│   │   └── mentoring/            # 멘토링 페이지
│   │       └── Mentoring.jsx     # 멘토링 메인
│   │
│   ├── context/                  # Context API
│   │   ├── AuthContext.jsx       # 인증 상태 관리
│   │   ├── PointContext.jsx      # 포인트 상태 관리
│   │   ├── ThemeContext.jsx      # 테마 상태 관리
│   │   └── MatchContext.jsx      # 멘토링 매칭 상태
│   │
│   ├── config/
│   │   └── api.js                # API 설정 및 유틸리티
│   │
│   └── assets/                   # 정적 리소스
│       ├── icons/                # 아이콘 이미지
│       └── mentoring/            # 멘토링 이미지
│
├── .env                          # 환경 변수 (개발)
├── .env.production               # 환경 변수 (프로덕션)
├── package.json                  # 의존성 관리
├── tailwind.config.js            # Tailwind 설정
├── postcss.config.js             # PostCSS 설정
└── README.md
```

---

## 설치 및 실행

### 1. 환경 변수 설정

`.env` 파일을 생성하고 다음 내용을 입력하세요:

```env
REACT_APP_API_URL=http://localhost:5001/api
```

프로덕션 환경의 경우 `.env.production`:

```env
REACT_APP_API_URL=https://your-backend-api.railway.app/api
```

### 2. 의존성 설치
```bash
cd FE/my-app
npm install
```

### 3. 개발 서버 실행
```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속합니다.

### 4. 프로덕션 빌드
```bash
npm run build
```

빌드된 파일은 `build/` 디렉토리에 생성됩니다.

### 5. 테스트 실행
```bash
npm test
```

---

## 주요 페이지

### 라우팅 구조

| 경로 | 컴포넌트 | 설명 | 인증 필요 |
|------|---------|------|----------|
| `/` | Home | 홈 페이지 | ❌ |
| `/login` | Login | 로그인 | ❌ |
| `/notice` | Notice | 공지사항 | ❌ |
| `/class` | Class | 수업 신청 | ❌ |
| `/mentoring` | Mentoring | 멘토링 | ❌ |
| `/guide` | Guide | 가이드 | ❌ |
| `/mypage` | MyPage | 마이페이지 | ✅ |
| `/incentive` | IncentivePage | 인센티브 | ✅ |
| `/reward-shop` | RewardShop | 보상 상점 | ✅ |

### Protected Routes

인증이 필요한 페이지는 `ProtectedRoute` 컴포넌트로 보호됩니다:

```jsx
<Route 
  path="/mypage" 
  element={
    <ProtectedRoute>
      <MyPage />
    </ProtectedRoute>
  } 
/>
```

로그인하지 않은 사용자는 자동으로 `/login`으로 리다이렉트됩니다.

---

## 주요 기능 상세

### 1. 인증 시스템
- JWT 토큰 기반 인증
- localStorage에 토큰 저장
- 자동 로그인 유지
- 토큰 만료 시 자동 로그아웃

### 2. 포인트 시스템
- 실시간 포인트 업데이트
- 전역 상태 관리 (PointContext)
- 포인트 획득/사용 알림
- 포인트 내역 조회

### 3. 다크 모드
- 시스템 테마 자동 감지
- 수동 테마 전환
- localStorage에 설정 저장
- Tailwind dark: 클래스 활용

### 4. 반응형 디자인
- 모바일 우선 디자인
- Tailwind 반응형 유틸리티
- 다양한 화면 크기 지원

### 5. 애니메이션
- Framer Motion을 활용한 부드러운 전환
- 페이지 전환 애니메이션
- 컴포넌트 등장 애니메이션

### 6. 데이터 시각화
- Chart.js를 활용한 차트
- 체중 변화 그래프
- 운동/식단 통계 차트
- 목표 달성률 시각화

### 7. 실시간 알림
- react-hot-toast를 활용한 토스트 알림
- 성공/에러 메시지
- 포인트 획득 알림
- 목표 달성 알림

---

## 개발 가이드

### 새로운 페이지 추가

1. `src/pages/` 에 컴포넌트 생성
2. `src/App.js` 에 라우트 추가
3. 필요시 `components/Navbar.jsx` 에 링크 추가

### API 호출

`config/api.js` 의 유틸리티 함수 사용:

```javascript
import { apiCall } from '../config/api';

const fetchData = async () => {
  try {
    const data = await apiCall('/endpoint', 'GET');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```

### Context 사용

```javascript
import { useAuth } from '../context/AuthContext';
import { usePoints } from '../context/PointContext';

function MyComponent() {
  const { user, isAuthenticated } = useAuth();
  const { points, updatePoints } = usePoints();
  
  // ...
}
```

---

## 라이센스

MIT License

---

## 개발팀

HSU Gym Team

---

## 문의

프로젝트 관련 문의사항은 이슈를 등록해주세요.
