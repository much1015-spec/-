# 나의 혈당 관리

「괜찮은 줄 알았는데」는 생활 속 선택으로 혈당 관리의 균형을 알아보는 한국어 선택형 스토리 게임입니다. 정적 웹사이트로 만들어 별도의 서버나 데이터베이스 없이 GitHub Pages에서 운영할 수 있습니다.

## GitHub Pages로 공개하기

1. 이 폴더 안의 모든 파일과 `.github` 폴더를 새 GitHub 저장소의 최상위에 올립니다. `index.html`, `app.js`, `style.css`, `README.md`와 `.github/workflows/pages.yml`이 저장소 바로 아래에 있어야 합니다.
2. 저장소의 **Settings → Pages → Build and deployment → Source**에서 **GitHub Actions**를 선택합니다.
3. `main` 브랜치에 파일을 올리면 Actions가 사이트를 자동 배포합니다. 저장소의 **Actions** 탭에서 `Deploy static site to GitHub Pages` 작업이 완료되면 주소를 확인할 수 있습니다. 보통 `https://<계정명>.github.io/<저장소명>/` 형식입니다.

저장소 기본 브랜치가 `main`이 아니라면 `.github/workflows/pages.yml`의 `branches` 값을 해당 브랜치 이름으로 바꾸세요.

## 구성

- `index.html`: 페이지와 한국어 문서 정보
- `style.css`: 모바일 우선 반응형 화면 디자인
- `app.js`: 선택 상태, 이야기 장면, 교육 카드 및 엔딩
- `.github/workflows/pages.yml`: GitHub Actions 기반 Pages 자동 배포

## 교육 안내

이 앱은 교육용 이야기이며 진단이나 개인별 치료 조언을 제공하지 않습니다. 한 번의 식사가 질병을 정한다고 표현하지 않고, 생활습관이 장기간 반복될 때의 위험과 개인차를 함께 안내합니다. 저혈당의 증상과 심각한 위험, 고혈당이 장기간 이어질 때의 합병증 위험을 다룹니다.

Google Fonts 연결이 차단된 환경에서는 기기의 기본 글꼴로 표시됩니다.
