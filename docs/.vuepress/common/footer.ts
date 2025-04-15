interface Footer {
  createYear: number; // 博客创建年份
  copyrightInfo: string; // 博客版权信息，支持 a 标签
}

export default <Footer>{
  // 页脚信息
  createYear: 2021, // 博客创建年份
  copyrightInfo: `Somnus Haoyuan | <a href="https://github.com/Somnus711/Somnus711.github.io/blob/main/LICENSE" target="_blank">MIT
            License</a><br />
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802034042"
            style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img
                src="https://cdn.jsdelivr.net/gh/Somnus711/picx-image-hosting@master/blog-pic/备案图标.3ph98jsceq0w.webp" style="float:left;" />
            <span>京公网安备 11010802034042号</span>
        </a>
        <a target="_blank" href="https://beian.miit.gov.cn"
            style="display:inline-block;text-decoration:none;height:20px;line-height:20px;padding-left: 10px;">
            <span>京ICP备2025120692号-1</span></a>`, // 博客版权信息，支持a标签
};
