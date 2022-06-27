import Head from 'next/head';
import ThanksBlock from "/components/thanks/ThanksBlock";

const ThanksPage = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="Дякуємо за замовлення" />
                <title>Дякуємо за замовлення</title>
            </Head>            
            <ThanksBlock/>
        </div>
    );
};

export default ThanksPage;