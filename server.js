import express from 'express'; //для створення веб-сервера
import minimist from 'minimist'; // для аналізу аргументів командного рядка.

const app = express(); //створює екземпляр Express і призначає його змінній
const port = 3000; //вказує номер порту для прослуховування веб-сервера

//аналізує аргументи командного рядка за допомогою пакета Minimist
// і призначає результат змінній під назвою argv

const argv = minimist(process.argv.slice(2), {
  alias: {
    i: 'interval',
    t: 'time',
  },
  default: {
    interval: 1000,
    time: 5000,
  },
});

// призначає інтервал і тривалість виведення консолі змінній за замовчуванням 
const consoleInterval = argv.interval || process.env.CONSOLE_INTERVAL || 1000;
const duration = argv.time || process.env.DURATION || 5000;

//починається інтервал виведення консолі за допомогою setInterval, 
//який записує поточний час на консоль кожні consoleInterval мілісекунди.

const consoleOutputInterval = setInterval(() => {
  console.log(new Date().toUTCString());
}, consoleInterval);

//встановлює тайм-аут за допомогою setTimeout для виконання функції зворотного
//виклику після закінчення тривалості в мілісекундах

setTimeout(() => {
  clearInterval(consoleOutputInterval); //очищає інтервал виведення консолі за допомогою clearInterval.



////становлює маршрут для кореневої URL-адреси (/) за допомогою app.get,  який надсилає поточний час як відповідь клієнт  
  app.get('/', (req, res) => {  
    const currentTime = new Date().toUTCString();
    res.send(currentTime);
  });


  app.listen(port, () => {
    console.log(`Сервер прослуховується на http://localhost:${port}`);
  });
}, duration);
