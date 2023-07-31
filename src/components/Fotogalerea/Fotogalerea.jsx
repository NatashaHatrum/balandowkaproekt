import React from 'react';
import {Image} from 'antd';

import {LazyLoadImage} from "react-lazy-load-image-component";
import classes from './Fotogalerea.module.css'
import Foto1 from '../Assets/img/Fotogalerea/preview/Fotogalerea1.jpg'
import Foto2 from '../Assets/img/Fotogalerea/preview/Fotogalerea2.jpg'
import Foto7 from '../Assets/img/Fotogalerea/preview/IMG_4868.jpg'
import Foto4 from '../Assets/img/Fotogalerea/preview/Fotogalerea4.jpg'
import Foto3 from '../Assets/img/Fotogalerea/preview/Fotogalerea5.jpg'
import Foto6 from '../Assets/img/Fotogalerea/preview/Fotogalerea6.jpg'
import Foto5 from '../Assets/img/Fotogalerea/preview/Fotogalerea7.jpg'
import Foto8 from '../Assets/img/Fotogalerea/preview/img.jpg'
import Foto9 from '../Assets/img/Fotogalerea/preview/IMG_4871.jpg'
import Foto10 from '../Assets/img/Fotogalerea/preview/IMG_4713.jpg'
import Foto11 from '../Assets/img/Fotogalerea/preview/IMG_4723.jpg'
import Foto12 from '../Assets/img/Fotogalerea/preview/IMG_49141.jpg'
import Foto13 from '../Assets/img/Fotogalerea/preview/IMG_4733.jpg'
import Foto14 from '../Assets/img/Fotogalerea/preview/IMG_4738.jpg'
import Foto15 from '../Assets/img/Fotogalerea/preview/IMG_4740.jpg'
import Foto16 from '../Assets/img/Fotogalerea/preview/IMG_4741.jpg'
import Foto17 from '../Assets/img/Fotogalerea/preview/IMG_4746.jpg'
import Foto18 from '../Assets/img/Fotogalerea/preview/IMG_4754.jpg'
import Foto19 from '../Assets/img/Fotogalerea/preview/IMG_4756.jpg'
import Foto20 from '../Assets/img/Fotogalerea/preview/IMG_4640.jpg'
import Foto21 from '../Assets/img/Fotogalerea/preview/IMG_4646.jpg'
import Foto22 from '../Assets/img/Fotogalerea/preview/IMG_4647.jpg'
import Foto23 from '../Assets/img/Fotogalerea/preview/IMG_4656.jpg'
import Foto24 from '../Assets/img/Fotogalerea/preview/IMG_4712.jpg'
import Foto25 from '../Assets/img/Fotogalerea/preview/IMG_4835.jpg'
import Foto27 from '../Assets/img/Fotogalerea/preview/IMG_4610.jpg'
import Foto28 from '../Assets/img/Fotogalerea/preview/IMG_4764.jpg'
import Foto29 from '../Assets/img/Fotogalerea/preview/IMG_4776.jpg'
import Foto30 from '../Assets/img/Fotogalerea/preview/IMG_4781.jpg'
import Foto31 from '../Assets/img/Fotogalerea/preview/IMG_4792.jpg'
import Foto32 from '../Assets/img/Fotogalerea/preview/IMG_4619.jpg'
import Foto33 from '../Assets/img/Fotogalerea/preview/IMG_4855.jpg'
import Foto34 from '../Assets/img/Fotogalerea/preview/IMG_4842.jpg'
import Foto35 from '../Assets/img/Fotogalerea/preview/IMG_4845.jpg'
import Foto36 from '../Assets/img/Fotogalerea/preview/IMG_4850.jpg'
import Foto38 from '../Assets/img/Fotogalerea/preview/IMG_4689.jpg'
import Foto39 from '../Assets/img/Fotogalerea/preview/IMG_4703.jpg'
import Foto40 from '../Assets/img/Fotogalerea/preview/IMG_4810.jpg'
import Foto41 from '../Assets/img/Fotogalerea/preview/IMG_4816.jpg'
import Foto42 from '../Assets/img/Fotogalerea/preview/IMG_4820.jpg'
import Foto43 from '../Assets/img/Fotogalerea/preview/IMG_4831.jpg'
import Foto44 from '../Assets/img/Fotogalerea/preview/IMG_4729.jpg'
import Foto45 from '../Assets/img/Fotogalerea/preview/IMG_49441.jpg'
import Foto46 from '../Assets/img/Fotogalerea/preview/IMG_4923o.jpg'


