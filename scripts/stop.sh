cd /home/ec2-user/apps/imad-web
var=$(ps -ef|grep java|grep -v 'grep'|grep -v $0)
pid=$(echo ${var} | cut -d " " -f2)
 
if [ -n "${pid}" ]
then
    kill -9 ${pid}
    echo $* is terminated.
 
else
    echo $* is not running.
fi
