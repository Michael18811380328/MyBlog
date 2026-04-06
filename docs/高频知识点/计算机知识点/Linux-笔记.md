# Linux笔记 

 2026-4-1

 原始笔记链接：https://cloud.seatable.cn/dtable/external-links/59b453a8639945478de2/

 
## 0114 ssh 命令


ssh 用于登录远程主机，命令是 \`用户名@远程主机的ip\`

本地虚拟机测试登录，流程如下（这个适合虚拟机和宿主机的通信）ssh 默认使用 22 端口

1、打开虚拟机，使用 ifconfig | grep 'inet' 查看虚拟机的IP地址（192.168.1.168）或者在网络偏好设置界面中查看。

```
inet 192.168.1.152 netmask 0xffffff00 broadcast 192.168.1.255

```

2、在宿主机打开终端，使用 ssh michael@192.168.1.168 登录，然后输入虚拟机账户密码，即可进入

3、如果提示网络连接不上，可以查看局域网是否畅通，或者重启虚拟机（重新获取IP）

4、操作虚拟机（例如部署 python3 环境等）

5、退出时，执行 exit() 命令

也可以连接远程主机（个人服务器，操作类似）



   
## 0115 man 命令


man 命令（manual）可以查看一个命令的帮助文档： man git （git manual 文档）



   
## 0116 chmod 命令


change mode 用户对文件的权限的命令

主要用于 bash 可执行脚本的使用

chmod 755 hello

更改权限后，这样就可以执行了

文件执行时，第一行是执行的环境设置（下面第一个是node，第二个是bash）

```javascript
#!/usr/bin/env node
console.log('hello world');
```

```python
#!/bin/bash
echo "build start------"
cd book && mkdocs build
```

​

   
## 0117 lsof 命令


lsof（list open files）是一个查看当前系统文件的工具。

在linux环境下，任何事物都以文件的形式存在，用户通过文件不仅可以访问常规数据，还可以访问网络连接和硬件；如传输控制协议 (TCP) 和用户数据报协议 (UDP)套接字等，系统在后台都为该应用程序分配了一个文件描述符，该文件描述符提供了大量关于此应用程序的信息。

主要用途：查看某个网络端口是否被占用，然后分析或者杀掉占用端口的进程，查看某个服务是否正常启动

```
lsof -i:3000
```

结果

```
COMMAND     PID    USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME

Google      504 mike   52u  IPv4 0xff1d750e3e6d9b31      0t0  TCP localhost:52303->localhost:hbci (ESTABLISHED)

node      61822 

node      61822 mike  27u  IPv4 0xff1d750e3f4525c9      0t0  TCP localhost:hbci->localhost:52303 (ESTABLISHED)

```

主要参数：

COMMAND： 进程的名称

PID：   进程ID

USER: 	运行进程的用户

   
## 0118 tree 命令


tree 命令可以显示当前项目的结构，通过参数设置不同的效果

```bash
# 显示英文名称
tree

# 显示中文名称（-N）
tree -N

# 显示全部文件（隐藏文件）
tree -a

# 过滤隐藏文件夹
tree -I "node_modules"

# 支持管道符和正则匹配
tree -I "node_modules|cache|test_*"

# 只看两级目录
tree -L 2

# 把当前目录下文件中文形式输出，并过滤图片文件，输出到 md 文件中
tree -N -I "*.svg|*.png|*.jpg|*.gif|*.xmind" > tree-res.md