import fotoGlowne from "../Assets/img/Flowers.JPG";
import MyFooter from "../Footer/MyFooter";
import {MyHeader} from "../Heder/Heder";

const fotoTable = [
    {
        name: Foto1,
        className: classes.imageGridCol2,

    },
    {
        name: Foto2,
        className: classes.imageGridCol5,

    },
    {
        name: Foto8,
        className: classes.imageGridCol3,
      /*  preview: PhotoPreview8*/
    },
    {
        name: Foto11,
        className: classes.imageGridCol4,

    },
    {
        name: Foto5,
        className: '',

    },
    {
        name: Foto6,
        className: classes.imageGridCol5,

    },
    {
        name: Foto7,
        className: '',

    },
    {
        name: Foto3,
        className: classes.imageGridCol2,

    },
    {
        name: Foto9,
        className: '',

    },
    {
        name: Foto10,
        className: '',

    },
    {
        name: Foto4,
        className: '',
    },
    {
        name: Foto12,
        className: classes.imageGridCol2,

    },
    {
        name: Foto13,
        className: '',

    },
    {
        name: Foto14,
        className: '',

    },
    {
        name: Foto15,
        className: classes.imageGridCol4,

    },
    {
        name: Foto16,
        className: '',

    },
    {
        name: Foto17,
        className: '',

    },
    {
        name: Foto18,
        className: '',

    },
    {
        name: Foto20,
        className: '',

    },
    {
        name: Foto19,
        className: classes.imageGridCol2,

    },
    {
        name: Foto21,
        className: classes.imageGridCol5,

    },
    {
        name: Foto35,
        className: classes.imageGridCol3,

    },
    {
        name: Foto24,
        className: classes.imageGridCol4,

    },
    {
        name: Foto23,
        className: '',

    },
    {
        name: Foto25,
        className: classes.imageGridCol5,
    },
    {
        name: Foto27,
        className: '',
    },
    {
        name: Foto32,
        className: classes.imageGridCol2,
    },
    {
        name: Foto29,
        className: '',
    },
    {
        name: Foto30,
        className: '',
    },
    {
        name: Foto31,
        className: '',
    },
    {
        name: Foto33,
        className: classes.imageGridCol2,
    },
    {
        name: Foto28,
        className: '',
    },
    {
        name: Foto34,
        className: '',
    },
    {
        name: Foto22,
        className: classes.imageGridCol4,
    },
    {
        name: Foto36,
        className: '',
    },
    {
        name: Foto41,
        className: '',
    },
    {
        name: Foto40,
        className: '',
    },
    {
        name: Foto39,
        className: classes.imageGridCol5,
    },
    {
        name: Foto38,
        className: '',
    },
    {
        name: Foto42,
        className: classes.imageGridCol4,
    },
    {
        name: Foto44,
        className: classes.imageGridCol5,
    },
    {
        name: Foto43,
        className: '',
    },
    {
        name: Foto45,
        className: classes.imageGridCol2,
    },
    {
        name: Foto46,
        className: '',
    },
];


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
            <div className={classes.imageGrid}>
                <Image.PreviewGroup

                    items={[Foto5, Foto2, Foto3, Foto4, Foto5, Foto6, Foto7, Foto8, Foto9, Foto10, Foto11, Foto12, Foto13, Foto14, Foto15, Foto16, Foto17,
                        Foto18, Foto19, Foto20, Foto21, Foto22, Foto23, Foto24, Foto25, Foto27, Foto28, Foto29, Foto30, Foto31, Foto32, Foto33, Foto34, Foto35, Foto36,
                        Foto38, Foto39, Foto40, Foto41, Foto42, Foto43]}
                >
                    {
                        fotoTable.map((el, index) =>

                            <Image key={index}
                                   rootClassName={el.className}
                                   src={el.name}
                                   preview={{
                                       src: el.name
                                   }}
                            />
                        )
                    }
                </Image.PreviewGroup>
            </div>
            {/* <div className={classes.container}>
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
            </div>*/
            }
            {/* <div className={classes.imageGrid}>
                <img className={classes.imageGridCol2} src={Foto1}/>
                <img src={Foto1}/>
                <img src={Foto2}/>
                <img src={Foto3}/>
                <img src={Foto4}/>
                <img src={Foto5}/>
                <img src={Foto6}/>
                <img className={classes.imageGridCol3} src={Foto7}/>
                <img src={Foto8}/>
                <img src={Foto1}/>
                <img src={Foto1}/>
                <img src={Foto1}/>
                <img src={Foto1}/>
                <img src={Foto1}/>
            </div>
*/}

            <MyFooter/>
            < />
            )
            ;
            }


            export default Fotogalerea;