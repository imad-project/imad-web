
<img src="https://github.com/user-attachments/assets/b245b82b-fa87-4166-b796-810aeac3176b" width="12.5%" height="25%">


## 개요 




<img src="https://github.com/user-attachments/assets/c64d60f5-d169-4fe7-9b14-4db05a25ded3" width="100%" height="auto">

> IMAD 프로젝트 Web 레포지토리입니다.

```
IMAD는 영화/드라마/애니메이션 등 여러 미디어 작품에 
대한 리뷰를 남길 수 있고 커뮤니티로 소통할 수 있는 커뮤니티 입니다.
```




## 시작하기 


### 라이브러리 설치 
```bash

yarn install

```
---

### 서버 테스트 시작 
```bash

yarn dev

```
서버 테스트시 
 [http://localhost:3000](http://localhost:3000) 위의 로컬 주소로 브라우징 테스트를 진행 할 수 있습니다. 

 ---

 ### 빌드 파일 생성 
```bash

yarn build

```
yarn build 시 별도의 최적화 된 서버 구동 파일을 생성 할 수 있습니다.

---

### 서버 시동  
```bash
# 상위의 빌드 파일 생성 이후 작동할것!
yarn start 

```
yarn start 시 최적화 된 빌드파일을 사용해 서버를 구동 시킬 수 있습니다. 
서버는 3000 번의 포트로 자동 시작 됩니다.

---

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
