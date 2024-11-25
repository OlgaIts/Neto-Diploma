## Дипломная работа к профессии Frontend-разработчик «Система бронирования ж/д билетов»

### Краткое описание задачи дипломной работы

Создать SPA на React для сервиса покупки билетов на ж/д, свёрстанное по [макетам в Figma](https://www.figma.com/file/7981GjEsjSpBUKolk4xFoT/%D0%97%D0%B0%D0%BA%D0%B0%D0%B7-%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D0%BE%D0%B2?node-id=0%3A1), в котором в качестве API используется [внешний сервер](https://students.netoservices.ru/fe-diplom/).

### Архитектурная методология:

В разработке приложения использована архитектура Feature-Sliced Design ([FSD](https://feature-sliced.design/ru/)), обеспечивающая модульность и структурированность проекта.

## Структура проекта

```
├── public
├── src
│   ├── app
│   │   ├── providers
│   │   │  ├── StoreProvider
│   │   │  │   ├──store.ts
│   │   ├──router
│   │   │  ├──mainRouter.tsx
│   │   ├──styles
│   │   │  ├──_mixins.scss
│   │   │  ├──global.scss
│   │   │  ├──index.scss
│   │   │  ├──vars.scss
│   │   ├──App.tsx
│   ├── entities
│   │   ├── Component
│   │   │  ├── hooks
│   │   │  ├── lib
│   │   │  ├── model
│   │   │  ├── ui
│   │   │  │  ├── Component
│   │   │  │  │  ├──Component.module.scss
│   │   │  │  │  ├──Component.tsx
│   │   │  ├──index.ts
│   ├── features
│   │   ├── Component
│   │   │  ├── hooks
│   │   │  ├── lib
│   │   │  ├── model
│   │   │  ├── ui
│   │   │  │  ├── Component
│   │   │  │  │  ├──Component.module.scss
│   │   │  │  │  ├──Component.tsx
│   │   │  ├──index.ts
│   ├── pages
│   │   ├── Component
│   │   │  ├── ui
│   │   │  │  ├──Component.module.scss
│   │   │  │  ├──Component.tsx
│   │   │  ├──index.ts
│   ├── shared
│   │   ├── assets
│   │   ├── consts
│   │   ├── lib
│   │   │   ├── hooks
│   │   │   ├── utils
│   │   ├── types
│   │   ├── ui
│   │   │  ├── Component
│   │   │  │  ├──Component.module.scss
│   │   │  │  ├──Component.tsx
│   │   │  │  ├──index.ts
│   ├── widgets
│   │   ├── Component
│   │   │  ├── hooks
│   │   │  ├── lib
│   │   │  ├── model
│   │   │  ├── ui
│   │   │  │  ├── Component
│   │   │  │  │  ├──Component.module.scss
│   │   │  │  │  ├──Component.tsx
│   │   │  ├──index.ts
│   │──main.tsx
├──.eslintrc.cjs
├──.gitignore
├──.prettierignore
├──index.html
├──package.json
├──README.md
├──tsconfig.json
├──vite.config.ls

```

#### Установлены пакеты:

react-alice-carousel - карусель отзывов на главной странице \
react-scroll - для улучшения функциональности прокрутки \
react-paginate - пагинация \
react-datepicker - календарь \
classnames - для динамического управления классами CSS \
moment - для работы с датами и временем \
uuid - для генерации уникальных идентификаторов \
react-hook-form - для управления состоянием форм \
axios - для выполнения HTTP-запросов \
@reduxjs/toolkit - для управления состоянием \
zod - для валидации данных

Подключен иконочный шрифт через сервис icomoon.io

### Содержание

Главная страница
Страница поиска направлений
Страница выбора посадочного места в вагоне
Страница пассажира
Страница оплаты
Страница подтверждения заказа
Страница успешного заказа
Страница 404
