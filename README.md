<img src="https://capsule-render.vercel.app/api?type=waving&color=FF9C60&height=250&section=header&text=😺NALANCE😺&fontSize=40" style="width: 100%;" />

# 💡서비스 소개
### 나의 삶의 발란스, NALANCE(나란스)
### 페르소나의 발란스, NALANCE(나란스)

: NALANCE는 사용자의 페르소나별 활동을 기록하고,<br/>
기록을 토대로 비율을 계산해사용자가 삶의 균형을 건강하게 맞추며 살고 있는지를 알려주는 웹 서비스 입니다.
<br/>

<br/>
  
<div style="width: 80%; margin: 0 auto; display: flex; justify-content: space-between;">
  <img src="https://github.com/user-attachments/assets/caed5472-d266-4170-956f-d6ccead1d8f4" style="width: 48%;" />
  <img src="https://github.com/user-attachments/assets/fce7fbf3-175e-4d20-9f80-d9f2b52de549" style="width: 48%;" />
</div>

<br/>

# ✨ 메인 기능
![image](https://github.com/user-attachments/assets/e2cd79ab-9dc3-4ddc-91a8-e483765217f8)

<br/>

# 🛠️ 기술 스택
#### 프론트엔드
<div>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=black">
</div>
<br></br><br></br>

# 👥 팀원 소개
|김진효|맹도현|양재희|정주연|
|:---:|:---:|:---:|:---:|
|프론트엔드|프론트엔드|프론트엔드|프론트엔드|

<br></br>

## 🎯 Git Convention
양식: `Commit Type: 간단한 코드 설명 #number`  
ex) `git commit -m “Feat: 로그인 페이지 #20”`

- 🎉 **Start:** Start New Project
- 🎉 **Init:** 프로젝트 초기 세팅
- ✨ **Feat:** 새로운 기능을 추가 
- 🐛 **Fix:** 버그 수정 
- 🎨 **Design:** CSS 등 사용자 UI 디자인 변경 
- ♻️ **Refactor:** 코드 리팩토링 
- 🔧 **Settings:** Changing configuration files
- 🗃️ **Comment:** 필요한 주석 추가 및 변경 
- ➕ **Dependency/Plugin:** Add a dependency/plugin
- 📝 **Docs:** 문서 수정
- 🔀 **Merge:** Merge branches
- 🚀 **Deploy:** Deploying stuff 
- 🚚 **Rename:** 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 
- 🔥 **Remove:** 파일을 삭제하는 작업만 수행한 경우
- ⏪️ **Revert:** 전 버전으로 롤백

## 🪴 Branch Convention (GitHub Flow)

- `main`: 배포 가능한 브랜치, 항상 배포 가능한 상태를 유지
- `feature/이슈번호_기능설명`: 새로운 기능을 개발하는 브랜치
  - 예: `feature/#20_login`

### Flow

1. 새로운 `이슈` 생성.
2. `main` 브랜치에서 새로운 브랜치를 생성.
3. 작업을 완료하고 커밋 메시지에 맞게 커밋.
4. Pull Request를 생성 / 팀원들의 리뷰.
5. 리뷰가 완료되면 `develop` 브랜치로 병합.
6. 병합 후, 필요시 배포.

**예시**:

```bash
# 새로운 기능 개발
git checkout -b feature/#20_login
# 작업 완료 후, 본인 브랜치로 push
git add .
git commit -m "Feat: 로그인 페이지 #20"
git push origin feature/#20_login
# push 후, pull request & 코드리뷰 요청
```
