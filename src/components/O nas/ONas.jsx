import React from 'react';
import classes from './ONas.module.css'
import fotoGlowne from "../Assets/img/GlowneONas.jpg";
import fotoHistoryja from "../Assets/img/IMG_4944.JPG";
import fotoHistoryja2 from "../Assets/img/Willa-Bałandówka.jpg";
import MyFooter from "../Footer/MyFooter";
import {MyHeader} from "../Heder/Heder";

const AboutUs = () => {
    return (
        <>

            <MyHeader title={'o nas'} description={'Zobacz naszą historię'} arrayOfPhotos={[fotoGlowne]}/>

            <div className={classes.naglowek1}>BAŁANDÓWKA - to twoje przytulne miejsce wypoczynku w sercu Tatr</div>
            <div className={classes.naglowek2}>Chwila history</div>
            <div className={classes.text}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum tortor,
                    pulvinar vitae venenatis vitae, consequat vel eros. Maecenas non varius sem. Vestibulum cursus ipsum
                    urna, ullamcorper vulputate lacus congue a. Donec ultricies vestibulum faucibus. Ut accumsan aliquet
                    augue vitae rutrum. Phasellus non cursus elit. Nunc aliquam turpis nibh, in consectetur tellus
                    vehicula
                    in. Nulla convallis lorem eu rutrum aliquet. Sed at dictum est. Integer tortor urna, iaculis vitae
                    porta
                    ullamcorper, consectetur sed nisl. Aliquam rutrum eros mauris, ut lacinia sem ornare eget. Nullam
                    pulvinar ligula elementum tellus tincidunt, pharetra maximus metus faucibus. Aliquam vel imperdiet
                    ipsum. Pellentesque ligula mauris, maximus volutpat viverra vitae, faucibus in enim.</p>
                <div className={classes.fotoHistoryja}><img src={fotoHistoryja2}/></div>
                <p>Suspendisse sapien nibh, suscipit elementum lacinia non, dapibus vel diam. Nunc convallis, lacus eget
                    efficitur placerat, massa massa vehicula neque, eget dictum purus massa sed nisl. Suspendisse eget
                    justo
                    eget mi porttitor dictum. Etiam vulputate porta nibh, quis congue nunc laoreet et. Sed bibendum
                    venenatis lacus, non dignissim diam bibendum in. Vivamus maximus magna vehicula massa consectetur
                    tristique. Proin gravida interdum lacus quis facilisis. Nunc risus tortor, malesuada ac neque quis,
                    egestas mattis velit. Ut nec eleifend leo. Mauris blandit lacus id diam egestas ultricies. Sed at
                    leo
                    sollicitudin, efficitur erat vehicula, cursus purus. Sed aliquet quis ligula ac sagittis. Duis ac
                    sollicitudin magna. Vivamus in augue felis. Maecenas in mattis ligula.</p>
                <p>Sed convallis augue ac rutrum elementum. Proin nec diam velit. Quisque odio nunc, porttitor et odio
                    ut,
                    aliquam interdum dui. In sed molestie lacus, id scelerisque diam. Ut condimentum diam sit amet nibh
                    fringilla, at consectetur eros elementum. Proin gravida, sapien nec eleifend imperdiet, tortor nisl
                    congue lorem, id sagittis eros est at sapien. Vestibulum ut magna ut ex pharetra fringilla. Praesent
                    maximus volutpat elit non sodales. Nunc euismod purus at libero accumsan lacinia. Sed eget cursus
                    elit.</p>
                <div className={classes.fotoHistoryja2}><img src={fotoHistoryja}/></div>
                <p>Sed at odio enim. Mauris ut ex vel tellus vulputate feugiat et ut quam. Suspendisse potenti. Nulla
                    volutpat enim metus. In a lectus nisi. Ut finibus diam quis fermentum pharetra. Duis dapibus nisi
                    porta
                    leo iaculis vehicula. Cras vitae lectus quis ex aliquet pulvinar.</p>
                <p>Pellentesque tincidunt ultrices lectus, et posuere ligula accumsan ut. Morbi feugiat dolor vulputate
                    dignissim convallis. Vestibulum viverra arcu ut sapien sodales, non tristique arcu vehicula. Donec
                    at mi
                    ac massa ornare pellentesque et sed orci. Mauris quam libero, varius ac aliquam vel, pretium et
                    elit.
                    Sed lacus diam, tincidunt vel lectus at, volutpat porta justo. Proin pulvinar massa porttitor,
                    pharetra
                    diam nec, bibendum magna. Pellentesque aliquet tempus odio, vel volutpat turpis ultrices eget.</p>
                <p>Nulla eget leo augue. Nam eget volutpat lectus. Curabitur a posuere ligula. Aliquam non est ac dui
                    lobortis euismod non non urna. Maecenas dapibus, est ut hendrerit finibus, purus augue aliquet
                    metus,
                    placerat blandit nisl lorem et velit. Praesent ex sapien, porttitor eget rutrum nec, vulputate in
                    eros.
                    Donec pulvinar dictum lacus vel porttitor. Suspendisse quis massa elementum, tristique diam non,
                    bibendum orci. Sed iaculis tortor id placerat pulvinar. Curabitur nunc dolor, laoreet in dictum non,
                    tristique sed neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur venenatis neque eu
                    tortor tincidunt efficitur. Sed est arcu, molestie ac placerat ut, varius sit amet massa. Integer
                    blandit, metus in placerat dictum, justo purus posuere turpis, vitae eleifend nulla ante elementum
                    leo.</p>

            </div>
            <MyFooter/>
        </>
    );
}


export default AboutUs;