---
title: Замена компонентов темы
icon: customize
category:
  - Продвинутый
tag:
  - Продвинутый
  - Кастомизация
---

Тема импортирует компоненты через псевдоним `alias`, поэтому вы можете использовать его для замены любого компонента темы.

<!-- more -->

## Замена компонентов

Вам необходимо заменить псевдоним компонента, используемый в теме, на опцию `alias` в вашем собственном файле конфигурации VuePress.

::: code-tabs#language

@tab TS

```ts
// .vuepress/config.ts
import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    // конфиг вашей темы здесь
  }),

  alias: {
    // Здесь вы можете перенаправить псевдонимы на свои собственные компоненты
    // Например, здесь мы меняем компонент домашней страницы темы на HomePage.vue под пользователем .vuepress/components
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },
});
```

@tab JS

```js
// .vuepress/config.js
const { path } = require("@vuepress/utils");
const { hopeTheme } = require("vuepress-theme-hope");

module.exports = {
  theme: hopeTheme({
    // конфиг вашей темы здесь
  }),

  alias: {
    // Здесь вы можете перенаправить псевдонимы на свои собственные компоненты
    // Например, здесь мы меняем компонент домашней страницы темы на HomePage.vue под пользователем .vuepress/components
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },
};
```

:::

Вот список псевдонимов.

::: details Псевдоним компонентов темы

Компоненты:

- `@theme-hope/components/AutoLink`: основная ссылка
- `@theme-hope/components/BreadCrumb`: хлебная крошка
- `@theme-hope/components/CommonWrapper`: базовая интеграция макета
- `@theme-hope/components/HomeFeatures`: функции главной страницы
- `@theme-hope/components/HomeHero`: логотип главной страницы и введение
- `@theme-hope/components/HomePage`: главная страница
- `@theme-hope/components/Icon`: иконка
- `@theme-hope/components/MarkdownContent`: контент разметки
- `@theme-hope/components/NormalPage`: обычная страница
- `@theme-hope/components/PageFooter`: футер страницы
- `@theme-hope/components/PageNav`: навигация страницы
- `@theme-hope/components/PageTitle`: заголовок страницы
- `@theme-hope/components/SkipLink`: перейти к основному содержанию

Разное:

- `@theme-hope/components/icons`: иконки темы
- `@theme-hope/components/transitions`: переводы темы
- `@theme-hope/composables`: Composition API темы
- `@theme-hope/utils`: служебные функции темы

:::

::: details Псевдоним компонента панели навигации

Компоненты:

- `@theme-hope/modules/navbar/components/DropdownLink`: выпадающий список
- `@theme-hope/modules/navbar/components/LanguageDropdown`: выпадающий список языков
- `@theme-hope/modules/navbar/components/NavActions`: функции панели навигации
- `@theme-hope/modules/navbar/components/Navbar`: панель навигации
- `@theme-hope/modules/navbar/components/NavbarBrand`: информация о бренде навигационной панели
- `@theme-hope/modules/navbar/components/NavbarLinks`: ссылки на панели навигации
- `@theme-hope/modules/navbar/components/NavScreen`: экран навигации в мобильном представлении
- `@theme-hope/modules/navbar/components/NavScreenDropdown`: выпадающее меню мобильной панели навигации
- `@theme-hope/modules/navbar/components/NavScreenLinks`: ссылки для мобильного просмотра на панели навигации
- `@theme-hope/modules/navbar/components/RepoLink`: ссылка на репозиторий
- `@theme-hope/modules/navbar/components/ToggleNavbarButton`: кнопка переключения панели навигации
- `@theme-hope/modules/navbar/components/ToggleSidebarButton`: кнопка переключения боковой панели

Разное:

- `@theme-hope/modules/navbar/components/icons`: иконки панели навигации
- `@theme-hope/modules/navbar/composables`: Composition API панели навигации

:::

::: details Псевдоним компонента боковой панели

Компоненты:

- `@theme-hope/modules/sidebar/components/Sidebar`: боковая панель
- `@theme-hope/modules/sidebar/components/SidebarChild`: элемент ссылки на боковой панели
- `@theme-hope/modules/sidebar/components/SidebarGroup`: группировка ссылок на боковой панели
- `@theme-hope/modules/sidebar/components/SidebarLinks`: ссылки на боковой панели

Разное:

- `@theme-hope/modules/sidebar/composables`: Composition API боковой панели
- `@theme-hope/modules/sidebar/utils`: утилитарные функции боковой панели

:::

::: details Псевдоним компонента информационного модуля

Компоненты:

- `@theme-hope/modules/info/components/AuthorInfo`: информация об авторе
- `@theme-hope/modules/info/components/CategoryInfo`: информация о категории
- `@theme-hope/modules/info/components/DateInfo`: информация о дате
- `@theme-hope/modules/info/components/OriginalMark`: оригинальное выделение
- `@theme-hope/modules/info/components/PageInfo`: информация о странице
- `@theme-hope/modules/info/components/PageMeta`: метаинформация страницы
- `@theme-hope/modules/info/components/PageViewInfo`: информация о просмотрах страниц
- `@theme-hope/modules/info/components/ReadingTimeInfo`: информация о времени чтения
- `@theme-hope/modules/info/components/TagInfo`: информация тега
- `@theme-hope/modules/info/components/TOC`: оглавление
- `@theme-hope/modules/info/components/WordInfo`: информация о слове

Разное:

