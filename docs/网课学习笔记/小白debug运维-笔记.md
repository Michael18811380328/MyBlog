# 小白debug运维
### 小白 debug
小白debug：偏向服务器运维

[https://space.bilibili.com/302188068/lists?sid=4617929\&spm\_id\_from=333.788.0.0](https://space.bilibili.com/302188068/lists?sid=4617929\&spm_id_from=333.788.0.0 "https://space.bilibili.com/302188068/lists?sid=4617929\&spm_id_from=333.788.0.0")

​


### 00 redis 简介
这个短视频生动有趣，概括性介绍了 Redis 和 相关架构的概念。


### 01 redis 是什么
#### redis 是什么

Redis 是一个远程字典类型数据库，常用于缓存。

#### 使用原因

因为 mysql 需要频繁读写磁盘，扛不住高并发，所以在内存中运行一个 redis 缓存服务，服务器先查询内存，查询不到再去硬盘查询 mysql，这样查询速度快，也减少了 mysql 的高并发问题。

#### mysql 和 redis 的关系

不是平行的关系，应该是 Redis 是中间件，服务器先查询 redis，然后找不到再查询 mysql 服务。

#### 缓存

设置缓存过期时间，释放过期缓存，避免占用太多内存。

[https://www.bilibili.com/video/BV1Rwthz8EP7/](https://www.bilibili.com/video/BV1Rwthz8EP7/ "https://www.bilibili.com/video/BV1Rwthz8EP7/")


### 02 redis 主从模式哨兵模式
#### 主从模式

Redis 一个服务部署在一个机器上，如果多个机器中，需要部署多个 Redis，那么这些 Redis 可以设置成主从模式。一个 Redis 是主节点，提供读写功能。其他节点是从节点，只提供读功能。写入内容时，主节点把写入的内容同步到从节点中，实现了数据的一致性。

#### 哨兵模式

为了避免 Redis 服务挂掉，需要服务器上另外一个进程，进行监控服务是否正常，这个就是哨兵进程。一个哨兵可以自己挂掉，多个哨兵可以避免这个问题，就是哨兵集群。这个用在高可用的结构中（多个 Redis 节点+哨兵集群）

[https://www.bilibili.com/video/BV1Rwthz8EP7?vd\_source=2d5bdee7ea59486ed4aa4a9b10020224\&p=2\&spm\_id\_from=333.788.videopod.sections](https://www.bilibili.com/video/BV1Rwthz8EP7?vd_source=2d5bdee7ea59486ed4aa4a9b10020224\&p=2\&spm_id_from=333.788.videopod.sections "https://www.bilibili.com/video/BV1Rwthz8EP7?vd_source=2d5bdee7ea59486ed4aa4a9b10020224\&p=2\&spm_id_from=333.788.videopod.sections")


### 03 redis 集群模式
#### redis 集群模式

当数据量比较大，一个 Redis 节点不能存放全部数据，那么就把数据进行切片，根据不同哈希值，放在不同的 Redis 节点中，就形成了 Redis 集群模式。

集群模式的可扩展性：当数据量继续增加，还需要增加 Redis 节点，这个就需要可扩展性的架构。需要增加一个中间层，初始化使用算法计算好切片的位置，进行存储等操作。最后的架构就是，Redis 是集群部署，每一个集群内部是主从分布架构，确保高性能，可扩展，高可用的架构。

[https://www.bilibili.com/video/BV1Rwthz8EP7?vd\_source=2d5bdee7ea59486ed4aa4a9b10020224\&spm\_id\_from=333.788.videopod.sections\&p=3](https://www.bilibili.com/video/BV1Rwthz8EP7?vd_source=2d5bdee7ea59486ed4aa4a9b10020224\&spm_id_from=333.788.videopod.sections\&p=3 "https://www.bilibili.com/video/BV1Rwthz8EP7?vd_source=2d5bdee7ea59486ed4aa4a9b10020224\&spm_id_from=333.788.videopod.sections\&p=3")


### 01 游戏服务器网络架构
github: [https://github.com/xiaobaiTech](https://github.com/xiaobaiTech "https://github.com/xiaobaiTech")

视频链接：[https://www.bilibili.com/video/BV1gg4y1g7qY/?spm\_id\_from=333.1387.collection.video\_card.click\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1gg4y1g7qY/?spm_id_from=333.1387.collection.video_card.click\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1gg4y1g7qY/?spm_id_from=333.1387.collection.video_card.click\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

疑问：原神玩家上亿，如何实现服务器架构，如何实现很多人同时玩？

从游戏发展阶段

#### 第一阶段：早期单机游戏

所有的代码和数据都在客户端，不需要联网，所以存在作弊和篡改问题。

#### 第二阶段：多个游戏客户端+1个游戏服务器

一些重要内容放在服务器上存储（例如技能伤害进度），一些动作渲染的部分再客户端实现（例如大招效果，剧情等非核心数据）。存在的安全问题：所有玩家直接连接服务器，高并发下服务器容易崩溃，造成用户无法访问的情况——这个在实际生产活动中遇到过。

#### 第三阶段：多个游戏客户端 + 多个游戏服务器 + 其他业务服务器

可以先把服务器不同功能拆开：登录服务，网关服务，核心游戏服务，商城服务，语音服务，数据服务等，这样就减轻了一个服务器处理逻辑太多的问题。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755238249492.jpg)

对于登录服务器和网关服务器，可以设计多个平行节点，通过负载均衡，让用户动态访问不同服务器，即使某个服务器挂掉，用户可以访问到其他 gateway 节点服务器，不至于出现大面积长时间停服。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755238256651.jpg)

#### 第四阶段 多人同时在线

我们分成不同的游戏

类似传奇，碧蓝航线，MC，穿越火线，这种支持多人同时在一个房间（例如几百人），如果人数增加，就需要横向增加不同的区域服务器，不同区域服务器之间数据完全不互通，这是一种上千人在线的模式。

当某些区域人数很少时（有些退游的账户），这种架构还支持合并区域，并创造新的游戏玩法（广东1区和广东2区进行比拼）

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755238264703.jpg)

类似王者荣耀，三国杀，虽然支持多人游戏，但是一个游戏会限制10个人参加，这是固定的玩法，不会出现几千个人同时在一个服务器，那么此时可以划分成房间服务器。如果10个人匹配成功，这10个人同时连接一个房间服务器，房间服务器内部有一个游戏主线程（控制用户的技能伤害时间等等），结束这一局后退出房间服务器。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755238280359.jpg)

类似原神这种主要是单机游戏，偶尔是多人游戏（最多4个人），这种每个人都有一个 GameServer，中心服务器会协调其他人会进入到这个人的主世界中进行游玩，是这样的架构。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755238272149.jpg)

总结：不同游戏，根据游戏多人在线的人数和互动情况，决定游戏服务器部署

* 几千人同时在线：分成多个区域服务器。

* 10个人同时在线打牌：进入某个房间。

* 4个人同时在线：进入对方的房间。


### 02 为什么IP都是192.168开头
[https://www.bilibili.com/video/BV1HL41117tZ/?spm\_id\_from=333.1387.collection.video\_card.click\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1HL41117tZ/?spm_id_from=333.1387.collection.video_card.click\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1HL41117tZ/?spm_id_from=333.1387.collection.video_card.click\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

疑问：为什么很多人的 IP 都是 192.168.x.x 的？

早期 IP 基于 IPv4 设计，分成网络号和主机号，进一步分成ABC三类地址。例如下面的就是前20位是网络号，后12位是主机号，这个确定了每一台计算机都有对应的IP地址。A类地址下面计算机非常多，适合大型机构；C类计算机比较少，适合小型机构。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755241416819.jpg)

随着人类发展，IPv4 总数是40亿个，无法满足全部的设备，那么原来一层的 IP 地址寻址方式，改成了多层的广域网和局域网模式。广域网上每个IP地址是唯一的，称为公网IP。进入到某个区域后，局域网内部每一个IP是内部唯一的，就是私有IP。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755241423074.jpg)

