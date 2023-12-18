cd /home/ec2-user/apps/imad-web
nohup yarn start /dev/null 2> /dev/null < /dev/null &
cat nohup.out 
echo 실행완료