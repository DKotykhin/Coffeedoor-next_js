import axios from "axios";

export const SendData = (data) => {
    const TOKEN = process.env.REACT_APP_TELEGRAM_TOKEN;
    const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
    let message = `<b>Заявка з сайту</b>\n`;
    let itemSum = 0;
    data.forEach((item) => {
        if ('phone' in item) {
            message += `<b>Відправник: </b>${item.name}\n`;
            message += `<b>Телефон: </b>${item.phone}\n`;
            message += `<b>Спосіб доставки: </b>${item.delivery}\n`;
            message += `<b>Коментар: </b>${item.text ? item.text : ''}\n`;
            message += `<b>Заказ: </b>\n`;
        }
        if ('title' in item) {
            itemSum += +item.price;
            message += `${item.title} ${item.name} ${item.quantity} x ${item.price} грн\n`;
        }
    });
    message += `<b>Всього на сумму: </b>${itemSum} грн`;

    axios.post(URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
    }).catch(error => {
        console.log(error.message);
    });
}