通常情况下，一个局域网内部机器比较少，那么内网IP就是使用C类地址，对应的 IP 就是 192.168 开头的内网IP。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755241429651.jpg)

​


### 03 断网能ping通127.0.0.1吗
[https://www.bilibili.com/video/BV18x4y1c79T?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV18x4y1c79T?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV18x4y1c79T?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

问题：断网能ping通127.0.0.1吗？

1、断网后能 ping 通 127.0.0.1 这个 IP。这个 IP 是本地回环地址。如果 ping 外网地址，需要走真实的网卡，发送接收数据包。如果是 ping 回环地址，那么直接走虚拟网卡，本地直接返回 pong。所以即使断网，本地可以 ping 通 127.0.0.1。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755242851714.jpg)

2、下面这三个有什么区别？

127.0.0.1 是本机的 IP 地址

localhost 实际上是域名，经过默认域名解析后，就是 127.0.0.1，大部分情况下，localhost == 127.0.0.1

0.0.0.0 是不存在的地址，这个有其他用途。

<img src="https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755242844140.jpg" alt="" title="" width="368" height="365" />

0.0.0.0 可以理解成通配符，例如把服务开启到 0.0.0.0 上面（相当于通配本地的IP），那么本机地址和内网IP都可以访问这个上面的服务。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755242858081.jpg)

