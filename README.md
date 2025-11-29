# Hansung Gym Management System

> 한성대학교 헬스장 통합 관리 시스템
> React + MySQL 기반의 회원 중심 헬스장 플랫폼

---

## 프로젝트 개요

헬스장 회원 통합 관리 시스템으로, 회원을 중심으로 운동 루틴, 식단, 멘토링, 인센티브 등 다양한 기능을 통합 관리할 수 있도록 설계되었습니다.

### 기술 스택

| 구분 | 내용 |
|------|------|
| Frontend | React 18 (Create React App) |
| Styling | TailwindCSS, Framer Motion |
| Database | MySQL (로컬 연결 방식) |
| State Management | Context API |
| UI Framework | Responsive Design |
| Animation | Framer Motion |
| Charts | Chart.js |

---

## 주요 기능

### 1. 회원 관리
- 개인 프로필 및 건강 정보 관리
- 출석 체크 시스템
- 포인트 및 뱃지 시스템

### 2. 운동 관리
- 운동 기록 추적 (카테고리별 분류)
- 목표 설정 및 달성률 확인
- 운동 루틴 가이드

### 3. 식단 관리
- 식단 기록 (식사 시간별 분류)
- 영양 정보 추적
- 식단 가이드

### 4. 건강 기록
- 체중, 근육량, 체지방률 추적
- BMI 자동 계산
- 체중 변화 그래프 (Chart.js)

### 5. 멘토링 시스템
- 멘토/멘티 매칭
- 멘토링 모집글 작성
- 매칭 관리 (신청, 수락, 종료)

### 6. 헬스장 이용 현황
- 교양수업 시간표 확인
- 실시간 헬스장 가용성 체크
- 현재 이용 인원 표시

### 7. 인센티브 시스템
- 운동 기록 5회마다 100P 지급
- 식단 기록 3회마다 50P 지급
- 출석 10회마다 200P 지급
- 목표 설정 2개마다 80P 지급

### 8. 데이터 시각화
- Chart.js 기반 체중 변화 차트
- 요일별 운동 빈도 차트
- 부위별 운동 분석 (도넛 차트)
- 운동 성장률 TOP 3

---

## 실행 방법

### 1. 패키지 설치
```bash
npm install
```

### 2. 데이터베이스 설정
```bash
# MySQL 접속
mysql -u root -p

# 데이터베이스 생성
CREATE DATABASE hs_health CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hs_health;

# 스키마 적용
source my-app/server/sql/HS_Health.sql;

# 더미 데이터 삽입
source my-app/server/sql/insert_dummy_data.sql;
```

### 3. 개발 서버 실행
```bash
npm start
```

브라우저에서 `http://localhost:3000` 접속

---

## 프로젝트 구조

```
my-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── videos/
│       └── gym.mp4
│
├── src/
│   ├── assets/
│   │   └── mentoring/
│   │       ├── mentor.png
│   │       ├── mentee.png
│   │       └── defaultProfile.png
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── WeightChart.jsx
│   │   └── DailyRecordCard.jsx
│   │
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── PointContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MyPage.jsx
│   │   ├── Goal.jsx
│   │   ├── Class.jsx
│   │   ├── Notice.jsx
│   │   ├── Exercise.jsx
│   │   ├── Incentive.jsx
│   │   ├── RewardShop.jsx
│   │   │
│   │   ├── guide/
│   │   │   ├── Guide.jsx
│   │   │   ├── DietTab.jsx
│   │   │   ├── RoutineTab.jsx
│   │   │   ├── PostCard.jsx
│   │   │   └── NewPostModal.jsx
│   │   │
│   │   └── mentoring/
│   │       ├── Mentoring.jsx
│   │       ├── MentorRecruitTab.jsx
│   │       ├── MenteeRecruitTab.jsx
│   │       ├── MatchContext.jsx
│   │       └── MatchModal.jsx
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── server/
│   ├── server.js
│   └── sql/
│       ├── HS_Health.sql
│       ├── insert_class_data.sql
│       ├── insert_dummy_data.sql
│       └── README.md
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
└── README.md
```

---

## 데이터베이스 스키마

### 주요 테이블

