import React from 'react';
import classes from './Heder.module.css'
import {Row, Col} from "antd";


export const MyHeader = ({arrayOfPhotos, title, description}) => {
    return (
        <Row className={classes.photoMain}
            style={{
                background: `url(${arrayOfPhotos[0]}) no-repeat`,
            }}
        >
            <Col  className={classes.tempCol2} span={24}>
                <div> <h2 className={classes.title}>{title}</h2>
               <p className={classes.descripilon}> {description}</p></div>

            </Col>
        </Row>
    )
};
