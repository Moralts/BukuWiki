---
title: 多人游戏
slug: /multi-play
sidebar_position: 7
---

import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 多人游戏

也许你厌倦了一个人玩游戏的无聊和没有新鲜感；也许你想和其他玩家一起探索世界；也许你喜欢激烈的战斗或者战术的博弈；也许你想要一个热闹的氛围。

不管怎样，首先恭喜你解锁了 `多人游戏板块`。在这里，我们将会一起了解 [`联机`](#联机) 和 [`服务器`](#服务器)。

该目录下有一些多人游戏的玩法介绍。

<DocCardList />

## 联机

### 局域网直连（适合同网络环境）

如果你和你的朋友在同一个局域网下（或者说你和你的朋友连一个 WiFi），那么你就可以采取直连的方法。

1. 创建主机：

    1. 进入单人存档 → 按 Esc 键 → 点击 「对局域网开放」

    2. 设置游戏模式（生存/创造）和是否允许作弊 → 生成端口号（默认为 19132）。

2. 加入：

    其他玩家在多人游戏界面 → 等待 「本地游戏」 自动刷出主机房间 → 点击加入（无需 IP 输入）。

:::tip

若无法发现房间，检查所有设备是否连接到同一 WiFi，并关闭防火墙测试。

:::

### 远程链接

如果你无法和你的朋友连上同一个WiFi，那就可以采取这种方法。

1. 创建主机：

   1. 进入单人存档 → 按 Esc 键 → 点击 「对局域网开放」

   2. 设置游戏模式（生存/创造）和是否允许作弊 → 生成端口号（默认为 19132）。
      在 1.19.3 麻将在对局域网开放内加入了自定义端口的功能，如果你使用 1.19.3 以下可能需要安装 [自定义局域网联机](https://www.mcmod.cn/class/2754.html) 模组来确定端口。

2. 下面为你列出了常见的远程联机软件，接下来你需要挑选一个适合自己的软件来帮助自己联机。

   <Tabs>
     <TabItem value="radmin-lan" label="Radmin LAN" default>
       **优点**：  简单便捷、适合新手、无需注册  
       **缺点**：  软件下载速度慢、如果人太多网速会变慢  
       **网站**：  [Radmin LAN](https://www.radmin-lan.cn/)  
       **相关教程**：  [三分钟教会你用Radmin LAN联机](https://www.bilibili.com/video/BV1FkskekEtV)
     </TabItem>
     <TabItem value="sakura-frp" label="SakuraFrp">
       **优点**：  速度快、适合更多人一起联机  
       **缺点**：  需注册和实名认证  
       **网站**：  [SAKURA FRP](https://www.natfrp.com/)  
       **相关教程**：  [SakuraFrp 帮助文档](https://doc.natfrp.com/)
     </TabItem>
     <TabItem value="essentials" label="Essentials Mod">
       **优点**：  无需额外软件  
       **缺点**：  需要正版、服务器位于海外、可能链接速度慢  
       **网站**：  [Essentials](https://essential.gg/)  
       **相关教程**：  [Essentials模组如何使用](https://www.bilibili.com/opus/750924420004970518)
     </TabItem>
   </Tabs>
   
   优质教程视频： [一个视频带你了解Minecraft的5种联机方式](https://www.bilibili.com/video/BV14SXnYyEit)

3. 其他玩家在多人游戏界面 → 输入链接 → 点击加入。

### 常见问题

#### 无效会话

出现类似 `登入失败:null` 或 `无效的会话（请重启启动器或游戏）` 消息提示，无法加入世界。

:::info[解决方案]

1. 安装 [自定义局域网联机](https://www.mcmod.cn/class/2754.html) 模组。
2. 重新创建主机并禁用“在线模式”。
3. 解决。

:::

#### 未知的主机

出现类似 `unknown host` 、 `getsockopt` 或 `未知的主机` 消息提示，无法加入世界。

:::info[可能的情况]

* 地址输错了
* 远程联机软件没有正常开启
* 没有向局域网开放游戏
* 端口号错误

:::

你这时候可以打开另一个客户端来尝试加入，如果你进得去说明是地址输错、端口号配置错误或远程软件的问题。

## 服务器

也行，你觉得和自己的朋友玩有写无聊。你想结交一些新朋友，体验新玩法……  
这时候你可以选择加入第三方服务器。当然，你也可以选择自己开一个服务器。

### 加入第三方服务器

首先你需要找到自己的玩法

TODO

### 自己开服

关于自己开服的部分，这里不再过多赘述。  
因为已经有人专门写了开服文档。

点击查看： **[笨蛋开服文档](https://nitwikit.8aka.cn/)**
