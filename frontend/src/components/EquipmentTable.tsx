import React from 'react'
import { ButtonGroup, Col } from 'react-bootstrap'
import CheckButton from './CheckButton'

function EquipmentTable() {
    const size = undefined;

    return (
        <>
            <ButtonGroup vertical as={Col} xs={12}>
                <ButtonGroup size={size} as={Col} xs={12}>
                    <CheckButton as={Col} xs={3}>Glasses</CheckButton>
                    <CheckButton as={Col} xs={3}>Splints/Orthotics</CheckButton>
                </ButtonGroup>

                <ButtonGroup size={size} as={Col} xs={12}>
                    <CheckButton as={Col} xs={3}>Monitors</CheckButton>
                    <CheckButton as={Col} xs={3}>Feeding Pump</CheckButton>
                </ButtonGroup>

                <ButtonGroup size={size} as={Col} xs={12}>
                    <CheckButton as={Col} xs={3}>Portable Suction</CheckButton>
                    <CheckButton as={Col} xs={3}>Hearing Aid</CheckButton>
                </ButtonGroup>
                <ButtonGroup size={size} as={Col} xs={12}>
                    <CheckButton as={Col} xs={3}>Oxygen</CheckButton>
                    <CheckButton as={Col} xs={3}>Wheelchair</CheckButton>
                </ButtonGroup>

                <ButtonGroup size={size} as={Col} xs={12}>
                    <CheckButton as={Col} xs={3}>Nebulizer</CheckButton>
                </ButtonGroup>
            </ButtonGroup>

            {/* Old equipment table (just rows) */}
            <>
                {/* <>
                <tr>
                    <td style={labelCellStyle}>Glasses</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
                <tr>
                    <td style={labelCellStyle}>Splints/Orthotics</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
                <tr>
                    <td style={labelCellStyle}>Monitors</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
                <tr>
                    <td style={labelCellStyle}>Feeding Pump</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
                <tr>
                    <td style={labelCellStyle}>Portable Suction</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
                <tr>
                    <td style={labelCellStyle}>Hearing Aid</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
                <tr>
                    <td style={labelCellStyle}>Oxygen</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
                <tr>
                    <td style={labelCellStyle}>Wheelchair</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
                <tr>
                    <td style={labelCellStyle}>Nebulizer</td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                    <td>
                        <Form.Control type="text" />
                    </td>
                </tr>
            </> */}
            </>
        </>
    )
}

export default EquipmentTable