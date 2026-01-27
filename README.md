# Сайт ИП Кулинкович М.Н.

Сайт для индивидуального предпринимателя, предлагающего услуги по электромонтажным работам, системам отопления, водоснабжения, вентиляции и проектированию инженерных сетей.

## Установка и запуск

### Установка зависимостей

```bash
npm install
```

### Карта (Мы работаем)

Карта городов Минской области использует **Leaflet + OpenStreetMap**. API-ключ не требуется.

### Запуск в режиме разработки

```bash
npm run dev
```

Сайт будет доступен по адресу `http://localhost:5173`

### Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут находиться в папке `dist`

### Просмотр собранной версии

```bash
npm run preview
```

## Деплой на Heroku

### Предварительные требования

1. Установите [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. Войдите в аккаунт Heroku:
```bash
heroku login
```

3. Создайте приложение на Heroku:
```bash
heroku create energysystem-by
```
Или создайте через [Heroku Dashboard](https://dashboard.heroku.com/new-app)

### Деплой на Heroku

1. Убедитесь, что проект в Git репозитории:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Добавьте Heroku remote:
```bash
heroku git:remote -a energysystem-by
```

3. Задеплойте:
```bash
git push heroku master
```
Или используйте скрипт:
```bash
npm run deploy:heroku
```

4. После успешного деплоя сайт будет доступен по адресу:
`https://energysystem-by.herokuapp.com`

### Настройка кастомного домена на Heroku

1. В [Heroku Dashboard](https://dashboard.heroku.com/apps/energysystem-by/settings) найдите раздел "Domains"
2. Нажмите "Add domain" и введите `energysystem.by`
3. Heroku предоставит DNS target: `quiet-elder-5s03xcsahn4v8t04me71knmk.herokudns.com`

4. **В панели hoster.by обновите DNS записи:**

   **Вариант 1: ALIAS/ANAME запись (рекомендуется, если поддерживается):**
   ```
   Тип: ALIAS или ANAME
   Имя: @ (или пустое)
   Значение: quiet-elder-5s03xcsahn4v8t04me71knmk.herokudns.com
   TTL: 3600
   ```

   **Вариант 2: CNAME запись (если ALIAS не поддерживается):**
   ```
   Тип: CNAME
   Имя: @ (или пустое)
   Значение: quiet-elder-5s03xcsahn4v8t04me71knmk.herokudns.com
   TTL: 3600
   ```
   
   **Важно:** Удалите старые A записи для Firebase (199.36.158.100) и TXT записи!

5. Для поддомена www добавьте CNAME запись:
   ```
   Тип: CNAME
   Имя: www
   Значение: quiet-elder-5s03xcsahn4v8t04me71knmk.herokudns.com
   TTL: 3600
   ```

6. **SSL сертификат:** Heroku автоматически выдаст SSL сертификат через 15-60 минут после правильной настройки DNS. Сертификат действителен до 2026-04-26.

### Обновление сайта на Heroku

После внесения изменений:
```bash
git add .
git commit -m "Update site"
git push heroku master
```

## Деплой на Firebase Hosting (старый способ)

### Предварительные требования

1. Установите зависимости проекта (firebase-tools уже включен):
```bash
npm install
```

2. Войдите в аккаунт Firebase:
```bash
npx firebase login
```

3. Создайте проект на [Firebase Console](https://console.firebase.google.com/)

4. Инициализируйте Firebase в проекте (если еще не сделано):
```bash
npx firebase init hosting
```
   - Выберите существующий проект или создайте новый
   - Public directory: `dist`
   - Single-page app: `Yes`
   - Automatic builds: `No` (можно настроить позже)

5. Обновите `.firebaserc` файл с ID вашего проекта:
   - Замените `your-project-id` на реальный ID вашего Firebase проекта

### Деплой

Для деплоя выполните:
```bash
npm run deploy
```

Или пошагово:
```bash
npm run build
npx firebase deploy --only hosting
```

После успешного деплоя сайт будет доступен по адресу:
`https://your-project-id.web.app` или `https://your-project-id.firebaseapp.com`

### Настройка кастомного домена

Для подключения домена `energysystem.by` к Firebase Hosting:

#### Шаг 1: Добавление домена в Firebase Console

1. Откройте [Firebase Console](https://console.firebase.google.com/project/site-electro-fbee2/hosting)
2. Перейдите в раздел **Hosting**
3. Нажмите кнопку **"Add custom domain"** или **"Добавить домен"**
4. Введите домен: `energysystem.by`
5. Нажмите **"Continue"** или **"Продолжить"**

#### Шаг 2: Настройка DNS записей в hoster.by

Firebase предоставит вам DNS записи, которые нужно добавить. Для домена `energysystem.by` нужно добавить:

**Запись 1: A запись (для корневого домена)**
```
Тип: A
Имя: @ (или пустое поле, или energysystem.by)
Значение: 199.36.158.100
TTL: 3600 (или автоматически)
```

**Запись 2: TXT запись (для верификации домена)**
```
Тип: TXT
Имя: @ (или пустое поле, или energysystem.by)
Значение: hosting-site=site-electro-fbee2
TTL: 3600 (или автоматически)
```

**Важно:** Обе записи должны быть добавлены! TXT запись необходима для верификации владения доменом.

#### Шаг 3: Настройка в панели hoster.by

1. Войдите в панель управления доменом на [hoster.by](https://hoster.by)
2. Найдите раздел **"DNS управление"** или **"Управление DNS"** или **"DNS записи"**
3. Добавьте **ОБЕ** записи:

   **Запись A:**
   - Тип: `A`
   - Имя/Хост: `@` (или оставьте пустым, или `energysystem.by`)
   - Значение/Адрес: `199.36.158.100`
   - TTL: `3600` (или по умолчанию)

   **Запись TXT:**
   - Тип: `TXT`
   - Имя/Хост: `@` (или оставьте пустым, или `energysystem.by`)
   - Значение/Текст: `hosting-site=site-electro-fbee2`
   - TTL: `3600` (или по умолчанию)

4. **Сохраните изменения**

**Примечание:** В некоторых панелях hoster.by поле "Имя" может называться "Хост" или "Поддомен". Для корневого домена используйте `@` или оставьте пустым.

#### Шаг 4: Ожидание верификации

- DNS изменения могут занять от нескольких минут до 48 часов
- Firebase автоматически проверит настройки и выдаст SSL сертификат
- После верификации домен будет доступен по адресу `https://energysystem.by`

#### Решение ошибки ERR_CERT_COMMON_NAME_INVALID

Если вы видите ошибку `ERR_CERT_COMMON_NAME_INVALID` или "Your connection is not private":

**Причина:** SSL сертификат еще не выдан для кастомного домена, хотя DNS уже настроен.

**Решение:**

1. **Проверьте статус домена в Firebase Console:**
   - Откройте [Firebase Console → Hosting → Domains](https://console.firebase.google.com/project/site-electro-fbee2/hosting/domains)
   - Найдите домен `energysystem.by`
   - Проверьте статус:
     - ✅ **"Connected"** (зеленый) - домен подключен, SSL выдан
     - ⏳ **"Provisioning"** (желтый) - идет процесс выдачи SSL (подождите 15-60 минут)
     - ❌ **"Failed"** (красный) - ошибка, нужно проверить DNS

2. **Если статус "Provisioning":**
   - Подождите 15-60 минут (обычно SSL выдается автоматически)
   - Обновите страницу в браузере через некоторое время
   - Очистите кеш браузера: `Ctrl+Shift+Delete` (Windows) или `Cmd+Shift+Delete` (Mac)

3. **Если статус "Failed" или долго "Provisioning":**
   - Проверьте DNS записи в hoster.by - они должны точно совпадать с теми, что показал Firebase
   - Убедитесь, что прошло достаточно времени для распространения DNS (может занять до 48 часов)
   - Попробуйте удалить домен в Firebase и добавить заново

4. **Проверка DNS записей:**
   ```bash
   # Проверка A записей
   nslookup energysystem.by
   dig energysystem.by A
   ```
   Должен вернуться IP адрес Firebase (например, 199.36.158.100)

5. **Временное решение (НЕ рекомендуется для продакшена):**
   - Можно временно использовать домен Firebase: `https://site-electro-fbee2.web.app`
   - Или дождаться выдачи SSL сертификата (обычно 15-60 минут после правильной настройки DNS)

#### Полезные команды для проверки DNS:

```bash
# Проверка A записей
nslookup energysystem.by

# Проверка через dig
dig energysystem.by A
```

**Важно:** После добавления домена в Firebase Console, обязательно скопируйте точные DNS записи, которые Firebase предоставит - они могут отличаться для каждого проекта!

## Структура проекта

- `src/components/` - React компоненты (Header, Navigation, Footer)
- `src/pages/` - Страницы сайта:
  - Home - Главная страница
  - Electromontage - Электромонтажные работы
  - ElectroHeating - Электроотопление
  - SmartHome - Умный дом
  - HeatingWaterSupply - Отопление и водоснабжение
  - Ventilation - Вентиляция
  - EngineeringDesign - Проектирование инженерных сетей
  - Contacts - Контакты

## Добавление изображения свидетельства

Для отображения свидетельства о регистрации ИП необходимо:

1. Разместить изображение свидетельства в папке `public/`
2. Назвать файл `certificate.jpg`

Если изображение отсутствует, на странице контактов будет отображена текстовая информация о регистрации.

## Настройка Firebase Firestore для формы заказа звонка

Для работы формы "Заказать звонок" необходимо настроить Firebase Firestore:

1. Откройте [Firebase Console](https://console.firebase.google.com/)
2. Выберите ваш проект `site-electro-fbee2`
3. Перейдите в раздел "Firestore Database" (в левом меню)
4. Нажмите "Create database"
5. Выберите режим "Start in test mode" (для начала можно использовать тестовый режим)
6. Выберите регион для базы данных и нажмите "Enable"

**Чтобы получить конфигурацию Firebase:**

7. В левом верхнем углу Firebase Console нажмите на **иконку шестеренки (⚙️)** рядом с "Project Overview"
8. Выберите **"Project settings"** из выпадающего меню
9. Прокрутите страницу вниз до раздела **"Your apps"**
10. Если у вас еще нет веб-приложения, нажмите **"Add app"** → выберите **иконку Web (</>)** 
11. Введите название приложения (например, "sanya-site") и нажмите "Register app"
12. Скопируйте конфигурацию Firebase, которая появится на экране (она выглядит так):
    ```javascript
    const firebaseConfig = {
      apiKey: "AIza...",
      authDomain: "site-electro-fbee2.firebaseapp.com",
      projectId: "site-electro-fbee2",
      storageBucket: "site-electro-fbee2.appspot.com",
      messagingSenderId: "439607205711",
      appId: "1:439607205711:web:..."
    };
    ```

13. Откройте файл `src/components/firebase-config.js` в вашем проекте
14. Замените значения в `firebaseConfig` на скопированные из Firebase Console:
   - `apiKey` - скопируйте из конфигурации
   - `authDomain` - уже должно быть `site-electro-fbee2.firebaseapp.com`
   - `projectId` - уже указан `site-electro-fbee2`
   - `storageBucket` - уже указан `site-electro-fbee2.appspot.com`
   - `messagingSenderId` - уже указан `439607205711`
   - `appId` - скопируйте из конфигурации

9. Настройте правила безопасности Firestore:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /callOrders/{document=**} {
      allow read, write: if true; // Для продакшена настройте безопасные правила
    }
  }
}
```

Заявки будут сохраняться в коллекции `callOrders` с полями:
- `name` - имя клиента
- `contact` - телефон или email
- `message` - сообщение
- `createdAt` - дата создания
- `status` - статус заявки (по умолчанию 'new')

Вы можете просматривать заявки в Firebase Console в разделе Firestore Database.

## Технологии

- React 18
- Vite
- CSS3
- Firebase Firestore (для сохранения заявок)

