# 崔中行个人介绍网站

这是一个用于部署到 Vercel 的静态个人品牌网站，使用 Next.js、Tailwind CSS 和 TypeScript 构建。

## 本地运行

推荐使用 pnpm，项目里已经包含 `pnpm-lock.yaml`。

1. 安装依赖

```bash
pnpm install
```

2. 启动本地预览

```bash
pnpm dev
```

3. 打开浏览器访问

```bash
http://localhost:3000
```

## 修改个人信息

所有主要个人信息都集中在：

```bash
src/data/profile.ts
```

可以在这里修改姓名、英文名、邮箱、抖音号、导航、介绍文字、项目、服务和目标。

## 替换头像图片

当前头像文件在：

```bash
public/images/avatar.png
```

替换方法：

1. 把真人头像放进 `public/images` 文件夹。
2. 文件名保持为 `avatar.png`，网站会自动显示。
3. 如果想改文件名，打开 `src/data/profile.ts`，修改 `avatar` 路径。
4. 把这一行：

```ts
avatar: "/images/avatar.png",
```

改成：

```ts
avatar: "/images/your-photo.png",
```

建议头像使用竖版图片，比例接近 4:5，效果会更接近当前设计。

## 构建检查

```bash
pnpm build
```

项目已设置为静态导出，构建成功后会生成 `out` 文件夹。

## 部署到 Vercel

### 方法一：通过 GitHub 部署

1. 在 GitHub 新建一个仓库，例如 `cui-zhongxing-site`。
2. 把本项目上传到这个仓库。
3. 打开 [Vercel](https://vercel.com/) 并登录。
4. 点击 `Add New...`，选择 `Project`。
5. 选择刚才的 GitHub 仓库。
6. Framework Preset 选择 `Next.js`。
7. Build Command 填写 `pnpm build`。
8. Output Directory 填写 `out`。
9. 点击 `Deploy`。

### 方法二：通过 Vercel CLI 部署

```bash
vercel login
pnpm build
vercel deploy out --prod --yes --archive=tgz
```

本项目已经链接到 Vercel 项目 `cui-zhongxing-site` 后，也可以直接运行：

```bash
pnpm deploy
```

## 项目结构

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  AvatarPhoto.tsx
  FadeIn.tsx
  Hero.tsx
  Navbar.tsx
  SectionHeading.tsx
src/
  data/
    profile.ts
public/
  images/
    avatar.png
next.config.mjs
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
postcss.config.mjs
tailwind.config.ts
tsconfig.json
README.md
```
