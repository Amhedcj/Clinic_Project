import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Row, Col, Badge, ToggleButton, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const buttonGroupStyle = {
  display: 'flex',
  width: '100%',
};

const flexButtonStyle = {
  verticalAlign: 'baseline',
  flex: '1 1 0', // Flex grow, shrink, and basis
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px', // Ensure the button contents are centered and padded
  //   margin: 0, // Don't change margin or else the lines between them will be larger (they will stack)
  overflow: 'hidden', // Hide overflow text
  whiteSpace: 'nowrap', // Prevent text wrapping
  textOverflow: 'ellipsis', // Add ellipsis for overflow text
};

// const CheckButton = ({ children, style, ...props }: any) => (
//   <Button {...props} style={{ ...flexButtonStyle, ...style }}>
//     {children}
//   </Button>
// );

// const CheckButton = ({ children, style, ...props }: any) => {
const CheckButton = (props: any) => {
    const [b, setB] = useState(false);

    return (
        <ToggleButton {...props} style={{ ...flexButtonStyle, ...props.style }} id='' type='checkbox' value='' checked={b} onClick={() => { setB(!b) }} variant='outline-primary'>
            {props.children}
        </ToggleButton>
    );
};

const NewPrecautionsTable = () => {
  return (
    <Container className='mb-3'>
      <Row>
        <ButtonGroup vertical>
          <ButtonGroup>
            <Button disabled variant='outline-primary' style={{pointerEvents: 'none', opacity: '1'}}><h4>Precautions</h4></Button>
          </ButtonGroup>
          <ButtonGroup style={buttonGroupStyle}>
            <CheckButton style={flexButtonStyle}>
              <Badge>U</Badge>&nbsp;Universal
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>AT</Badge>&nbsp;Aseptic Technique
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>ST</Badge>&nbsp;Sterile Technique
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>S</Badge>&nbsp;Safety
            </CheckButton>
          </ButtonGroup>

        {/* <Col xs={12}> */}
          <ButtonGroup style={buttonGroupStyle}>
            <CheckButton style={flexButtonStyle}>
              <Badge>W</Badge>&nbsp;Wheelchair Lockers
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>CP</Badge>&nbsp;Clear Pathway
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>SK</Badge>&nbsp;Skin Integrity
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>F</Badge>&nbsp;Fall
            </CheckButton>
          </ButtonGroup>
        {/* </Col> */}

        {/* <Col xs={12}> */}
          <ButtonGroup style={buttonGroupStyle}>
            <CheckButton style={flexButtonStyle}>
              <Badge>EH</Badge>&nbsp;Elevated Head of Bed
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>FP</Badge>&nbsp;Fowler Position
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>SR</Badge>&nbsp;Side Rails Up
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>B</Badge>&nbsp;Bed Locker
            </CheckButton>
          </ButtonGroup>
        {/* </Col> */}

        {/* <Col xs={12}> */}
          <ButtonGroup style={buttonGroupStyle}>
            <CheckButton style={flexButtonStyle}>
              Cardiac
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>R</Badge>&nbsp;Reflux
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>A</Badge>&nbsp;Aspiration
            </CheckButton>
            <CheckButton style={flexButtonStyle}>
              <Badge>G</Badge>&nbsp;Gastronomy
            </CheckButton>
          </ButtonGroup>
        {/* </Col> */}
        </ButtonGroup>
      </Row>
    </Container>
  );
}

export default NewPrecautionsTable;
