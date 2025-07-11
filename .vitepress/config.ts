import { defineConfig } from "vitepress";
import { getPosts } from "./theme/serverUtils";

//每页的文章数量
const pageSize = 10;

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  title: "Bingo的备忘库",
  base: isProd ? "/posts/" : "/", // 生产环境下的基础路径
  cacheDir: "./node_modules/vitepress_cache",
  description: "聚沙成塔，智识自生",
  ignoreDeadLinks: true,
  themeConfig: {
    posts: await getPosts(pageSize),
    website: "https://github.com/bgw216/posts", //copyright link
    // 评论的仓库地址 https://giscus.app/ 请按照这个官方初始化后覆盖
    comment: {
      repo: "bgw216/posts",
      repoId: "R_kgDOOzgVfg",
      categoryId: "DIC_kwDOOzgVfs4Cq9fW",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Category", link: "/pages/category" },
      { text: "Archives", link: "/pages/archives" },
      { text: "Tags", link: "/pages/tags" },
      // { text: 'About', link: '/pages/about' }
      // { text: 'Airene', link: 'http://airene.net' }  -- External link test
    ],
    search: {
      provider: "local",
    },
    //outline:[2,3],
    outline: {
      label: "文章摘要",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/bgw216/posts" }],
  } as any,

  srcExclude: isProd
    ? [
        "**/trash/**/*.md", // 排除所有 trash 目录
        "**/draft/**/*.md", // 递归排除子目录
        "**/private-notes/*.md", // 排除特定文件
        "README.md",
      ]
    : ["README.md"],
  vite: {
    //build: { minify: false }
    server: { port: 5000 },
  },
  /*
      optimizeDeps: {
          keepNames: true
      }
      */
});
