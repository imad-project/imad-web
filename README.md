
<img src="https://github.com/user-attachments/assets/b245b82b-fa87-4166-b796-810aeac3176b" width="12.5%" height="25%">


## 📢개요 




<img src="https://github.com/user-attachments/assets/c64d60f5-d169-4fe7-9b14-4db05a25ded3" width="50%" height="50%">

> IMAD 프로젝트 Web 레포지토리입니다.

```
IMAD는 tmdb 데이터베이스를 사용해 영화/드라마/애니메이션 등 여러 미디어 작품의 정보를 확인하고  
작품들에 대한 리뷰와 게시물을 남길 수 있는 커뮤니티입니다.
```




## 💾시작하기 
<details>
 <summary>작동법</summary>
 
 ### 1. 라이브러리 설치 
```bash

yarn install

```
---

### 2. 서버 테스트 시작 
```bash

yarn dev

```
서버 테스트시 
 [http://localhost:3000](http://localhost:3000) 위의 로컬 주소로 브라우징 테스트를 진행 할 수 있습니다. 

 ---

 ### 3. 빌드 파일 생성 
```bash

yarn build

```
yarn build 시 별도의 최적화 된 서버 구동 파일을 생성 할 수 있습니다.

---

### 4. 서버 시동  
```bash
# 상위의 빌드 파일 생성 이후 작동할것!
yarn start 

```
yarn start 시 최적화 된 빌드파일을 사용해 서버를 구동 시킬 수 있습니다. 
서버는 3000 번의 포트로 자동 시작 됩니다.

---

</details>


## 🔗팀원 깃허브 링크

- [IMAD Server](https://github.com/NCookies/imad-server)
- [IMAD Anroid](https://github.com/imad-project/imad-android)
- [IMAD Ios](https://github.com/imad-project/imad-ios)


## 💻기술 스택

- TypeScript
- React
- Next.js
- Node.js
- Emotion
- Axios
- AWS


## 🚀주요기능
### 주요기능 목차
1. [회원가입](#회원가입)
2. [로그인](#로그인)
3. [메인화면](#메인화면)
4. [작품 검색](#작품-검색)
5. [작품 상세 페이지](#작품-상세-페이지)
6. [게시판과 게시글](#게시판과-게시글)
7. [프로필](#프로필)
8. [반응형 디자인](#반응형-디자인)
9. [보안](#보안)


## 느낀점 

개발을 본격적으로 시작한 후 처음으로 진행한 프로젝트가 단순한 토이 프로젝트가 아닌, 하나의 완성된 서비스를 제공하기 위한 팀 프로젝트였기에 여러 난관을 겪었다.
페이지를 만들기 위한 기본적인 문법을 배우면서 동시에 프로젝트를 진행해야 했기 때문에, 기존에 작성한 코드를 여러 번 뒤엎고 새로 만드는 일이 부지기수였다. 하지만 프로젝트를 마무리하고 돌아보니, 이러한 과정이 나에게 큰 성장을 가져다준 계기가 된 것 같다.

팀 프로젝트 경험조차 없었던 나는 팀원들과 아이디어와 의견을 나누며 회의를 진행하고, 이를 실제 프로젝트에 반영하기 위해 목표를 설정하고 기간을 조율하는 과정 자체가 새로운 경험이었다.

이번 프로젝트에서 나의 역할은 개발 중이던 커뮤니티 앱 서비스의 웹 버전 페이지를 만드는 것이었다. 다행히 앱 버전이 약 70% 정도 완성된 상태였기에, 웹 버전의 방향을 설정하는 것은 크게 어렵지 않았다. 하지만 나에게 가장 어려웠던 점은 앱 버전에서 구현된 기능을 웹에서도 동일하게 구현하는 것이었다. 단순한 디자인 요소부터 실질적인 기능까지 웹 환경에서 재현하는 과정이 가장 큰 난관이었다.

예를 들어, 앱 버전에서 사용된 별점 기능을 웹에서도 비슷하게 구현하기 위해 기존 라이브러리를 개조하거나, 아예 처음부터 새로 개발하는 작업을 진행하기도 했다. 이러한 경험을 통해 기존 라이브러리를 활용하는 법뿐만 아니라, 직접 기능을 구현하는 능력도 키울 수 있었다.

그리고 이번 프로젝트를 통해 서비스를 완성하고 배포하는 전체 과정을 경험하면서, 웹 서비스의 구조와 배포 시퀀스에 대한 이해도를 크게 높일 수 있었다. 프로젝트를 성공적으로 마친 지금, 이러한 경험이 앞으로 개발을 이어나가는 데 있어 큰 자신감이 될 것이라 확신한다.

   

## ⚙️배포 
- 본 레포지토리의 release 브런치에 push가 인식 되면 git action을 활용한 자동 배포 스크립트가 작동합니다.
- AWS s3에 빌드된 파일이 업로드되고 ec2에 이동되며 서버를 작동시키게 됩니다.
- 위의 과정은 스크립트에 의해 자동으로 진행됩니다.

 ## 회원가입
<p align = "leading">
 

 <img src="https://github.com/user-attachments/assets/be0d7c54-8ac8-4619-b87e-e330dfdeaf24" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/2bb02b99-c38b-4334-ac94-24bd9a4a7061" width="30%" height="25%">
</p>

 
- 정규화된 이메일 주소와 비밀번호를 사용해 신규 회원가입이 가능합니다. 

- 회원가입 이후 닉네임, 성별, 출생년도, 좋아하는 영화 장르, 좋아하는 TV 시리즈 장르 등을 입력해 회원정보를 기입할 수 있습니다.

  [목차로 돌아가기](#주요기능-목차)




 

 ## 로그인

<img src="https://github.com/user-attachments/assets/4b7d56ba-45b7-4de0-966e-6fdaad0b6639" width="30%" height="25%">
 
- 회원가입 이후 로그인 기능을 사용하여 회원로그인을 진행할 수 있습니다.

- 아이매드 일반회원 로그인 기능
- Kakao, Naver, Google, Apple 의 소셜로그인기능
- 소셜 로그인시 신규 회원과 기존 회원을 구분하여 신규 가입도 동시에 진행 가능


[목차로 돌아가기](#주요기능-목차)



 ## 메인화면
<p align = "leading">



 <img src="https://github.com/user-attachments/assets/6b16a364-b164-4001-a2a0-19b17a0e303a" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/dbbf7c53-aa5b-406e-b5e6-db7e82a65eff" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/830269cb-41a8-471f-a150-bc310a55f031" width="30%" height="25%">
</p>

 
- Project Imad 의 메인 페이지입니다.

- 메인배너엔 tmdb데이터 베이스의 상위 랭크된 작품들이 나열 됩니다.
- Imad 데이터 베이스에서 기록된 그날의 높은 조회수의 리뷰와 게시물을 불러와 오늘의 리뷰/게시물 로 표시해 줍니다.
- Imad 의 데이터 베이스 에서 높은 평점을 기록한 작품들을 순위별로 볼 수 있는 아이매드 차트 입니다.
- 로그인을 한 유저는 유저 정보에 기입되어 있는 선호하는 장르와 활동기록에 기반해 작품을 추천 받을 수 있습니다.

[목차로 돌아가기](#주요기능-목차)

 ## 작품 검색
<p align = "leading">




 <img src="https://github.com/user-attachments/assets/387f8516-de4a-4582-aaf6-903399b1e203" width="30%" height="25%">
 
</p>

 
- 작품을 검색 할 수 있는 페이지 입니다. 

- tmdb 데이터 베이스에 있는 모든 작품을 검색 할수 있으며 별도의 검색 버튼 없이 타이핑만으로 실시간 작품검색이 가능합니다.
- 나열된 포스터 이미지를 클릭시 후술할 작품 상세페이지로 연결됩니다.


[목차로 돌아가기](#주요기능-목차)




 ## 작품 상세 페이지
<p align = "leading">





 <img src="https://github.com/user-attachments/assets/4034a202-4bb3-43aa-9db8-98d454539e52" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/c2a33e91-d6a4-4f5c-97f2-ab228491f76a" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/1871beec-f3c8-4c9d-9054-6f69addd9468" width="30%" height="25%">
 
</p>

 
- 선택한 작품의 상세 정보를 확인 할 수 있는 작품 상세 페이지 입니다.

- 작품의 제목,원재, 국가, 연령등급, 장르 ,방송사, 개요 ,스태프롤, 시즌정보 등을 확인 할 수 있습니다.
- 로그인한 회원일경우 작품을 스크랩 하거나 리뷰를 작성할 수 있습니다.
- 리뷰를 작성시 작품에 대한 평가를 별점으로 나타낼 수 있고 스포일러 여부를 체크해 의도치 않은 스포일러를 방지 할 수 있습니다.
- 작품 상세 페이지 에서 타유저가 작성한 리뷰들을 확인 할 수 있으며 리뷰에 대한 좋아요/싫어요 평가와 리뷰 신고를 진행 할 수 있습니다.
- 본인이 작성한 리뷰의 수정기능이 포함되어 있습니다.

[목차로 돌아가기](#주요기능-목차)

 ## 게시판과 게시글
<p align = "leading">





 <img src="https://github.com/user-attachments/assets/676f9a1e-506f-468c-bb56-973d4aa9b60f" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/bc4ba5ab-ed04-4589-9e05-af3a1018b427" width="30%" height="25%">

 
</p>

 
- 타유저들과 의견을 교류 할 수 있는 게시판입니다.

- 게시판의 경우 게시글의 나열방식을 변경할 수 있도록 하였습니다. ex) 글분류, 좋아요/싫어요순, 최신순 등등 변경가능!
- 게시글 제목을 클릭시 게시글 전문을 볼 수 있는 상세 페이지로 이동합니다.
- 게시글 상세 페이지 에선 댓글을 작성/수정이 가능하고 타유저의 댓글을 확인 하거나 답글을 달아 의견을 교류 할 수 있습니다.
- 부적절한 게시글을 신고처리 할 수 있습니다.


[목차로 돌아가기](#주요기능-목차)

 ## 프로필
<p align = "leading">





 <img src="https://github.com/user-attachments/assets/e6e7e977-af03-459b-bd81-6edca58ef939" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/85ddff32-7e75-4ad8-b363-7aba39bc6c15" width="30%" height="25%">
<img src="https://github.com/user-attachments/assets/5efd3c9f-ceb7-4634-b91a-ada54d878d02" width="30%" height="25%">
 
</p>

 
- 자신의 정보를 확인할 수 있는 프로필 페이지 입니다.
- 로그인한 유저일 경우 상단의 네비게이션바에서 자신의 닉네임을 클릭시 언제든 이동할 수 있습니다.
- 닉네임 우측의 톱니바퀴를 클릭시 회원정보수정,비밀번호 변경, 회원탈퇴 등의 기능을 사용할 수 있습니다.
- 프로필 사진을 클릭시 유저의 프로필 사진을 변경할 수 있습니다.
- 프로필 사진 변경은 Imad 측에서 제공하는 기본 프로필 사진들을 사용하거나 유저가 원하는 커스텀 이미지를 업로드하여 사용할 수 있습니다.
- 내 리뷰/내 게시물/내 스크랩 버튼을 클릭시 자신이 작성한 리뷰/게시물, 내가 스크랩한 게시물/리뷰등을 확인할 수 있습니다. 

[목차로 돌아가기](#주요기능-목차)

## 반응형 디자인
<p align = "leading">





 <img src="https://github.com/user-attachments/assets/47ed5d2e-2708-4b27-b615-1aabf0a2f3de" width="60%" height="25%">
 <img src="https://github.com/user-attachments/assets/f1efb6b3-8372-4f14-b11d-3291dc93aa54" width="30%" height="25%">

 
</p>

<p align = "leading">





 <img src="https://github.com/user-attachments/assets/bf6132fa-fc81-457a-b1d3-4b23ce739ceb" width="60%" height="25%">
 <img src="https://github.com/user-attachments/assets/df2980c2-6532-4b58-88f7-b7dd0eecd9ec" width="30%" height="25%">

 
</p>

- 전체 페이지에서 반응형 디자인을 적용하였습니다.

- styled-components의 @media 속성을 활용해 접속한 기기에서의 max-width 별로 최적화한 화면이 구성 됩니다.


[목차로 돌아가기](#주요기능-목차)

 ## 보안
<p align = "leading">





 <img src="https://github.com/user-attachments/assets/abdd2f98-8d17-4bd5-8005-e257c8d347cf" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/727168a7-53a1-4634-916a-3180001c8ea6" width="30%" height="25%">

 
</p>

 
- 개발하며 주의한 보안잇슈를 나열합니다.
- https를 사용해 서버와의 통신은 암호화 되어 있습니다.
- 비밀번호등 민감한 정보는 클라이언트측에서 한번더 암호화를 진행하여 통신을 진행합니다.
- SQL injection 에 대응하기위해 프로젝트에 사용된 모든 input&textarea 는 태그로 사용될 수 있는 특수문자를 사용하지 못하도록 설계 되어 있습니다.
 

[목차로 돌아가기](#주요기능-목차)




