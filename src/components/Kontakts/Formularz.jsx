import React, {useState} from 'react';
import classes from './Formular.module.css'
import {Button} from "react-bootstrap";
import {useFormik} from 'formik';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import Umowa from '../Assets/Umowa/UmowaYzytkownika.txt'

const validate = values => {

    const errors = {};

    if (!values.email.length) {
        errors.email = 'Pole jest wymagane';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Niepoprawny email adres';
    }

    if (!values.temat.length) {
        errors.temat = 'Pole jest wymagane';
    }
    else if (values.temat.length < 4) {
        errors.temat = 'Za krótki temat, podaj minimum 4 znaki';
    }

    if (!values.wiadomosc.length) {
        errors.wiadomosc = 'Pole jest wymagane'
    } else if (values.wiadomosc.length < 10) {
        errors.wiadomosc = 'Za krótka wiadomość, podaj minimum 10 znaków';
    }

    if (!values.capcha.length) {
        errors.capcha = 'Pole jest wymagane'
    } else if (values.capcha != 7) {
        errors.capcha = 'Niepoprawna informacja';
    }
    if (values.zgoda != true) {
        errors.zgoda = 'Pole jest wymagane'
    }

    return errors;

};

function Formular() {
const[isSending,setIsSending] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            temat: '',
            wiadomosc: '',
            capcha: '',
            zgoda: ''

        },
        validate,
        validateOnChange: false,
        validateOnBlur: false,


        onSubmit: values => {
            setIsSending(true)
            try{

                emailjs.send('service_1f6qj76' , 'template_vcwz6hi', values, 'TsRvBBN6BgusBPdV2')
                    .then((result) => {

                        console.log(result.text);
                        Swal.fire({
                            icon: 'success',
                        title: 'Wiadomość została wysłana'
                    });
                        formik.resetForm({});
                        setIsSending(false)
                    });

            }
            catch (error) {
                console.log(error.text);
                setIsSending(false);
                Swal.fire({
                    icon: 'error',
                title: 'Ooops, coś poszło nie tak',
                text: error.text,
            })
            }

        },
    });

    const tematError = formik.errors.temat ? (
        <div>{formik.errors.temat}</div>
    ) : null;

    const wiadomoscError = formik.errors.wiadomosc ? (
        <div>{formik.errors.wiadomosc}</div>
    ) : null;

    const emailError = formik.errors.email ? (
        <div>{formik.errors.email}</div>
    ) : null;

    const capchaError = formik.errors.capcha ? (
        <div>{formik.errors.capcha}</div>
    ) : null;

    const zgodaError = formik.errors.zgoda ? (
        <div>{formik.errors.zgoda}</div>
    ) : null;


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1>Skontaktuj się z nami</h1>

                <div className={classes.input}>
                    <input

                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder='Imię i nazwisko'

                    /></div>

                <div className={classes.input}><input

                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    className={formik.errors.email ? classes.hasError : ''}

                    value={formik.values.email}
                    placeholder='Adres email*'

                />
                    <div className={classes.textError}>{emailError}</div>
                </div>

                <div className={classes.input}><input

                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder='Telefon'

                /></div>

                <div className={classes.input}><input

                    id="temat"
                    name="temat"
                    type="text"
                    className={formik.errors.temat ? classes.hasError : ''}  //hasError ? `${error}` && classes.error : ''
                    onChange={formik.handleChange}
                    value={formik.values.temat}
                    placeholder='Temat*'


                />
                    <div className={classes.textError}>{tematError}</div>
                </div>


                <div className={classes.input}><input

                    id="capcha"
                    name="capcha"
                    type="numder"
                    className={formik.errors.capcha ? classes.hasError : ''}  //hasError ? `${error}` && classes.error : ''
                    onChange={formik.handleChange}
                    value={formik.values.capcha}
                    placeholder='5+2=?'
                />
                    <div className={classes.textError}>{capchaError}</div>
                </div>


                <div className={classes.input}><textarea
                    name="wiadomosc"
                    id="wiadomosc"
                    className={formik.errors.wiadomosc ? classes.hasError : ''}
                    onChange={formik.handleChange}
                    value={formik.values.wiadomosc}
                    placeholder='Wiadomość*'
                />
                    <div className={classes.textError}>{wiadomoscError}</div>
                </div>

                <div className={classes.checkbox1}><input
                    name="zgoda"
                    id="zgoda"
                    type='checkbox'
                    className={formik.errors.zgoda ? classes.hasError : ''}
                    onChange={formik.handleChange}
                    value={formik.values.zgoda}

                />

                    <div className={classes.checkboxText}>Akceptuję warunki <a href={Umowa} target='_blank'> umowy użytkownika </a>i wyrażam zgodę <br/>
                        na przetwarzanie moich danych osobistych*
                    </div>
                    <div className={classes.textErrorChekbox}>{zgodaError}</div>
                </div>


                <div className={classes.btn}><Button disabled={isSending}  variant="secondary" type="submit">
                    Wyślij
                </Button></div>
            </form>
        </>
    );

};

export default Formular;

