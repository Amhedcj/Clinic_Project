import React, { useState } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';

const RangeSlider = (props: any) => {
    const [value, setValue] = useState(50);
    const min = Number(props?.min) || 0;
    const max = Number(props?.max) || 100;

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <Form>
            <Form.Group>
                <Row xs={12}>
                    <Row className="justify-content-center">
                        <Col xs={12}>
                            <Form.Range min={min} max={max} value={value} onChange={handleChange} />
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col xs={1} style={{ textAlign: 'left' }}>
                            {min}
                        </Col>
                        <Col xs={1} style={{ textAlign: 'right' }}>
                            {max}
                        </Col>
                    </Row>
                </Row>
            </Form.Group>
        </Form>
    );
};

export default RangeSlider;
