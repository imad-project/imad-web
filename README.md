
<img src="https://github.com/user-attachments/assets/b245b82b-fa87-4166-b796-810aeac3176b" width="12.5%" height="25%">


## 개요 




<img src="https://github.com/user-attachments/assets/c64d60f5-d169-4fe7-9b14-4db05a25ded3" width="100%" height="auto">

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
