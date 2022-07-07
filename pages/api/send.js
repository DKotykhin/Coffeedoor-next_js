import axios from "axios";

export default async function handler(req, res) {
    try {
        const TOKEN = process.env.TELEGRAM_TOKEN;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
        if (!TOKEN) {
            throw new Error("Define TOKEN environmental variable");
        }
        if (!CHAT_ID) {
            throw new Error("Define CHAT_ID environmental variable");
        }
        const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
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

        const resp = await axios.post(URL, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
        })

        return res.status(200).json({ name: req.body, resp: resp.data.ok })
    } catch (err) {
        console.log('err', err)
        return res.status(500).json({ err: err.message })
    }
}