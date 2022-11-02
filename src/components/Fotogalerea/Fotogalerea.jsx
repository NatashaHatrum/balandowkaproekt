import React from 'react';
import LightGallery from 'lightgallery/react';
import classes from './Fotogalerea.module.css'
import Foto1 from './../Assets/img/Fotogalerea/Fotogalerea1.jpg'
import Foto2 from './../Assets/img/Fotogalerea/Fotogalerea2.jpg'
import Foto7 from './../Assets/img/RoomsImg/1/IMG_4868.jpg'
import Foto4 from './../Assets/img/Fotogalerea/Fotogalerea4.jpg'
import Foto3 from './../Assets/img/Fotogalerea/Fotogalerea5.jpg'
import Foto6 from './../Assets/img/Fotogalerea/Fotogalerea6.jpg'
import Foto5 from './../Assets/img/Fotogalerea/Fotogalerea7.jpg'
import Foto8 from '../Assets/img/RoomsImg/1/img.jpg'
import Foto9 from './../Assets/img/RoomsImg/1/IMG_4871.jpg'
import Foto10 from '../Assets/img/RoomsImg/Apartament/IMG_4713.jpg'
import Foto11 from './../Assets/img/RoomsImg/Apartament/IMG_4723.jpg'
import Foto12 from './../Assets/img/RoomsImg/Apartament/IMG_4729.jpg'
import Foto13 from './../Assets/img/RoomsImg/Apartament/IMG_4733.jpg'
import Foto14 from './../Assets/img/RoomsImg/Apartament/IMG_4738.jpg'
import Foto15 from './../Assets/img/RoomsImg/Apartament/IMG_4740.jpg'
import Foto16 from './../Assets/img/RoomsImg/Apartament/IMG_4741.jpg'
import Foto17 from './../Assets/img/RoomsImg/Apartament/IMG_4746.jpg'
import Foto18 from './../Assets/img/RoomsImg/Apartament/IMG_4754.jpg'
import Foto19 from './../Assets/img/RoomsImg/Apartament/IMG_4756.jpg'
import Foto20 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4640.JPG'
import Foto21 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4646.JPG'
import Foto22 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4647.JPG'
import Foto23 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4656.JPG'
import Foto24 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4712.jpg'
import Foto44 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4679.jpg'
import Foto25 from './../Assets/img/RoomsImg/ApartamZKanapa/IMG_4835.JPG'
import Foto27 from './../Assets/img/RoomsImg/Poddasze/IMG_4610.jpg'
import Foto28 from './../Assets/img/RoomsImg/Poddasze/IMG_4764.jpg'
import Foto29 from './../Assets/img/RoomsImg/Poddasze/IMG_4776.jpg'
import Foto30 from './../Assets/img/RoomsImg/Poddasze/IMG_4781.jpg'
import Foto31 from './../Assets/img/RoomsImg/Poddasze/IMG_4792.jpg'
import Foto32 from './../Assets/img/RoomsImg/PoLewaj/IMG_4619.jpg'
import Foto33 from './../Assets/img/RoomsImg/PoLewaj/IMG_4855.jpg'
import Foto34 from './../Assets/img/RoomsImg/PoLewaj/IMG_4842.jpg'
import Foto35 from './../Assets/img/RoomsImg/PoLewaj/IMG_4845.jpg'
import Foto36 from './../Assets/img/RoomsImg/PoLewaj/IMG_4850.jpg'
import Foto38 from './../Assets/img/RoomsImg/PoPravaj/IMG_4689.jpg'
import Foto39 from './../Assets/img/RoomsImg/PoPravaj/IMG_4703.jpg'
import Foto40 from './../Assets/img/RoomsImg/PoPravaj/IMG_4810.jpg'
import Foto41 from './../Assets/img/RoomsImg/PoPravaj/IMG_4816.jpg'
import Foto42 from './../Assets/img/RoomsImg/PoPravaj/IMG_4820.jpg'
import Foto43 from './../Assets/img/RoomsImg/PoPravaj/IMG_4831.jpg'


import fotoGlowne from "../Assets/img/GlowneFotogslerea.jpg";
import Footer from "../Footer/Footer";