​


### 04 HTTPS 和秘钥
[https://www.bilibili.com/video/BV1RT411272Y?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1RT411272Y?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1RT411272Y?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

介绍加密算法，HTTPS的工作原理。

#### 对称加密和非对称加密

对称加密：加密方和解密方使用相同的秘钥进行加密，这样传输信息时，必须要传递秘钥，所以存在秘钥泄露可能性，那么传输信息可靠性也受影响。

非对称加密：有公钥和私钥，使用公钥进行加密，使用私钥进行解密，公开公钥，然后算法确保了不会泄密的可能。

#### HTTPS 四次握手

HTTPS 是基于TCP的应用层协议，通过四次握手，具体如下：

1、客户端发送 TLS 的协议，加密算法，客户端的随机数到服务器

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755312770244.jpg)

2、服务器确认协议版本，加密算法，并将一个服务器随机数，服务器证书文件，发送给客户端。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755312775769.jpg)

3、客户端获取到服务器公钥，然后客户端生成第二个随机数（关键），使用服务器的公钥进行加密，发送给服务器

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755312781879.jpg)

4、服务器使用私钥解密，获取到第三个随机数。使用这些随机数，生成一个会话的秘钥，再发送给客户端。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755312788368.jpg)

5、经过上面4步的操作，完成了非对称加密，生成了会话秘钥。之后客户端和服务器使用会话秘钥进行对称加密通信。

​

服务器证书用于验证公钥的真实性，确保通信安全。

HTTPS使用SSL/TLS协议来加密数据传输

其中涉及到三个随机数：客户端随机数、服务器随机数、预主密钥。预主密钥在客户端生成后，会被服务器的公钥加密，只有服务器才能用私钥解密。这样即使被别人拿到，也无法解密原文。

#### 那么 HTTPS 是对称加密还是非对称加密

前期四次握手是非对称加密

后期使用会话秘钥是对称加密（因为每次非对称加密成本比较高）

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-08/image-1755312762762.jpg)


### 05 cdn是什么
[https://www.bilibili.com/video/BV1nY411m7Ap?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1nY411m7Ap?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1nY411m7Ap?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

CDN是什么以及其工作原理：普通的网络请求 API，MySQL 是存储层，Redis 是缓存层。如果是多媒体文件（图片），那么 OSS S3 就是存储层，CDN 就是缓存，实际上就是一个代理缓存服务器。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-09/image-1757332120420.jpg)

