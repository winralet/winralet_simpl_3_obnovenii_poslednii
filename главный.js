const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const surname = params.get('surname');
const email = params.get('email');
const phone = params.get('phone');
const services = params.get('services');
const backgroundColor = params.get('backgroundColor');
const fontColor = params.get('fontColor');
const headerColor = params.get('headerColor');
const footerColor = params.get('footerColor');
const BlockColor = params.get('BlockColor');
const header_name = params.get('header'); // новое поле
const text = params.get('text');
const me = params.get('me');

// Применяем цвета
document.body.style.backgroundColor = backgroundColor;
document.body.style.color = fontColor;
document.querySelector('header').style.backgroundColor = headerColor; // Цвет заголовка
document.querySelector('footer').style.backgroundColor = footerColor; // Цвет нижнего колонтитула
document.querySelector('.container').style.backgroundColor = BlockColor; // Убедитесь, что селектор правильный


document.getElementById('email').innerText = `Свяжитесь с нами по электронной почте: ${email} или по номеру телефона: ${phone}.`;
document.getElementById('phone').innerText = `© 2024 сайт ${name}. Все права защищены.`;
document.getElementById('services').innerText = `${services}`; // Отображаем услуги
document.getElementById('text').innerText = `${text}`; // Отображаем текст
document.getElementById('header').innerText = header_name;

// Массив с URL-адресами изображений
const images = [
    'me.png',
    'download.jpg',
    '1000022767.jpg',
    'ffff.jpg',
    'ffffff.jpg',
    '1000026433.jpg',
    'images.jpg',
];

// Выбор случайного изображения
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

// Установка изображения в элемент
document.getElementById('randomImage').src = randomImage;

// Применяем цвета для хедера и футера, если они указаны
if (headerColor) {
    document.querySelector('header').style.backgroundColor = headerColor;
}

if (footerColor) {
    document.querySelector('footer').style.backgroundColor = footerColor;
}