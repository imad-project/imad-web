cd /home/ec2-user/apps/imad-web
# var=$(ps -ef | grep yarn)
# pid=$(echo ${var} | cut -d " " -f2)
 
# if [ -n "${pid}" ]
# then
#     kill -9 ${pid}
#     echo $* is terminated.
 
# else
#     echo $* is not running.
# fi

fuser -k 3000/tcp

echo 서버종료
