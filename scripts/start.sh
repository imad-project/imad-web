#!/usr/bin/env bash

PROJECT_ROOT="/home/ec2-user/apps/imad-web"

APP_LOG="$PROJECT_ROOT/application.log"
ERROR_LOG="$PROJECT_ROOT/error.log"
DEPLOY_LOG="$PROJECT_ROOT/deploy.log"

TIME_NOW=$(date +%c)

# NVM 환경 로드
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "$TIME_NOW > 스크립트 시작" >> $DEPLOY_LOG
echo "$TIME_NOW > 현재 디렉토리: $(pwd)" >> $DEPLOY_LOG
echo "$TIME_NOW > Node.js 버전: $(node -v)" >> $DEPLOY_LOG
echo "$TIME_NOW > Yarn 버전: $(yarn -v)" >> $DEPLOY_LOG

cd $PROJECT_ROOT/scripts || {
  echo "$TIME_NOW > 디렉토리 이동 실패: $PROJECT_ROOT/scripts" >> $DEPLOY_LOG
  exit 1
}

nohup yarn start > $APP_LOG 2> $ERROR_LOG &
echo "$TIME_NOW > yarn start 실행 완료" >> $DEPLOY_LOG
