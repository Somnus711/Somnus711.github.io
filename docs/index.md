---
home: true
# heroImage: /img/web.png
heroText: Haoyuan's blog
tagline: Web个人学习博客，学习是一件快乐的事情。

pageClass: vdoing-index-class

# actionText: 立刻进入 →
# actionLink: /web/
# bannerBg: auto # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

# features: # 可选的
#   - title: 前端
#     details: JavaScript、ES6、Vue框架等前端技术
#     # link: /front/ # 可选
#     imgUrl: /img/index/front.png # 可选
#   - title: 后端
#     details: Java、Web、Spring、Cloud等后端技术
#     # link: /java/
#     imgUrl: /img/index/backEnd.png
#   - title: 文档
#     details: 技术文档、教程、技巧、总结等文章
#     # link: /technology/
#     imgUrl: /img/index/other.png

# bannerBg: https://cdn.jsdelivr.net/gh/Weibw162/image-hosting@dev/%E6%9D%82%E5%BD%95/%E4%BC%8A%E8%95%BE%E9%9B%85.5vklmk9v83o0.webp   # 背景图，长度是整个屏幕

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---

<ClientOnly>
  <WebInfo />
  <IndexBigImg />
  <!-- <Fantasy index="true" /> -->
</ClientOnly>

<script>
// 已经不再使用
/*
触发全屏相关的代码
export default {
  mounted() {
    this.fullScreen();
    // 监听滚动
    window.addEventListener('scroll', () => {
      const index_class = document.getElementsByClassName('vdoing-index-class')[0];
      if(index_class){
        if(document.documentElement.scrollTop == 0){
          this.fullScreen();
        }else{
          this.exitScreen();
        }
      }
   });
  },
  watch: {
    $route(to, from) {
      if (to.path == "/" && Object.keys(this.$route.query).length == 0) {
       // 监听滚动
        window.addEventListener('scroll', () => {
          if(document.documentElement.scrollTop == 0){
            this.fullScreen();
          }else{
            this.exitScreen();
          }
        });
        this.fullScreen();
      }
    },
  },
  methods: {
    // 进入全屏
    fullScreen() {
      var el = document.documentElement;
      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
      if (rfs) {
        rfs.call(el);
      } else if (typeof window.ActiveXObject !== "undefined") {
        // for IE，这里其实就是模拟了按下键盘的 F11，使浏览器全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    },
    // 退出全屏
    exitScreen() {
      var el = document;
      var cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;
      if (cfs) {
        cfs.call(el);
      } else if (typeof window.ActiveXObject !== "undefined") {
        // for IE，这里和 fullScreen 相同，模拟按下 F11 键退出全屏
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript != null) {
          wscript.SendKeys("{F11}");
        }
      }
    }
  },
}
*/

</script>