CDN，全称为内容分发网络，是一种用于加速互联网内容的分布式网络。通过在多个地理位置部署服务器，CDN可以减少用户与内容源之间的延迟，提高访问速度和可用性。

CDN如何通过DNS调度系统将用户请求定向到“最近”的服务器：首先客户端请求一个图片，先经过域名解析服务器，然后域名解析服务器根据用户实际位置，返回一个最近服务器的 CNAME，客户端再请求这个 CNAME 获取图片。根据用户的位置不同，CDN 节点的负载不同，域名解析服务器会返回不同的 URL。利用缓存机制提高数据读取效率。

这里的“最近”，并不单纯只地理位置靠近，而是综合了地理位置，服务器负载等多个原因。

为什么不直接使用 S3 而是使用 CDN 呢？因为 S3 直接访问费用更高。

CDN的使用场景和适用情况，强调了回源操作对性能的影响。

前端如何判断资源是走的 CDN 还是从真实 S3 上面返回的？根据 Request Head 中的 X-cache 字段：TCP missed 或者 TCP memory hit ，判断资源加载的位置。

如何避免服务器刚开始部署，全部请求都打到真实的 S3 上面？可以使用 CDN 的预热功能，服务正式上线前，先模拟访问一下，然后让 CDN 节点缓存资源，然后用户真实访问时，可以直接使用 CDN 上面缓存的资源。


### 06 socket 是什么
[https://www.bilibili.com/video/BV12A411X7gY/?spm\_id\_from=333.1387.collection.video\_card.click\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV12A411X7gY/?spm_id_from=333.1387.collection.video_card.click\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV12A411X7gY/?spm_id_from=333.1387.collection.video_card.click\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

> 注意：
>
> Socket 和 WebSocket 是网络通信中两个相关但不同的概念
>
> Socket 是所有网络通信的基础工具；WebSocket 是基于 Socket 实现，专为 Web 实时通信优化
>
> 这里只介绍 socket

socket 实际上是一套用于连接的数字（**套接字**），它是操作系统内核空间，实现网络传输功能的结构的接口层（类似API）。

内核中，实现网络传输功能的结构是 sop，基于不同的协议和应用场景，会被泛化为各种类型的 soc。

socket 层将 soc 嵌入到 Linux 文件系统的框架里，用户就可以在用户空间，使用文件句柄来操作内核sop的网络传输能力。

socket fd 是一个 INT 类型的数字句柄，可以被理解为一套用于连接的数字。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-09/image-1757656883290.jpg)

个人理解的 socket：进程如何进行联网发送信息？不能直接发送，需要通过操作系统的接口进行发送。这个接口就是 socket。在 Linux 中一切皆文件，所以 socket 也是一个文件。应用程序从上到下逐层通过接口打包，把数据包传递到操作系统底层，然后通过物理层发送出去。


### 07 内网穿透和NAT
[https://www.bilibili.com/video/BV1ne411A7hP?spm\_id\_from=333.788.player.switch\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1ne411A7hP?spm_id_from=333.788.player.switch\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1ne411A7hP?spm_id_from=333.788.player.switch\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

问题：我在家里搭建了游戏服务器，在公司里无法直接连接家里的服务器，但是加了花生壳内网穿透后就可以连接了？

NAT 设备：network address translation 网络地址转换设备

#### 局域网主机，主动连接公网主机流程

我家是小区里的局域网，局域网 IP 是 192.168.1.68，局域网的路由器的公网 IP 是 20.20.20.20，我希望访问的服务器是 30.30.30.30。

我需要用 192.168.1.68 发送到小区的路由器 20.20.20.20:6001，然后局域网路由器转换一下 IP 数据包，发送到 30.30.30.30，这个转换过程就是 SNAT 源网址地址转换。

服务器30.30.30.30 响应，把数据包发送到小区路由器 20.20.20.20:6001，然后小区路由器转发给我 192.168.1.68，我在局域网内部就收到了公网服务器的返回值了。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-09/image-1757658356315.jpg)