- `@theme-hope/modules/blog/components/icons`: информация об иконках
- `@theme-hope/modules/blog/composables`: Composables API информации
- `@theme-hope/modules/blog/utils`: информационные служебные функции

:::

::: details Псевдоним компонента модуля блога

Компоненты:

- `@theme-hope/modules/blog/components/ArticleItem`: элемент статьи
- `@theme-hope/modules/blog/components/ArticleList`: список статей
- `@theme-hope/modules/blog/components/ArticleType`: тип статьи
- `@theme-hope/modules/blog/components/BloggerInfo`: информация о блогере
- `@theme-hope/modules/blog/components/BlogHero`: логотип главной страницы блога и введение
- `@theme-hope/modules/blog/components/BlogHome`: домашняя страница блога
- `@theme-hope/modules/blog/components/BlogPage`: обычная страница блога
- `@theme-hope/modules/blog/components/CategoryList`: список категорий
- `@theme-hope/modules/blog/components/InfoList`: список информации о блоге
- `@theme-hope/modules/blog/components/InfoPanel`: информационная панель блога
- `@theme-hope/modules/blog/components/Pagination`: нумерация страниц
- `@theme-hope/modules/blog/components/ProjectPanel`: панель проекта на главной странице блога
- `@theme-hope/modules/blog/components/SocialMedia`: ссылки на социальные сети
- `@theme-hope/modules/blog/components/TagList`: список тегов
- `@theme-hope/modules/blog/components/TimelineItems`: элементы временной шкалы
- `@theme-hope/modules/blog/components/TimelineList`: список временной шкалы

Разное:

- `@theme-hope/modules/blog/components/icons`: иконки блогов
- `@theme-hope/modules/blog/composables`: Composables API блога

:::

::: details Псевдоним компонента модуля шифрования

Компоненты:

- `@theme-hope/modules/encrypt/components/GlobalEncrypt`: глобальная оболочка шифрования
- `@theme-hope/modules/encrypt/components/LocalEncrypt`: локальная оболочка шифрования
- `@theme-hope/modules/encrypt/components/PasswordModal`: поле ввода пароля

Разное:

- `@theme-hope/modules/encrypt/composables`: Composition API шифрования
- `@theme-hope/modules/encrypt/utils`: функции утилиты шифрования

:::

::: details Псевдоним компонента модуля внешнего вида

- `@theme-hope/modules/outlook/components/AppearanceMode`: режим темы
- `@theme-hope/modules/outlook/components/AppearanceSwitch`: переключатель внешнего вида темы
- `@theme-hope/modules/outlook/components/OutlookButton`: кнопка появления
- `@theme-hope/modules/outlook/components/OutlookSettings`: настройки внешнего вида
- `@theme-hope/modules/outlook/components/ThemeColor`: цвет темы
- `@theme-hope/modules/outlook/components/ThemeColorPicker`: выбор цвета темы
- `@theme-hope/modules/outlook/components/ToggleFullScreenButton`: кнопка переключения в полноэкранный режим

Разное:

- `@theme-hope/modules/outlook/components/icons`: иконки внешнего вида
- `@theme-hope/modules/outlook/composables`: Composition API внешнего вида

:::

## Использование слотов

Некоторые компоненты предоставляют слоты, в этом случае вы можете напрямую импортировать исходный компонент при переопределении компонента и передавать нужный вам контент через слот.

Например, если ваш сайт имеет сильные социальные атрибуты и вы хотите отобразить поле для комментариев на главной странице, вы можете отобразить его следующим образом:

::: code-tabs

@tab config.ts

```ts
// .vuepress/config.ts
import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    // конфиг вашей темы здесь
  }),

  alias: {
    // Здесь вы можете указать псевдонимы для ваших собственных компонентов
    // Например, здесь мы меняем компонент домашней страницы темы на HomePage.vue под пользователем .vuepress/components
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },
});
```

@tab HomePage.vue

```vue
<template>
  <HopeHomePage>
    <!-- Введите компонент комментария, используя нижний слот -->
    <template #bottom>
      <CommentService />
    </template>
  </HopeHomePage>
</template>
<script setup lang="ts">
import HopeHomePage from "vuepress-theme-hope/lib/client/components/HomePage";
</script>
```

:::

Компоненты, предоставляющие слоты, следующие:

**тема**:

- `AutoLink`: `default`, `before`, `after`
- `CommonWrapper`: `default`, `navbarLeftStart`, `navbarLeftEnd`, `navbarCenterStart`, `navbarCenterEnd`, `navbarRightStart`, `navbarRightEnd`, `navScreenTop`, `navScreenBottom`, `sidebar`, `sidebarTop`, `sidebarBottom`
- `HomeHero`: `heroImage`, `heroInfo`
- `HomePage`: `top`, `center`, `bottom`
- `NormalPage`: `top`, `contentBefore`, `contentAfter`, `bottom`

**Панель навигации**:

- `DropdownLink`: `title`
- `NavActions`: `before`, `after`
- `Navbar`: `left`, `center`, `right`
- `NavbarBrand`: `default`
- `NavScreen`: `before`, `after`
- `NavScreenDropdown`: `before`, `after`

**Боковая панель**:

- `Sidebar`: `top`, `default`, `bottom`

**Блог**:

- `BlogHero`: `heroImage`, `heroInfo`

::: tip

Соответствующее расположение и функции каждого слота смотрите в [исходном коде темы](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client/).

:::