```



   
## 0907 docker 如何查看不同容器的 IP


docker 不同容器类似一个虚拟机，对应具体的 IP

1、docker ps 找到容器的 ID

2、docker inspect ID，获取容器的信息，找到下面的部分

这三个字段都属于 **Docker 内网（默认是 bridge 网桥网络）​** 的配置，不是宿主机的公网 / 内网配置，仅在 Docker 宿主机和同属该网络的容器之间生效。

```text
"NetworkSettings": {
  "Networks": {
    "bridge": {
      "IPAddress": "172.17.0.2",  # 容器的私有 IP 地址，其他同网络的容器可以通过这个 IP 直接访问该容器
      "Gateway": "172.17.0.1",
      "Subnet": "172.17.0.0/16"
    }
  }
}
```

`IPAddress` 是容器的内网唯一标识，用于同网络内的直接通信——其他容器或者宿主机，可以访问这个

`Gateway` 是容器的内网出口，负责转发容器与外部的网络流量

`Subnet` 是内网地址池，限定 IP 分配范围并实现网络隔离

   
## 0802 docker 概念和作用


docker 类似一个轻量级的虚拟机，虚拟机是创建完全不同的操作系统层面的环境，docker 可以重复使用操作系统层面的很多基础服务，比虚拟机更节省资源。

docker 可以将应用和依赖环境打包到一个容器中（使用直接拉取镜像，不需要考虑依赖安装兼容性等问题），支持自动化测试、发布等。

主要概念

镜像 image 对应类

容器 container 对应类的实例

先 pull 获取镜像，然后创建容器，然后进入容器进行操作

更改镜像地址：可以更改国内的镜像地址，安装镜像速度更快 [http://hub-mirror.c.163.com](http://hub-mirror.c.163.com "http://hub-mirror.c.163.com")

​

   
## 0697 pbcopy 和 pbpaste 命令


在 mac 终端中，可以使用 pbcopy 和 pbpaste 把内容复制粘贴到剪切板上，不需要手动复制粘贴内容

```text
cat ./demo.txt | pbcopy
```

或者

```text
pbpaste
```

​

   
## 0119 ps aux 命令


ps命令（Process Status）进程查看命令

aux 是参数，具体说明如下

a 显示现行终端机下的所有程序，包括其他用户的程序。

u 以用户为主的格式来显示程序状况。

x 显示所有程序，不以终端机来区分。

```
ps aux | grep Visual

```

```
USER               PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND

mike           2795   0.0  0.2 441880528  16784   ??  S    一10上午   0:08.85 /Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper --type=utility --utility-sub-type=network.mojom.NetworkService --lang=zh-CN --service-sandbox-type=network --user-data-dir=/Users/mike/Library/Application Support/Code --standard-schemes=vscode-webview,vscode-file --enable-sandbox --secure-schemes=vscode-webview,vscode-file --bypasscsp-schemes --cors-schemes=vscode-webview,vscode-file --fetch-schemes=vscode-webview,vscode-file --service-worker-schemes=vscode-webview --streaming-schemes --shared-files --field-trial-handle=1718379636,r,16462742083976417338,2502042514352757159,262144 --disable-features=CalculateNativeWinOcclusion,SpareRendererForSitePerProcess --seatbelt-client=39

mike           2793   0.0  0.0 441597680   2080   ??  S    一10上午   0:00.10 /Applications/Visual Studio Code.app/Contents/Frameworks/Electron Framework.framework/Helpers/chrome_crashpad_handler --no-rate-limit --monitor-self-annotation=ptype=crashpad-handler --database=/Users/mike/Library/Application Support/Code/Crashpad --url=appcenter://code?aid=de75e3cc-e22f-4f42-a03f-1409c21d8af8&uid=b710c932-bbde-4d20-bce2-e0f7fb455fad&iid=b710c932-bbde-4d20-bce2-e0f7fb455fad&sid=b710c932-bbde-4d20-bce2-e0f7fb455fad --annotation=_companyName=Microsoft --annotation=_productName=VSCode --annotation=_version=1.83.1 --annotation=plat=OS X --annotation=prod=Electron --annotation=ver=25.8.4 --handshake-fd=26

