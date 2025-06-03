# 컨설토랑

> **식당 사장님을 위한 메뉴별 원가 계산 도우미**
>
> 원재료 등록 → 메뉴 구성 → 원가 계산
> <br>
> 실시간 단가 반영, 마진 설정, 판매가 추천까지!
>
> 📆 프로젝트 기간 : 2025.06 ~

<br>

## Contributors

🖥️ [임현우](https://github.com/Myunwoo)

<br>

## 링크

- 서비스 링크 (배포 예정)

<br>

## Development Environment & Stack

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-15.1.7-black">
  <img src="https://img.shields.io/badge/React-19.0.0-blue">
  <img src="https://img.shields.io/badge/TypeScript-5-blue">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-teal">
  <img src="https://img.shields.io/badge/Jotai-state--mgmt-green">
  <img src="https://img.shields.io/badge/Rsbuild-build-lightgrey">
</p>

### Framework / Core

| 라이브러리         | 목적                    | Version  |
|------------------|-----------------------|----------|
| Next.js          | React 기반 프레임워크   | 15.3.3   |
| React            | UI 라이브러리           | 19.0.0   |
| TailwindCSS      | 유틸리티 기반 CSS       | 3.4.1      |
| Jotai            | 전역 상태 관리          | 2.12.5     |
| Relay            | GraphQL 클라이언트      | 최신     |

### 기타 도입 라이브러리

| 라이브러리            | 사용 목적             |
|---------------------|--------------------|
| Jest                | 테스트 프레임워크     |
| Sentry              | 에러 트래킹         |
| Google Analytics    | 사용자 분석         |

<br>

## Conventions

<details>
<summary>Git Commit Convention</summary>

- [HOTFIX] : 🚑️  issue나, QA에서 급한 버그 수정에 사용
- [FIX] : 🔨 버그, 오류 해결
- [ADD] : ➕ Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성 시
- [FEAT] ✨ 새로운 기능 구현
- [DEL] : ⚰️ 쓸모없는 코드 삭제
- [DOCS] : 📝 README나 WIKI 등의 문서 개정
- [MOD] :💄 storyboard 파일,UI 수정한 경우
- [CHORE] : ✅ 코드 수정, 내부 파일 수정
- [CORRECT] : ✏️ 주로 문법의 오류나 타입의 변경, 이름 변경 등에 사용합니다.
- [MOVE] : 🚚 프로젝트 내 파일이나 코드의 이동
- [RENAME] : ⏪️  파일 이름 변경이 있을 때 사용합니다.
- [IMPROVE] : ⚡️ 향상이 있을 때 사용합니다.
- [REFACTOR] : ♻️ 전면 수정이 있을 때 사용합니다
- [MERGE] : 🔀 다른브렌치를 merge 할 때 사용합니다.

</details>

<details>
<summary>📌 Branch Naming</summary>

- 기능 개발: `feature/{이슈번호}-{기능명}`
- 버그 수정: `fix/{이슈번호}-{버그설명}`

</details>

<br>

## Deployment (예정)

- CI/CD: GitHub Actions
- Hosting: AWS S3 + CloudFront (정적 배포)
- Backend API: Spring Boot (별도 저장소)

<br>

---

© 2025. 현우 임 All rights reserved.
