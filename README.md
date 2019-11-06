## Установка
1) Заходим в папки server, client и с помощью `npm i` устанавливаем пакеты
2) `cd server` и запускаем сервер с помощью команды `nodemon --ignore /sessions/  server.js`
3) `cd client` и запускаем приложение -  `npm start`
4) Сервер и клиент должны быть запущенные вместе. Сервер работает на 5000 порту, а приложение на 3000.
   Доступ к данным с сервера можно получить с помощью `fetch('/api')`. Так же можна зайти на 
   http://localhost:5000/api и увидеть информацию, с http://localhost:3000 - видно не будет. Чтобы 
   с http://localhost:5000 было видно ваш сайт, нужно сбилдить приложение с помощью команды `npm run build`

## Важно!!
Сервер запускаем с флагом игнора директории сессий - `nodemon --ignore /sessions/  server.js`

## Авторизация
1) `cd client` и запускаем билд -  `npm run build`
2) Заходим на http://localhost:5000/login и вводим логин - `admin` и пароль - `xxx44552`, после
аутентификации вас редиректит на http://localhost:5000/admin, для выхода с адмикни зайдите на URL
http://localhost:5000/logout. Без авторизации вас не должно пускать на страницу http://localhost:5000/admin,
ну это если все работает хD)
   
Макет - https://www.figma.com/file/IctmyEcNln7qE6zWPjVr3K/ok_ua_index?node-id=1%3A5   