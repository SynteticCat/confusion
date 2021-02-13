# 🏫 Coursera

**Курс**: Frontend Development with React  

**Автор**: The Hong Kong University of Science and Technology  

**Темы курса**:  
- Welcome to Front-End Web Development with React
- Full-Stack Web Development: The Big Picture
- Setting up your Development Environment: Git and Node
- Introduction to React
- React Components
- React Router and Single Page Applications
- React Component Types
- React Router
- Single Page Applications
- React Forms, Flow Architecture and Introduction to Redux
- Controlled Forms
- Uncontrolled Forms
- Introduction to Redux
- React Redux Form
- Redux Actions

**Используемые технологии**:  
- [react](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [react-redux](https://react-redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [json-server](https://github.com/typicode/json-server)
- [json](https://www.json.org/json-en.html)
...

**Запуск приложения**

1. Поставить [json-server](https://github.com/typicode/json-server)  
2. В папке server запустить команду:
```bash
json-server --watch db.json --port 3001
```

**Доработка приложения**

1. Выполняем необходимые доработки по принципам  
    1.1.  Весь фукнционал в папку client  
    1.2.  Все данные в папку server
2. В папке client запустить команду:
```bash
npm run build
```
3. Копируем содержимое папки client/build в папку server/public
4. Запускаем приложение

