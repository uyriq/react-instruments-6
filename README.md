В предыдущем уроке вы добавили изображения с собаками. Теперь нужно стилизовать само приложение. Мы написали несколько глобальных стилей в index.css, они применились сразу ко всему сайту.
Стили шапки прописаны внутри header.module.css. Импортируйте этот файл в компонент Header как модуль. Переменную импорта назовите headerStyles. Затем примените импортированные селекторы для атрибутов className каждого элемента:

    .header — для элемента <header>,
    .title — для элемента <h1>,
    .logo — для элемента <img />.

Используйте ключевое слово import внутри header.js, указав путь к файлу: './header.module.css'.
Далее нужно расставить атрибуты className из переменной headerStyles по инструкции из урока.

Для файла компонента Main мы добавили ещё один CSS-файл — main.module.css. Сам файл main.js мы переписали. Теперь в нём есть несколько текстовых элементов.
Импортируйте CSS-модуль main в компонент Main. Переменную импорта назовите mainStyles. Затем примените импортированные селекторы для атрибутов className каждого элемента:

    .main — для элемента <main>,
    .image — для элемента <img>,
    .title — для элемента <h2>,
    .description — для элемента <p>,
    .caption — для элемента <span>.

Мы забыли написать стили селектора .caption. Но ничего страшного, к дедлайну поправим. Читая документацию, мы внезапно обнаружили в ней ключевое слово composes. Оно идеально подойдёт для решения этой задачи. Используйте composes, чтобы применить стили селектора .description к .caption. И чтобы не было совсем похоже, установите селектору .caption свойство opacity: .6;.

# practicum-react-instruments-6-styles
Created with CodeSandbox
