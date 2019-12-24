﻿# 实训说明
<div style='text-align:center'>
	<img src="https://github.com/daifang/H5-App/blob/master/img/Logo-%E5%A4%A7.png" alt="Sample"  width="140" height="140" />
	<p>
		<em>logo</em>
	</p>
</div>

* # 后台人员
        ```
       //安装依赖包
       //切换到BackControl目录
       $ cd BackControl
       $ npm i 
       $ npm start
        ```
* # [前端项目地址](https://github.com/daifang/acg_Web/tree/master/shixun)
## ACG-Wiki
信息|-
-|-
名称|ACG-wiki
类型|网站
主要功能|文章论坛
附加功能|周边交易

### 成员信息
姓名|身份职务
-|-
代天放|前端 (某些组件开发,数据交互) 、 后台开发 、 后台管理系统
粟慧军|数据库设计(数据库设计 创建 维护) 、后台开发(个别接口)
冯菲珂|前端开发 (页面开发,页面美化)
赵晓宇|前端开发 (页面开发)

## 用到的技术 
 
功能|技术支持 
-|- 
移动端站点| react  
登录功能| express + cookie  
注册功能| nodemailer 邮箱验证 
密码加密| MD5加密
购物车| localStroage 
数据存储| [postgresql](https://www.runoob.com/postgresql/postgresql-tutorial.html) + node 文件操作
后台支持| [express](http://www.expressjs.com.cn/guide/routing.html) + Nginx
服务器| 云服务器(CentOS) 


## 后台进度
* #### 已基本完成 login_back.js | login.js | api.js(正在优化)
* #### 2019-11-25 后台主要UI(已测试) -- daifang
* #### 2019-11-25 完成了数据库的初步设计 -- suhuijun
* #### 2019-11-26 后台系统管理员登录(已测试) -- daifang
* #### 2019-11-27 后台系统管理员注册(已测试) -- daifang
* #### 2019-11-27 完成了数据库的初步建设（11个表） -- suhuijun
* #### 2019-11-29 上午:后台系统管理员注册+邮箱激活(已测试) 下午:后台系统管理员密码md5加密(已测试) -- daifang
* #### 2019-11-29 晚上:后台登录+反馈页面移动端UI(已测试) || 后台系统登录健壮性优化(已测试) -- daifang 
* #### 2019-11-30 中午:前端登录+注册功能(未测试) -- daifang   <--(已测试12-10)
* #### 2019-11-30 根据实际应用情况对数据库进行了大幅度改动（表增加到12个） -- suhuijun
* #### 2019-12-1  
    * ##### 上午开始构建与后台数据库对接的API接口 -- suhuijun
    * ##### 中午发现漏洞:可以不用账户密码就可以登录(已解决) -- daifang 
    * ##### 下午更改项目目录结构,删除不必要文件 -- daifang 
* #### 2019-12-2
    * ##### 下午初步完成了API与后台数据库的对接 -- suhuijiun
* #### 2019-12-3
    * ##### 上午对与数据库对接的API进行了全面的测试 -- suhuijun
    * ##### 下午使用React重写后台管理系统UI -- daifang
    * ##### 下午发现nginx的跨域访问问题(已解决,配置nginx.config文件) -- daifang
    * ##### 编写接口文档 -- daifang
* #### 2019-12-4
	* ##### 上午完善各个接口 -- daifang
	* ##### 下午将后台管理系统部署到服务器,并实现Input可输入更改 -- daifang
* #### 2019-12-9
    * ##### 在部分数据库填写了数据
* #### 2019-12-6
    * ##### 晚上完成所有数据接口 -- daifang
* #### 2019-12-7
    * ##### 完成admin的删除和修改信息功能 -- daifang
* #### 2019-12-9
    * ##### 完成所有改数据删数据查询数据功能post接口 -- daifang
* #### 2019-12-9
    * ##### 在部分数据库填写了数据
* #### 2019-12-10 下午 完成用户登录注册及邮箱验证 -- daifang
* #### 20149-12-16 下午 后台管理系统完工 -- daifang
* #### 2019-12-17 发现上传文章图片无法创建 -- daifang (已解决)
    * #### 美化后台管理系统 -- daifang
	* #### 引入animate.css -- daifang
* #### 2019-12-18 修改nginx和express默认上传文件大小限制 -- daifang 
    * #### 完成文章上传接口,图片等资源存放到本地,Base64(支持 png jpg gif jpeg 主流格式) -- daifang 
* #### 2019-12-19 头像上传问题 -- daifang
    * #### 

## 前端进度
* #### 基本完成
* #### 2019-11-25
	* ##### 分配页面
	* ##### 新建登录页面 -- fengfeike
	* ##### 新建主页（动画、卡通、游戏、周边等组件） --zhaoxiaoyu
* #### 2019-11-26
	* ##### 登录页面完成，开始写注册页面 --fengfeike
	* ##### 利用antd组件写框架 --zhaoxiaoyu
* #### 2019-11-27
	* ##### 注册页面完成，开始写个人中心页面 --fengfeike
* #### 2019-11-28
	* ##### 主页框架基本写完 --zhaoxiaoyu
	* ##### 个人中心界面基本完成，开始写历史记录、粉丝、关注界面 -- fengfeike
* #### 2019-11-29
	* ##### 删除antd组件写的框架，开始用表单写框架（方便拿数据） --zhaoxiaoyu
* #### 2019-12-2
	* ##### 调整布局，开始写文章界面 -- zhaoxiaoyu
	* ##### 历史记录、粉丝、关注界面完成，开始写设置界面 --fengfeike
* #### 2019-12-3
	* ##### 设置界面完成，添加收货信息、添加地址页面 --fengfeike
	* ##### 文章界面完成，开始写购物车界面 --zhaoxiaoyu
* #### 2019-12-4
	* ##### 调整各个页面布局 -- zhaoxiaoyu
	* ##### 添加登录注册等界面的路由跳转 --fengfeike
* #### 2019-12-5
	* ##### 开始写添加地址界面的省市联动功能 --fengfeike
	* ##### 调整主页页面功能 --zhaoxiaoyu
* #### 2019-12-6
	* ##### 添加个人中心页面，及相关的路由配置 -- fengfeike
	* ##### 基本完成购物车页面功能，及相关路由配置 --zhaoxiaoyu
* #### 2019-12-8
	* ##### 基本完成收货信息、添加地址页面功能 -- fengfeike
	* ##### 从后台获取 动画、卡通、游戏等数据 --zhaoxiaoyu
* #### 2019-12-9
	* ##### 完成左菜单页面 --fengfeike
	* ##### 配置文章接口，丰富页面功能 --zhaoxiaoyu
* #### 2019-12-10 下午 完成用户登录注册功能 -- daifang
	* ##### 将两个人分别负责的页面整合 -- zhaoxiaoyu fengfeike
	* ##### 从后台获取数据渲染到前端 --zhaoxiaoyu daitianfang
* #### 2019-12-11 
	* ##### 准备动态页面模板 -- fengfeike
	* ##### 从后台获取数据 -- zhaoxiaoyu
* #### 2019-12-12
	* ##### 从后台获取粉丝、关注的数据渲染到界面 --zhaoxiaoyu
	* ##### 写动态的页面框架以及部分功能 --fengfeike
* #### 2019-12-14
	* ##### 动态页面发表功能 --fengfeike
	* ##### 搜索框框架 --zhaoxiaoyu
* #### 2019-12-16
	* ##### 动态页面上传图片功能 --fengfeike
	* ##### 搜索功能对接接口及实现 --zhaoxiaoyu
* #### 2019-12-17
	* ##### 首页轮播图 --fengfeike
	* ##### 文章发布功能与后台对接接口 --zhaoxiaoyu
* #### 2019-12-19