const Fotogalerea = () => {
    const onBeforeSlide = (detail) => {
        const {index, prevIndex} = detail;
        console.log(index, prevIndex)
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
        <div>
            <div className={classes.container}>
                <div className={classes.fotoGlowne}>
                    <img src={fotoGlowne}/>
                    <h2>FOTOGALERIA</h2>
                    <p> Zobacz jak wygląda Bałandówka</p>
                </div>

                <div className={classes.galerea}>


                    <LightGallery {...props}

                                  elementClassNames="custom-wrapper-class"
                                  onBeforeSlide={onBeforeSlide}
                    >


                        <a className={classes.link} href={Foto1}>
                            <figure className={classes.galereaItem}>
                                <img src={Foto1}/>
                                <h3>&#128269;</h3>
                            </figure>

                        </a>


                        <a className={classes.link} href={Foto2}>
                            <figure className={classes.galereaItem}>
                                <img src={Foto2}/>
                                <h3>&#128269;</h3>
                            </figure>
                        </a>

                        <a className={classes.link} href={Foto3}>
                            <figure className={classes.galereaItem}>
                                <img src={Foto3}/>
                                <h3>&#128269;</h3>
                            </figure>
                        </a>
                        <a className={classes.link} href={Foto4}>
                            <figure className={classes.galereaItem}>
                                <img src={Foto4}/>
                                <h3>&#128269;</h3>
                            </figure>
                        </a>

                        <a className={classes.link} href={Foto5}>
                            <figure className={classes.galereaItem}>
                                <img src={Foto5}/>
                                <h3>&#128269;</h3>
                            </figure>
                        </a>
                        <a className={classes.link} href={Foto6}>
                            <figure className={classes.galereaItem}>
                                <img src={Foto6}/>
                                <h3>&#128269;</h3>
                            </figure>
                        </a>
                        <a className={classes.link} href={Foto7}>
                            <figure className={classes.galereaItem}>
                                <img src={Foto7}/>
                                <h3>&#128269;</h3>
                            </figure>
                        </a>
                        <a className={classes.link} href={Foto8}>
                            <figure className={classes.galereaItem}><img src={Foto8}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto9}>
                            <figure className={classes.galereaItem}><img src={Foto9}/> <h3>&#128269;</h3></figure>
                        </a>

                        <a className={classes.link} href={Foto10}>
                            <figure className={classes.galereaItem}><img src={Foto10}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto11}>
                            <figure className={classes.galereaItem}><img src={Foto11}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto12}>
                            <figure className={classes.galereaItem}><img src={Foto12}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto13}>
                            <figure className={classes.galereaItem}><img src={Foto13}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto14}>
                            <figure className={classes.galereaItem}><img src={Foto14}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto15}>
                            <figure className={classes.galereaItem}><img src={Foto15}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto16}>
                            <figure className={classes.galereaItem}><img src={Foto16}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto17}>
                            <figure className={classes.galereaItem}><img src={Foto17}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto18}>
                            <figure className={classes.galereaItem}><img src={Foto18}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto19}>
                            <figure className={classes.galereaItem}><img src={Foto19}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto20}>
                            <figure className={classes.galereaItem}><img src={Foto20}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto21}>
                            <figure className={classes.galereaItem}><img src={Foto21}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto22}>
                            <figure className={classes.galereaItem}><img src={Foto22}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto23}>
                            <figure className={classes.galereaItem}><img src={Foto23}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto24}>
                            <figure className={classes.galereaItem}><img src={Foto24}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto44}>
                            <figure className={classes.galereaItem}><img src={Foto44}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto25}>
                            <figure className={classes.galereaItem}><img src={Foto25}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto27}>
                            <figure className={classes.galereaItem}><img src={Foto27}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto28}>
                            <figure className={classes.galereaItem}><img src={Foto28}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto29}>
                            <figure className={classes.galereaItem}><img src={Foto29}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto30}>
                            <figure className={classes.galereaItem}><img src={Foto30}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto31}>
                            <figure className={classes.galereaItem}><img src={Foto31}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto32}>
                            <figure className={classes.galereaItem}><img src={Foto32}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto33}>
                            <figure className={classes.galereaItem}><img src={Foto33}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto34}>
                            <figure className={classes.galereaItem}><img src={Foto34}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto35}>
                            <figure className={classes.galereaItem}><img src={Foto35}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto36}>
                            <figure className={classes.galereaItem}><img src={Foto36}/> <h3>&#128269;</h3></figure>
                        </a>

                        <a className={classes.link} href={Foto38}>
                            <figure className={classes.galereaItem}><img src={Foto38}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto39}>
                            <figure className={classes.galereaItem}><img src={Foto39}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto40}>
                            <figure className={classes.galereaItem}><img src={Foto40}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto41}>
                            <figure className={classes.galereaItem}><img src={Foto41}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto42}>
                            <figure className={classes.galereaItem}><img src={Foto42}/> <h3>&#128269;</h3></figure>
                        </a>
                        <a className={classes.link} href={Foto43}>
                            <figure className={classes.galereaItem}><img src={Foto43}/> <h3>&#128269;</h3></figure>
                        </a>
                    </LightGallery>

                </div>

            </div>
            <Footer/>
        </div>
    );
}


export default Fotogalerea;