```

主要参数：

COMMAND： 进程的名称

PID：   进程ID

USER: 	运行进程的用户

%CPU:   #CPU占用率

%MEM:   #内存占用率

VSZ	    进程占用的虚拟内存大小

RSS     占用的物理内存大小

STAT：  #进程状态  ---了解

?    表示没有占用终端

R 	运行

S 	可中断睡眠 Sleep

D	不可中断睡眠

T 	停止的进程

Z 	僵尸进程

X    死掉的进程

START:	#进程的启动时间

TIME：	#进程占用CPU的总时间

COMMAND： #进程文件，进程名

进程状态--了解

Sl	以线程的方式运行

Ss  s进程的领导者，父进程

R+	+表示是前台的进程组

S< <优先级较高的进程

SN  N优先级较低的进程

   
## 0207 CLI and GUI 是什么


CLI and GUI——Command Line Interface  and Graphical user interface

命令行界面（CLI）没有图形用户界面（GUI）那么方便用户操作。因为，命令行界面的软件通常需要用户记忆操作的命令，但是，由于其本身的特点，命令行界面要较图形用户界面节约计算机系统的资源。

在熟记命令的前提下，使用命令行界面往往要较使用图形用户界面的操作速度要快。

所以，图形用户界面的操作系统中，都保留着可选的命令行界面。



   
## 0120 程序和进程的区别


1.进程：当一个程序暂停时，需要将其现场信息作为断点保存起来，以便以后能从断点处继续执行。这样，在多道程序系统中需要一块特殊区域保存断点。因此程序的概念已不能如实地反映程序执行时的特征，需要一个更准确地描述程序执行状态的术语，这就是进程。

进程：描述程序运行状态（程序进展的程度）。进程是具有一定独立功能的程序段关于一个数据集合的一次运行活动。 

2.进程组成

① 程序块：由指令代码组成，代码必须是纯代码，即在运行期间不修改自身。

② 数据块：进程执行时所需数据和工作单元以及开辟的工作区。

③ 进程控制块（PCB）：一个数据结构，其中包含描述和管理进程所需全部信息。如进程标识、进程所属用户标识、进程状态、调度参数、现场信息和程序地址等。创建进程时建立PCB，撤消进程时收PCB。PCB是进程存在的惟一标志。 

3.程序与进程的本质区别在于程序是静态的，进程是动态的。

\- 程序是指令及执行指令时所需数据的集合，可以长期保存在存储介质上；

\- 进程具有创建性、运行性和消亡性。

\- 进程和程序不是一一对应关系，一个程序可以对应多个进程。



   
## 0121 如何使用 bash 批量创建操作文件


需要调用 bash 的 API（创建删除目录，创建删除文件，循环，操作中增加变量的写法）

使用 for-do-done 完成循环（for循环的条件在外面，注意是两个点）删除文件无法回退，注意脚本执行

```
#!/bin/bash

for a in {1..10}
do
	mkdir test$a
done

```







   
## 0876 linux 常用命令


Linux 后台开发常用命令

<https://dablelv.github.io/backend-cmd/>

这个相当于一个手册，需要的时候可以查询，并不是说需要把上面全部的指令背会。

可以把常见的部分拿下来，然后备份一下。简单看一下即可。然后把链接放在常用知识点中。

   
## 0255 ifconfig 命令


ifconfig是linux中用于显示或配置网络设备（网卡）的命令，英文全称是 network interfaces configuring。可以使用这个命令更改网卡配置。

参考链接：<https://baike.baidu.com/item/ifconfig/5073112> 

#### 参数说明

inet 192.168.1.152 IPv4

netmask 0xffffff00 子网掩码

broadcast 192.168.1.255 

#### 实例截图

<img src="https://cloud.seatable.cn/workspace/32/asset/e82c7317-556e-45c4-8b5d-092331cd8977/images/auto-upload/image-1698137019841.png" width="566" height="null" />



   
## 0256 telnet 命令


telnet 远程登录协议，mac 需要手动安装 brew install telnet

用途：查看某个远程主机的端口是否可以访问，实际工作中用的不多，主要是黑客使用

```
ping + ip //查看某一个ip地址是否能够连通，如： ping 114.80.67.193
telnet ip port // 查看某一个机器上的某一个端口是否可以访问，如：telnet 114.80.67.193 8080

```



   
## 0257 ssh 和 telnet 的区别


加密方式不同：telnet是明码传输，SSH是加密传输。

telnet通过TCP/IP协议簇来访问远程终端，传输的数据和口令是明文形式。相对来说不安全，你所有的数据都可被攻击者直接捕获。&#x20;

SSH相对于telnet安全，它的传输方式是以加密形式传输。

SSH功能比telnet齐全，它既可以代替telnet进行远程管理终端，又可以为ftp、pop、基础PPP提供一个安全的通道。

* 端口号不同：telent 23 端口；SSH 端口号 22

* 默认情况下防火墙是不信任 telnet ，因为它不安全

简而言之，SSH更安全。

   
## 0270 kill pkill 如何杀掉进程


kill - send a signal to a process. kill 功能是向进程发出信号，它**默认传递终止进程运行的信号给进程。**

**kill是杀掉单个进程**，**killall是杀掉所有同名进程**，**pkill是杀掉一类进程或者某个用户的所有进程。**

终止前台进程使用 Ctrl + C 就可以了。终止一个后台进程就得用 kill 命令来终止。我们会先使用 ps、top 等命令获得进程的 PID，然后使用 kill 命令来杀掉该进程。通常使用 kill PID 就可以杀掉某个进程，不需要 killall pkill 批量杀掉进程。

参考链接：Killall 、Kill 、Pkill三个命令之间的详细区别 <https://cloud.tencent.com/developer/article/1847239> 

参数：9 表示彻底杀死一个进程（处理异常进程的最后手段，进程不会进行资源的清理工作），15 表示结束一个进程

```
kill -9 pid // 结束某个pid进程