这里小于路由器中保存着一个映射关系：192.168.1.68 —— 20.20.20.20:6001&#x20;

（为什么要加上端口号？因为局域网中机器很多，IP 很多，那么需要增加端口号确保每一个 IP 对应关系，例如邻居的 192.168.1.69 —— 20.20.20.20:6002）。这就是 NAPT 网络地址端口转换

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-09/image-1757658406833.jpg)

#### 公网主机，主动连接局域网主机流程

公网的主机，连接局域网的主机，需要使用花生壳内网穿透。

内网的主机没有 NAT 的映射表，所以公网上的主机，无法通过 IP 访问到内网的主机。此时可以在内网服务器装一个花生壳客户端，这个客户端会主动和花生壳服务器连接，并提供映射关系。公网的主机，访问花生壳服务器的域名，然后把数据包发送到花生壳中，通过花生壳穿透内网，访问内网中的服务器。

![](https://cloud.seatable.cn/workspace/81910/asset/b0de7002-5abf-48b9-b07b-ba7033be74a7/images/2025-09/image-1757658519951.jpg)

​


### 01 沉浸式翻译
[https://www.bilibili.com/video/BV1pqwaeRE8Y/?spm\_id\_from=333.1387.collection.video\_card.click\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1pqwaeRE8Y/?spm_id_from=333.1387.collection.video_card.click\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1pqwaeRE8Y/?spm_id_from=333.1387.collection.video_card.click\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

谷歌浏览器翻译插件，谷歌2024年精品插件

* 支持整段翻译，也支持一行翻译成中文

* 默认翻译无颜色，可以设置高亮翻译的文本，可以设置模糊翻译的文本

* 支持 github youtube

* 支持不同翻译模型（谷歌翻译，微软翻译，腾讯翻译，大模型翻译，OpenAI (ChatGPT)、DeepL、Gemini(Bard) ）

* PDF 电子书

普通翻译不花钱，AI 翻译需要付费


### 02 如何阅读技术文档
[https://www.bilibili.com/video/BV1SjraY2ET6?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1SjraY2ET6?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1SjraY2ET6?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

大部分文档和技术书 PDF，写的太臃肿，不适合从头读到尾，而是适合顺带着问题去读书。

1、总览：使用 AI 总结，看这个文档和自己想要的是否一致，如果不一致直接跳，如果学会了也直接跳

2、跳读：使用 AI 总结成思维导图，可以了解不同关键点的关系，找到自己需要的点

3、精读：需要的部分（某个算法的核心）

作者推荐 Updf 这个软件，本地已经下载，免费版的 AI 使用有限，不过阅读没问题。本地可以新建一个 PDF 的文件夹，然后不断读书。

​


### 03 怎么判断面试结果
[https://www.bilibili.com/video/BV1dR2UYpEBa?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1dR2UYpEBa?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1dR2UYpEBa?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

怎么判断面试结果是否有戏？

1、面试一般是1小时以内，如果面试官前期聊得比较多，想多聊，那可能有戏。如果面试官着急进入下一个场合，那么就是有可能刷绩效，或者后面还有其他更好条件的人面试。

2、面试结束时，通常面试官会问还有什么问题，这时可以问一下在公司未来的安排是什么，如果面试官有明确的安排，那可能行比较大，如果面试官表示等通知，那就是婉拒。

如何准备算法题目？

1、传统的 Leetcode 刷题

2、作者推荐字节的 MarsCode AI 辅助思路刷题（有一定带货的意思）


### 04 云服务一体化
[https://www.bilibili.com/video/BV1R7bAeFEkZ?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1R7bAeFEkZ?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1R7bAeFEkZ?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

这个就是华为云的广告

程序员开发过程中，建议有一个一站式的平台（文档平台，论坛平台，开发环境，数据库）。

实际上，浏览器的书签就是一个一站式的平台，用好书签管理，就可以方便的进行不同平台的切换了。


### 05 用什么画图
[https://www.bilibili.com/video/BV1wF4pe4ERa?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1wF4pe4ERa?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1wF4pe4ERa?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

代码写的好是内秀，图画的好是外秀

图片可以展示代码的结构和逻辑，让老板和用户看到具体的结构，而不是代码细节

绘图软件：**飞书、​亿图图示、​VSCOde drawIO 插件、​processON 流程图**


### 06 怎么用云服务器摸鱼
[https://www.bilibili.com/video/BV1h8pwe6ERW?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1h8pwe6ERW?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1h8pwe6ERW?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

云服务器上主要可以做哪些功能？自己现在有哪些功能？

1、做实验

2、写个人博客

3、写个人简历

4、搭建开发环境（实际需要较好的硬件配置，可能比较贵）

5、图床

某些公司会监控 github Leetcode 等网站的访问，使用 VScode 做一层代理，就可以摸鱼的方式进行访问某些网站了。


### 07 如何用 AI 阅读项目
[https://www.bilibili.com/video/BV1zr421M7Qm?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1zr421M7Qm?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1zr421M7Qm?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

问题：如何使用 AI 阅读项目代码？

1、使用 TRAE 的不同模型，支持本地 IDE 或者云服务器 dev\_box 拉取项目

2、对于文档 readme，选中，AI 提取中心意思即可

3、某段代码解释，代码续写，代码 review，单元测试，AI 可以处理大部分中小项目

​


### 08 爆改最抽象的宝可梦
[https://www.bilibili.com/video/BV1Fg4y1m7Dc?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1Fg4y1m7Dc?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1Fg4y1m7Dc?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

这个内容比较水

介绍阿里出品的**通义灵码**，用于游戏开发，游戏调试


### 09 云计算到底是什么
云计算是什么？就是把传统服务器机房，改成云服务器实现

[https://www.bilibili.com/video/BV1fN4y1Y7Jy?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1fN4y1Y7Jy?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1fN4y1Y7Jy?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

给了一个亚马逊云的使用教程，不同的实例不同的配置

[https://dev.amazoncloud.cn/video/videoList?catagory\&col=646de6e699ab8c6709d15323](https://dev.amazoncloud.cn/video/videoList?catagory\&col=646de6e699ab8c6709d15323 "https://dev.amazoncloud.cn/video/videoList?catagory\&col=646de6e699ab8c6709d15323")


### 10 用互联网黑话提需求
[https://www.bilibili.com/video/BV1Xw411D7ws?spm\_id\_from=333.788.videopod.sections\&vd\_source=2d5bdee7ea59486ed4aa4a9b10020224](https://www.bilibili.com/video/BV1Xw411D7ws?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224 "https://www.bilibili.com/video/BV1Xw411D7ws?spm_id_from=333.788.videopod.sections\&vd_source=2d5bdee7ea59486ed4aa4a9b10020224")

这个内容比较水

使用亚马逊的 AI 助手：[https://aws.amazon.com/cn/pm/codewhisperer/](https://aws.amazon.com/cn/pm/codewhisperer/ "https://aws.amazon.com/cn/pm/codewhisperer/")

什么是 Amazon CodeWhisperer？

CodeWhisperer 经过数十亿行代码的训练，可以根据您的评论和现有代码实时生成从代码片段到全函数的代码建议。

✔**** 为您量身定制的实时 AI 代码生成器

✔**** 支持热门编程语言和 IDE

✔****针对 AWS 服务的优质建议

✔****内置安全扫描


### 系列4 硅基文明简史
[https://space.bilibili.com/302188068/lists/7549462?type=season](https://space.bilibili.com/302188068/lists/7549462?type=season "https://space.bilibili.com/302188068/lists/7549462?type=season")


