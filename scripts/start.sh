#!/usr/bin/env bash

PROJECT_ROOT="/home/ec2-user/apps/imad-web"

APP_LOG="$PROJECT_ROOT/application.log"
ERROR_LOG="$PROJECT_ROOT/error.log"
DEPLOY_LOG="$PROJECT_ROOT/deploy.log"

TIME_NOW=$(date +%c)

cd $PROJECT_ROOT/scripts
nohup ~/.nvm/versions/node/v22.13.0/bin/yarn start > $APP_LOG 2> $ERROR_LOG &

echo "$TIME_NOW > yarn 실행 중" >> $DEPLOY_LOG
