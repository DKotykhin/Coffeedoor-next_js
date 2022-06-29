import Head from "next/head";

import AboutBlock from "../components/aboutblock/AboutBlock";
import Basket from "../components/basket/Basket";
import CoffeeList from "../components/cataloglist/goodslists/CoffeeList";
import JamList from "../components/cataloglist/goodslists/JamList";
import MillList from "../components/cataloglist/goodslists/MillList";
import TeaList from "../components/cataloglist/goodslists/TeaList";
import NavDrawer from "../components/drawer/Drawer";
import FirstBlock from "../components/firstblock/FirstBlock";
import InfoBlock from "../components/infoblock/InfoBlock";
import ItemList from "../components/itemlist/ItemList";

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    CoffeeDoor - кав'ярня та магазин свіжообсмаженої кави
                </title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="CoffeeDOOR – це кавовий бренд, який по'єднує в собі свіжообсмажену каву рівня Speciality, кращі кавові технології, стильний дизайнерський інтер'єр, швидкий і дружній сервіс"
                />
                <meta keywords="кава в зернах, кавомолка, кофе, кофемолка" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo_192x192.png" />
            </Head>
            <NavDrawer />
            <FirstBlock />
            <InfoBlock />
            <CoffeeList />
            <TeaList />
            <MillList />
            <JamList />
            <ItemList />
            <AboutBlock />
            <Basket />
        </div>
    );
}