killall -9 mysql //结束所有的 mysql 进程

pkill mysql //结束 mysql 进程
pkill -u mark,danny // 结束mark, danny用户的所有进程

```



   
## 0272 df du 如何查看磁盘占用


df 和 du 可以查看磁盘占用情况

df——disk free 可以快速获取 磁盘 被占用了多少空间，目前还剩下多少空间等信息

du——disk usage 显示磁盘空间的使用情况，统计 目录（或文件）所占磁盘空间的大小

详细参考：<https://blog.csdn.net/Rio520/article/details/104370082> 

df 实例（顶层目录，使用磁盘的情况）计算很快

```
Filesystem     512-blocks      Used Available Capacity iused     ifree %iused  Mounted on
/dev/disk3s1s1  478724992  45924872 197793376    19%  501730 988966880    0%   /
devfs                 420       420         0   100%     727         0  100%   /dev
/dev/disk3s6    478724992   4194392 197793376     3%       2 988966880    0%   /System/Volumes/VM

```

du 实例（某个子节点下，各个目录占用磁盘情况）全部硬盘计算很慢

```
16      ./row-operation
40      ./notification
96      ./comment
96      ./editor-column/button-widgets/modify-row-item
8       ./editor-column/button-widgets/send-email-widgets
320     ./editor-column/button-widgets
528     ./editor-column
312     ./share-widgets

```

常用参数

#### df -h

\-h参数使结果以K，M，G为单位，提高信息的可读性

```
Filesystem       Size   Used  Avail Capacity iused     ifree %iused  Mounted on
/dev/disk3s1s1  228Gi   22Gi   94Gi    19%  501730 988944000    0%   /
devfs           210Ki  210Ki    0Bi   100%     727         0  100%   /dev
/dev/disk3s6    228Gi  2.0Gi   94Gi     3%       2 988944000    0%   /System/Volumes/VM
/dev/disk3s2    228Gi  505Mi   94Gi     1%     345 988944000    0%   /System/Volumes/Preboot
/dev/disk3s4    228Gi  654Mi   94Gi     1%     252 988944000    0%   /System/Volumes/Update

文件系统                 容量  已用  可用 已用% 挂载点
/dev/mapper/centos-root   13G  5.1G  8.0G   39% /
devtmpfs                 485M     0  485M    0% /dev
tmpfs                    494M  176K  494M    1% /dev/shm
tmpfs                    494M   50M  444M   11% /run
tmpfs                    494M     0  494M    0% /sys/fs/cgroup
/dev/sda1                497M  119M  379M   24% /boot
tmpfs                     99M     0   99M    0% /run/user/0

```

#### du -sh

(-h 参数同样是为了提高可读性，-s 代表summary，只显示总大小)

9.1M 

#### du -h

```
0	./issue
20K	./v1/2.5-structure
20K	./v1/2.3-db
20K	./v1/2.0-env
24K	./v1/3.2-change
20K	./v1/2.2-backend
24K	./v1/00-introduction
28K	./v1/3.1-issues
24K	./v1/2.1-frontend
20K	./v1/2.4-test
36K	./v1/3.3-api
28K	./v1/1.0-future
64K	./v1/9.0-docs

```



   
## 0281 netstat 命令


netstat -ntlp

_Netstat _用于显示与IP、TCP、UDP和ICMP协议相关的统计数据，一般用于检验本机各端口的网络连接情况。

常用参数

```
-n 拒绝显示别名，能显示数字的全部转化成数字。
-p 显示建立相关链接的程序名
-t (tcp)仅显示tcp相关选项
-l 仅列出有在 Listen (监听) 的服務状态

```

其他参数

```
-a (all)显示所有选项，默认不显示LISTEN相关
-u (udp)仅显示udp相关选项
-r 显示路由信息，路由表
-e 显示扩展信息，例如uid等
-s 按各个协议进行统计
-c 每隔一个固定时间，执行该netstat命令。

