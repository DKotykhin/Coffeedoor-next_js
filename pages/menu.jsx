import Head from 'next/head';

import Accordeon from "../components/accordeon/Accordeon";
import TitleBlock from "../components/titleblock/TitleBlock";

const MenuPage = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="Меню кав'ярні" />
                <title>Меню кав'ярні</title>
            </Head>
            <TitleBlock />
            <Accordeon />
            
        </div>
    );
};

export default MenuPage;