# Шаблон лендінгу курсу

Готовий каркас одностторінкового лендінгу (як у референсі): hero з таймером,
блок про автора, цільова аудиторія, метод, доказ, що входить, гарантія,
програма-акордеон, фінальний CTA.

## Структура файлів

```
index.html      — розмітка та весь контент (зараз плейсхолдери)
css/style.css   — стилі (темна тема, адаптив)
js/script.js    — таймер зворотного відліку
assets/         — зображення (зараз усі — заглушка placeholder.svg)
```

## Що замінити перед публікацією

1. **Текст** — увесь контент в `index.html` зараз плейсхолдер (заголовки,
   ціни, опис програми тощо). Просто відредагуйте текст прямо у файлі.
2. **Зображення** — покладіть свої фото/скріни в `assets/` і замініть
   `src="assets/placeholder.svg"` на назви ваших файлів.
3. **Дедлайн таймера** — атрибут `data-deadline` в `index.html`
   (два місця: `#timer` і `#timer-2`), формат `YYYY-MM-DDTHH:MM:SS`.
4. **Форма заявки** — GitHub Pages не має бекенду. У секції `#cta-form`
   замініть кнопку/лінк на форму зі стороннього сервісу (Google Forms,
   Tally, Getform, Telegram-бот через webhook тощо).
5. **Favicon / OG-картинка** — додайте `assets/favicon.png` і
   `assets/og-image.jpg`, на які вже є посилання в `<head>`.

## Як подивитись локально

Просто відкрийте `index.html` подвійним кліком у браузері, або якщо є Python:

```bash
python3 -m http.server 8000
```

і відкрийте `http://localhost:8000`.

## Публікація на GitHub Pages (щоб сайт був доступний за посиланням)

### 1. Створіть репозиторій на GitHub

Зайдіть на [github.com](https://github.com) → **New repository** →
задайте назву (наприклад `course-landing`) → **Create repository**.
Можна одразу як публічний.

### 2. Завантажте туди файли

Якщо у вас ще немає git у цій папці, виконайте в терміналі, знаходячись
у папці проєкту:

```bash
git init
git add .
git commit -m "Initial landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/course-landing.git
git push -u origin main
```

Замініть `USERNAME` та назву репозиторію на свої.

Якщо не хочете користуватись терміналом — на сторінці репозиторію
натисніть **Add file → Upload files** і перетягніть туди всі файли й
папки (`index.html`, `css/`, `js/`, `assets/`).

### 3. Увімкніть GitHub Pages

У репозиторії відкрийте **Settings → Pages** (у лівому меню).
У розділі **Build and deployment → Source** оберіть **Deploy from a branch**,
гілку `main`, папку `/ (root)` → **Save**.

### 4. Дочекайтесь публікації

Через 1–2 хвилини вгорі сторінки Pages зʼявиться посилання виду:

```
https://USERNAME.github.io/course-landing/
```

Це і є публічна адреса вашого сайту — її можна давати людям.

### 5. (Опційно) Власний домен

Якщо є свій домен: створіть у корені репозиторію файл `CNAME` з вмістом
вашого домену (наприклад `course.example.com`), і у налаштувань домену
додайте CNAME-запис, що вказує на `USERNAME.github.io`. Детальніше:
[docs.github.com/pages/configuring-a-custom-domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Після будь-яких змін

Щоб оновити вже опублікований сайт — просто закомітьте і запуште зміни
знову:

```bash
git add .
git commit -m "Update content"
git push
```

Сайт на `github.io` оновиться автоматично протягом хвилини-двох.
