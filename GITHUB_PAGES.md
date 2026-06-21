# GitHub Pages 部署说明

这个项目已经适配 GitHub Pages。发布后的默认地址通常是：

```text
https://你的GitHub用户名.github.io/cui-zhongxing-site/
```

## 费用

GitHub Pages 对公开仓库免费。

## 是否需要备案

不需要备案，因为 GitHub Pages 不使用中国大陆服务器或大陆 CDN。

## 注意

GitHub Pages 在中国大陆不保证稳定。它通常比 `vercel.app` 更容易被打开一些，但仍可能受网络环境影响。

## 发布方式

本项目使用 `gh-pages` 分支发布静态文件：

1. 本地构建生成 `out` 文件夹。
2. 把 `out` 文件夹内容推送到 `gh-pages` 分支。
3. GitHub Pages 从 `gh-pages` 分支根目录发布。
