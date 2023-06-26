# 上海大学课程号解析

### shu-course-number-parser

[![downloads](https://img.shields.io/npm/dm/shu-course-number-parser)](https://www.npmjs.com/package/shu-course-number-parser)
[![npm](https://img.shields.io/npm/v/shu-course-number-parser)](https://www.npmjs.com/package/shu-course-number-parser)
[![GitHub](https://img.shields.io/github/license/ENDsoft233/shu-course-number-parser)](https://github.com/ENDsoft233/shu-course-number-parser/blob/master/LICENSE)

这个项目提供了一个用于解析上海大学课程号的 JavaScript 库，根据 《2022 级计算机工程与科学学院教学一览》 编制。

## TODO

- [x] 解析课程号

- [ ] 反向解析课程号

- - [ ] 提供学院、专业列表
- - [ ] 提供课程属性列表
- - [ ] 返回可以匹配特定列表项的正则表达式

## 安装

您可以使用以下命令通过 npm 或 yarn 安装：

```
npm install shu-course-number-parser
```

```
yarn add shu-course-number-parser
```

## 使用

1. 您需要先引入本包：

```ts
import { getCourseInfo } from 'shu-course-number-parser';
```

2. 然后您就可以使用 `getCourseInfo` 方法来解析课程号，例如：

```ts
getCourseInfo('0830A030'); // 返回 '计算机工程与科学学院计算机科学与技术实践环节课程'
```

## 贡献

如果您想为本项目做出贡献，可以按照以下步骤进行：

1. 克隆本项目

```
git clone https://github.com/ENDsoft233/shu-course-number-parser.git
```

2. 使用 `Yarn` 安装相关依赖

```
yarn install
```

3. 修改代码并添加测试。

4. 在提交代码之前，请确保您已经进行了代码格式化和测试：

```
yarn lint
yarn format
yarn test
```

5. 提交 PR 至本项目，并等待审核。