- **Member**: 회원 정보 및 포인트
- **ExerciseList**: 운동 목록 (40개, 카테고리별 분류)
- **FoodList**: 음식 목록 (45개, 카테고리별 분류)
- **ExerciseLog**: 운동 기록
- **DietLog**: 식단 기록
- **HealthRecord**: 건강 기록 (체중, 근육량, 체지방, BMI)
- **Attendance**: 출석 기록
- **AchievementLog**: 성취 로그 및 포인트 획득
- **Badge**: 뱃지 목록
- **MemberBadge**: 회원 뱃지 획득 기록
- **Class**: 교양수업 정보
- **Class_Schedule**: 수업 시간표
- **Mentoring**: 멘토링 매칭 정보
- **Goal**: 목표 설정

### 주요 관계

```
Member (1) --- (N) ExerciseLog
Member (1) --- (N) DietLog
Member (1) --- (N) HealthRecord
Member (1) --- (N) Attendance
Member (1) --- (N) AchievementLog
Member (1) --- (N) MemberBadge
Member (1) --- (N) Goal

ExerciseLog (N) --- (1) ExerciseList
DietLog (N) --- (1) FoodList
AchievementLog (N) --- (1) Badge
```

---

## API 엔드포인트

### 교양수업
- `GET /api/classes` - 모든 교양수업 조회
- `GET /api/class-schedules/:classId` - 특정 수업 시간표 조회
- `POST /api/classes` - 새 교양수업 추가
- `PUT /api/classes/:id` - 수업 정보 수정
- `DELETE /api/classes/:id` - 수업 삭제

---

## 주요 기능 상세

### 마이페이지 대시보드

#### 나의 요약 섹션 (6개 인사이트 카드)
1. **최근 활동 요약**: 요일별 운동 빈도 차트
2. **많이 수행한 운동 TOP 3**: 운동 빈도 기준 순위
3. **많이 성장한 운동 TOP 3**: 성장률 기준 순위
4. **부위별 운동 분석**: 도넛 차트로 분포 시각화
5. **이번달 요약**: 개인화된 성취 요약
6. **체중 변화**: Chart.js 라인 차트

#### 캘린더 기능
- 현재 날짜 강조 (오렌지-레드 그라데이션)
- 출석 기록 표시 (파란색-보라색 그라디언트)
- 선택된 날짜 기록 표시

#### 기록 추가
- 운동 기록: 카테고리별 필터링 (가슴/등/하체/어깨/팔/복근/유산소)
- 식단 기록: 카테고리별 필터링 (단백질/탄수화물/채소/과일/유제품/보충제/한식)
- 건강 기록: 체중/근육량/체지방 입력, BMI 자동 계산

### 멘토링 시스템

#### 멘토 모집
- 멘토 모집글 작성
- 멘티의 신청 확인 및 수락
- 매칭 관리

#### 멘티 모집
- 멘티 모집글 작성
- 멘토의 신청 확인 및 수락
- 매칭 관리

### 다크모드 시스템

#### 전역 테마 관리 (ThemeContext)
- Context API 기반 상태 관리
- localStorage에 테마 설정 저장
- HTML 루트 요소에 `dark` 클래스 자동 추가/제거

#### 페이지별 독립 다크모드
- Class 페이지: `classPageTheme` localStorage 키
- MyPage: `myPageTheme` localStorage 키
- Mentoring 페이지: 독립 다크모드
- Guide 페이지: 독립 다크모드

---

## 의존성

```json
{
  "dependencies": {
    "react": "^18.x.x",
    "react-dom": "^18.x.x",
    "react-router-dom": "^6.x.x",
    "framer-motion": "^10.x.x",
    "chart.js": "^4.4.1",
    "react-chartjs-2": "^5.2.0",
    "react-hot-toast": "^2.4.1",
    "express": "^4.21.2",
    "mysql2": "^3.11.5",
    "cors": "^2.8.5"
  }
}
```

---

## 향후 개발 계획

- 백엔드 API 서버 구현 (Express.js)
- 실시간 알림 시스템 (WebSocket)
- 이미지 업로드 기능
- 운동/음식 검색 및 필터링 고도화
- 소셜 기능 (친구, 랭킹)
- PWA 지원
- 모바일 앱 (React Native)

---

## 알려진 이슈

1. 백엔드 서버 미구현 (현재는 더미 데이터 사용)
2. 실시간 업데이트 미구현 (WebSocket 필요)
3. 이미지 업로드 기능 없음
4. 검색 기능 미구현

---

## 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.
