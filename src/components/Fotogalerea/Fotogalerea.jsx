import React from 'react';
import LightGallery from 'lightgallery/react';
import classes from './Fotogalerea.module.css'
import Foto1 from '../Assets/img/Fotogalerea/Fotogalerea1.JPG'
import Foto2 from '../Assets/img/Fotogalerea/Fotogalerea2.JPG'
import Foto7 from '../Assets/img/RoomsImg/1/IMG_4868.JPG'
import Foto4 from '../Assets/img/Fotogalerea/Fotogalerea4.JPG'
import Foto3 from '../Assets/img/Fotogalerea/Fotogalerea5.JPG'
import Foto6 from '../Assets/img/Fotogalerea/Fotogalerea6.JPG'
import Foto5 from '../Assets/img/Fotogalerea/Fotogalerea7.JPG'
import Foto8 from '../Assets/img/RoomsImg/1/img.jpg'
import Foto9 from '../Assets/img/RoomsImg/1/IMG_4871.JPG'
import Foto10 from '../Assets/img/RoomsImg/Apartament/IMG_4713.jpg'
import Foto11 from '../Assets/img/RoomsImg/Apartament/IMG_4723.jpg'
import Foto12 from '../Assets/img/RoomsImg/Apartament/IMG_4729.jpg'
import Foto13 from '../Assets/img/RoomsImg/Apartament/IMG_4733.jpg'
import Foto14 from '../Assets/img/RoomsImg/Apartament/IMG_4738.jpg'
import Foto15 from '../Assets/img/RoomsImg/Apartament/IMG_4740.jpg'
import Foto16 from '../Assets/img/RoomsImg/Apartament/IMG_4741.jpg'
import Foto17 from '../Assets/img/RoomsImg/Apartament/IMG_4746.jpg'
import Foto18 from '../Assets/img/RoomsImg/Apartament/IMG_4754.jpg'
import Foto19 from '../Assets/img/RoomsImg/Apartament/IMG_4756.jpg'
import Foto20 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4640.JPG'
import Foto21 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4646.JPG'
import Foto22 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4647.JPG'
import Foto23 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4656.JPG'
import Foto24 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4712.JPG'
import Foto25 from '../Assets/img/RoomsImg/ApartamZKanapa/IMG_4835.JPG'
import Foto27 from '../Assets/img/RoomsImg/Poddasze/IMG_4610.jpg'
import Foto28 from '../Assets/img/RoomsImg/Poddasze/IMG_4764.jpg'
import Foto29 from '../Assets/img/RoomsImg/Poddasze/IMG_4776.jpg'
import Foto30 from '../Assets/img/RoomsImg/Poddasze/IMG_4781.jpg'
import Foto31 from '../Assets/img/RoomsImg/Poddasze/IMG_4792.jpg'
import Foto32 from '../Assets/img/RoomsImg/PoLewaj/IMG_4619.jpg'
import Foto33 from '../Assets/img/RoomsImg/PoLewaj/IMG_4855.jpg'
import Foto34 from '../Assets/img/RoomsImg/PoLewaj/IMG_4842.jpg'
import Foto35 from '../Assets/img/RoomsImg/PoLewaj/IMG_4845.jpg'
import Foto36 from '../Assets/img/RoomsImg/PoLewaj/IMG_4850.jpg'
import Foto38 from '../Assets/img/RoomsImg/PoPravaj/IMG_4689.jpg'
import Foto39 from '../Assets/img/RoomsImg/PoPravaj/IMG_4703.jpg'
import Foto40 from '../Assets/img/RoomsImg/PoPravaj/IMG_4810.jpg'
import Foto41 from '../Assets/img/RoomsImg/PoPravaj/IMG_4816.jpg'
import Foto42 from '../Assets/img/RoomsImg/PoPravaj/IMG_4820.jpg'
import Foto43 from '../Assets/img/RoomsImg/PoPravaj/IMG_4831.jpg'


import fotoGlowne from "../Assets/img/Flowers.JPG";
import MyFooter from "../Footer/MyFooter";
import {MyHeader} from "../Heder/Heder";

const FotoTable = [Foto1, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10, Foto11, Foto12, Foto13, Foto14, Foto15, Foto16, Foto17, Foto18, Foto19, Foto20, Foto21, Foto22, Foto23, Foto24, Foto25, Foto27, Foto28, Foto29, Foto30, Foto31, Foto32, Foto33, Foto34, Foto35, Foto36, Foto38, Foto39, Foto40, Foto41, Foto42, Foto43];

const Fotogalerea = () => {
    const onBeforeSlide = (detail) => {
        const {} = detail;
    };
    const props = {

        download: false,
        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        currentPagerPosition: 'right',
        thumbnail: true,
        animateThumb: true,

    };

    return (
        <>
            <MyHeader title={'FOTOGALERIA'} description={'Zobacz jak wygląda Bałandówka'} arrayOfPhotos={[fotoGlowne]}/>
            <div className={classes.container}>

                <div className={classes.galerea}>


                    <LightGallery {...props}

                                  elementClassNames="custom-wrapper-class"
                                  onBeforeSlide={onBeforeSlide}
                    >
                        {FotoTable.map((el, index) =>
                            <a key={index} className={classes.link} href={el}>
                                <figure className={classes.galereaItem}>
                                    <img src={el}/>
                                    <h3>&#128269;</h3>
                                </figure>
                            </a>
                        )}

                    </LightGallery>

                </div>

            </div>
            <MyFooter/>
        </>
    );
}


export default Fotogalerea;