```

在 linux 和 mac 中稍微有些不一样，具体参考程序内部文档，下面是 centOS 中的效果

```
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:3306            0.0.0.0:*               LISTEN      2528/mysqld         
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      13613/nginx: master 
tcp        0      0 0.0.0.0:21              0.0.0.0:*               LISTEN      1254/pure-ftpd (SER 
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      5466/sshd           
tcp        0      0 0.0.0.0:888             0.0.0.0:*               LISTEN      13613/nginx: master 
tcp        0      0 0.0.0.0:8888            0.0.0.0:*               LISTEN      60793/python        
tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      1574/master         
tcp6       0      0 :::21                   :::*                    LISTEN      1254/pure-ftpd (SER 
tcp6       0      0 :::22                   :::*                    LISTEN      5466/sshd           
tcp6       0      0 ::1:25                  :::*                    LISTEN      1574/master     

```

可以看到不同的进程（PID和进程名），占用不同的 TCP 网络信道



   
## 0435 Portainer


[https://blog.csdn.net/m0\_67900727/article/details/123550536](https://blog.csdn.net/m0_67900727/article/details/123550536 "https://blog.csdn.net/m0_67900727/article/details/123550536")

[https://blog.csdn.net/qq\_57761637/article/details/139063374](https://blog.csdn.net/qq_57761637/article/details/139063374 "https://blog.csdn.net/qq_57761637/article/details/139063374")

docker 图形化管理工具配置

目前本地运行时，注意 容器端口冲突 8000 9000

执行命令

```text
docker run -p 9000:9000 -p 8000:8000 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /mydata/portainer/data:/data -d portainer/portainer
```

1、docker 设置访问目录的权限，是否访问目录

2、路径是否正确? /host\_mnt/my-data/portainer/data 这个路径没有权限创建，是否需要手动创建目录，是否存在安全问题

   
## 0798 curl 命令


curl 命令在 linux 系统中常用，支持文件上传下载等多种命令

curl \[options] \[url]

1. curl <http://www.baidu.com> 系统发送 get 请求获取页面的链接内容到标准输出

2. curl -I <http://baidu.com> 显示 http 请求头，不显示内部内容

强制使用 get 方法 curl -d "somedata" -X GET URL

应用：带 cookies 登录

```text
curl -c "cookie-login" -d "username=asd&password=1234" -X POST URL
curl -b "cookie-login" URL
```

第一次通过 POST 发送用户信息并进行验证，存储 cookies，以后直接上传 cookies 即可免用户登录。

curl -v 显示请求详细信息

curl -f 向服务器 post 表单 curl -F "web=@index.html;type=text/html" url

   
## 0799 Linux 各个目录的作用


/bin 二进制可执行命令。该目录下存放着普通用户的命令

/dev 系统的设备文件，即设备的驱动程序

/home 存放用户文件的主目录，用户数据

/lib 存放着和系统运行相关的库文件

/mnt 存放临时的映射文件，通常是一些用来安装其他设备的子目录

/boot 存放启动 linux 的核心文件

/media 存放着可移除的设备，比如软盘，光盘

/misc 储存着一些特殊的字符的定义

/net 存放着和网络相关的一些文件

/proc 存放着用户与内核的交互信息

/sbin 系统的管理命令，这里存放的是系统管理员使用的程序

/srv 系统启动服务时可以访问的数据库目录

/tmp 临时文件，重启后自动清空

/var 存放系统产生的经常变化的文件

/etc 系统所有的配置文件都在这个目录中

/opt (option : 自由选择)主要给源码安装软件时选择的安装目录位置

/root 超级用户的目录

/selinux 主要用来加固操作系统，提高系统的安全性

/sys 管理设备文件

/usr 最大的目录，存放着应用程序和文件

/lost-found 这个目录平时是空的，当系统非正常关机而留下的“无家可归”的文件便会储存在这里

   
## 0800 Linux 用户管理


Linux 下有两种用户：普通用户和超级用户。

普通用户：在 linux 下做有限的事情；提示符是“\$”

超级用户：可以在 linux 系统下做任何事情，不受限制，提示符是“#”。

可以使用命令切换用户：su \[用户名]

```text
su – substitute user identity 更换用户身份
```

解释：

The su utility requests appropriate user credentials via PAM and switches to that user ID (the default user is the superuser).  A shell is then executed.&#x20;

su 实用程序通过PAM请求适当的用户凭据，并切换到该用户ID（默认用户是超级用户）。然后执行一个shell。

   
## 0801 Linux 权限管理


1.文件访问者的分类（人）

```
文件和文件目录的所有者：u—User

文件和文件目录的所有者所在的组的用户：g—Group

其他用户：o—Others
```

2.文件访问权限的种类

基本权限：

```
read 对文件而言，具有读取文件内容的权限；对目录来说，具有浏览目录信息的权限。

write 对文件而言，具有修改文件内容的权限；对目录来说，具有删除移动目录内文件的权限。

execute 对文件而言，具有执行文件的权限；对目录来说，具有进入目录的权限。

- 表示不具有该权限。
```

&#x20;3.文件权限值得表示方法

```
r– 只读

-w- 仅可写

–x 仅可执行

rw- 可读可写

-wx 可写可执行

r-x 可读可执行

rwx 可读可写可执行

— 无权限
```

​

   
## 0803 Linux 和 Windows 特点


1、开源和免费

2、安全稳定性

3、软件生态，开发语言

4、主要使用人群，使用场景

5、系统文件目录，磁盘驱动器

6、斜杠和反斜杠路径：/root/usr/bin, C: Programs\test

7、bash 和 cmd 等命令不同：cd dir，yum, brew

   
## 0751 常用 bash 脚本


1、识别图片中的文字，并拷贝到剪切板

```text
tesseract ./1.png output -l chi_sim --psm 6 && cat ./output.txt | pbcopy
```

具体配置参考：[https://cloud.seatable.cn/workspace/32/dtable/%E9%AB%98%E9%A2%91%E7%9F%A5%E8%AF%86%E7%82%B9/?tid=6qb1\&vid=0000\&row-id=apD--UxhTO6zv2YKLoLJFA](https://cloud.seatable.cn/workspace/32/dtable/%E9%AB%98%E9%A2%91%E7%9F%A5%E8%AF%86%E7%82%B9/?tid=6qb1\&vid=0000\&row-id=apD--UxhTO6zv2YKLoLJFA "https://cloud.seatable.cn/workspace/32/dtable/%E9%AB%98%E9%A2%91%E7%9F%A5%E8%AF%86%E7%82%B9/?tid=6qb1\&vid=0000\&row-id=apD--UxhTO6zv2YKLoLJFA")

2、在线 m3u8 视频下载到本地

```text
ffmpeg -i "https:///index.m3u8" -c copy -bsf:a aac_adtstoasc output.mp4
```

注意切片需要 ts 格式，png 切片目前转换不对（有些需要配置 token）

3、批量增加 import 语句

（遍历全部代码，给存在 ModalHeader 的文件增加 import xxx from xxx 语句）

```text
#!/bin/bash
﻿
# 遍历目录中的全部 js 文件
for file in $(find . -name "*.js"); do
  # 检查文件内容是否包含 ModalHeader 字符串
  if grep -q "ModalHeader" "$file"; then
    # 找到文件中的最后一行 import 行号
    last_import_line=$(grep -n "import" "$file" | tail -n 1 | cut -d: -f1)
    # 插入代码
    awk -v last_import_line="$last_import_line" -v code="import { DtableModalHeader } from 'dtable-ui-component;';" 'NR == last_import_line+1 { print code; print; next } 1' "$file" > tmp && mv tmp "$file"
  fi
done
﻿
```

​

   
## 0901 nice 命令


`nice` 是 Linux/Unix 系统中用于**调整进程优先级**的命令。简单来说，它能告诉操作系统："这个程序的重要性高 / 低，分配给它更多 / 更少的 CPU 资源"。

进程优先级用 **nice 值** 表示，范围是 `-20` 到 `19 `默认情况下，新进程的 nice 值是 `0`

**nice 值越低优先级越高，​nice 值越高优先级越低**

案例

```text
# 以默认优先级（nice=0）启动程序（等价于直接运行 program）
nice program

# 以低优先级（nice=10）启动程序（占用更少 CPU）
nice -n 10 program

# 简写
nice 10 program

# 以高优先级（nice=-5）启动程序（需要 root 权限，占用更多 CPU）
sudo nice -n -5 program
```

应用场景

1. **后台任务降优先级**：比如大型文件压缩、数据备份等耗时操作，用 `nice -n 19 tar -zcvf backup.tar.gz /data`，避免占用过多 CPU 影响前台工作。

2. **关键程序提优先级**：比如服务器上的数据库服务（如 MySQL），用 `sudo nice -n -10 mysqld`，确保它获得更多 CPU 资源，响应更快。

3. **系统负载均衡**：当系统 CPU 使用率过高时，给非关键进程提高 nice 值，让关键进程（如桌面程序、服务程序）更流畅。

  