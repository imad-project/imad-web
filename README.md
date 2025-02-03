
<img src="https://github.com/user-attachments/assets/b245b82b-fa87-4166-b796-810aeac3176b" width="12.5%" height="25%">


## 개요 




<img src="https://github.com/user-attachments/assets/c64d60f5-d169-4fe7-9b14-4db05a25ded3" width="50%" height="50%">

> IMAD 프로젝트 Web 레포지토리입니다.

```
IMAD는 tmdb 데이터베이스를 사용해 영화/드라마/애니메이션 등 여러 미디어 작품의 정보를 확인하고  
작품들에 대한 리뷰와 게시물을 남길 수 있는 커뮤니티입니다.
```




## 시작하기 
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


## 팀원 깃허브 🔗링크

- [IMAD Server](https://github.com/NCookies/imad-server)
- [IMAD Anroid](https://github.com/imad-project/imad-android)
- [IMAD Ios](https://github.com/imad-project/imad-ios)


## 🚀주요기능

<details>
 <summary>회원가입</summary>

 ## 회원가입
<p align = "leading">
 

 <img src="https://github.com/user-attachments/assets/be0d7c54-8ac8-4619-b87e-e330dfdeaf24" width="30%" height="25%">
 <img src="https://github.com/user-attachments/assets/2bb02b99-c38b-4334-ac94-24bd9a4a7061" width="30%" height="25%">
</p>

 
- 정규화된 이메일 주소와 비밀번호를 사용해 신규 회원가입이 가능합니다. 

- 회원가입 이후 닉네임, 성별, 출생년도, 좋아하는 영화 장르, 좋아하는 TV 시리즈 장르 등을 입력해 회원정보를 기입할 수 있습니다. 

</details>

<details>
 <summary>로그인</summary>

 ## 로그인

<img src="https://github.com/user-attachments/assets/4b7d56ba-45b7-4de0-966e-6fdaad0b6639" width="30%" height="25%">
 
- 회원가입 이후 로그인 기능을 사용하여 회원로그인을 진행할 수 있습니다.

- 아이매드 일반회원 로그인 기능
- Kakao, Naver, Google, Apple 의 소셜로그인기능
- 소셜 로그인시 신규 회원과 기존 회원을 구분하여 신규 가입도 동시에 진행 가능

</details>

<details>
 <summary>메인화면</summary>

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

</details>

<details>
 <summary>작품 검색</summary>

 ## 작품 검색
<p align = "leading">




 <img src="https://github.com/user-attachments/assets/387f8516-de4a-4582-aaf6-903399b1e203" width="30%" height="25%">
 
</p>

 
- 작품을 검색 할 수 있는 페이지 입니다. 

- tmdb 데이터 베이스에 있는 모든 작품을 검색 할수 있으며 별도의 검색 버튼 없이 타이핑만으로 실시간 작품검색이 가능합니다.
- 나열된 포스터 이미지를 클릭시 후술할 작품 상세페이지로 연결됩니다.

</details>



<details>
 <summary>작품 상세 페이지</summary>

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

</details>
