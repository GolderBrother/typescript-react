### Typescript + React + travis 打造自动化测试+部署

### 持续集成

#### 一、简述

持续集成服务(Continuous Integration)，简称 CI，是指代码在打包、编译、自动测试、部署等过程中实现持续自动构建的过程，简单说，就是每次打包测试部署可以自动服务或者一键服务。以便减少人工操作量并及时暴露出在此过程中的问题，特别是多人合作开发，优势尤其明显。

#### 二、两者区别

Travis CI 是在线的，采用 yaml 格式，主要方便构建托管在 github 上的代码，不支持其他代码托管服务。

Jenkins CI 是 Java 开发的开源项目，并不直接与 github 关联。Jenkins 只是一个平台，真正运行的都是插件，并且提供了丰富的多语言的插件，安装也非常方便。

 - [参考链接](https://blog.csdn.net/weixin_44135121/article/details/88617861 )
