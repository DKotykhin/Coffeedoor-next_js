import axios from "axios";

export default function handler(req, res) {
    const TOKEN = process.env.TELEGRAM_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    let message = `<b>Заявка з сайту</b>\n`;
    let itemSum = 0;
    req.body.forEach((item) => {
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
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${message}`;

    // axios.post(URL, {
    //     chat_id: CHAT_ID,
    //     parse_mode: "html",
    //     text: message,
    // }).catch(error => {
    //     console.log(error.message);
    // });
    async function postData(url = '') {
        const response = await fetch(url, {
            method: 'POST',

        });
        return await response.json(); // parses JSON response into native JavaScript objects
    }

    postData(URL)
        .then((data) => {
            console.log(data); // JSON data parsed by `response.json()` call
        });

    res.status(200).json({ name: req.body })
}