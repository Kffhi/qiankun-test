乾坤微服务架构
- main: 主应用 vue3 + vite  Node>=18
- sub: 子应用 vue2 + vue-cli Node<=18

运行两个服务后，分别用http://localhost:3737和http://localhost:3738访问
现在未实现的部分是TestTab.vue中todo部分想要分别加载子应用的Test5.vue和Test6.vue