import React from 'react';
import {Button, Col, Row, Table} from "antd";
import classes from "./Rooms.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBanSmoking} from "@fortawesome/free-solid-svg-icons/faBanSmoking";
import pas from "../Assets/img/razdelitel.png";
import {useMobile} from './../Hooks/isMobile'
import {Link} from "react-router-dom";


export const RoomsPage = ({componentSlider, dataForTable, columnsForTable, id}) => {
    const [isMobile] = useMobile();
    return (
        <>
            <Row className={classes.tempRow1} gutter={30}>
                <Col xs={{span: 24, order: 2}} sm={{span: 10, order: 1}} md={{span: 10, order: 1}}
                     lg={{span: 10, order: 1}}
                     xl={{span: 10, order: 1}}>
                    <div className={classes.slider}>{componentSlider}</div>
                </Col>
                <Col xs={{span: 24, order: 1}} sm={{span: 9, order: 2}} md={{span: 9, order: 2}}
                     lg={{span: 9, order: 2}}
                     xl={{span: 9, order: 2}}>
                    <Table dataSource={dataForTable}
                           columns={columnsForTable}
                           pagination={false}
                           rowClassName={classes.tableStyle}
                    />
                    <Row justify='center'>
                        <Col span={24}>
                            <h6 className={classes.smoking}><FontAwesomeIcon icon={faBanSmoking}
                                                                             className={classes.ikons2}/>Dla palących:
                                ​palenie
                                zabronione</h6>
                        </Col>
                    </Row>
                    <Row justify='end'>
                        <Col span={8} className={classes.tempCol9}>
                            <Link to='/kontakt'>
                            <Button  style={{backgroundColor: '#6c757d', color: 'white'}}>REZERWUJ POBYT</Button>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {!isMobile ? undefined :
                <Row justify='center'>
                    <Col span={8}>
                        <Link to='/kontakt'>
                            <Button style={{backgroundColor: '#6c757d', color: 'white'}}>REZERWUJ POBYT</Button>
                        </Link>
                    </Col>

                </Row>
            }
            {id !== '001' ? <Row className={classes.tempRow2}>
                    <Col span={24}>
                        <div className={classes.pas}><img src={pas}/></div>
                    </Col>
                </Row> :
                <Row className={classes.space}><Col/></Row>
            }


        </>
    )
};

export default RoomsPage;
