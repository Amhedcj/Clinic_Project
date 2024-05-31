import React from 'react'
import { ButtonGroup, ToggleButton, DropdownButton, Dropdown, ButtonGroupProps, Row, Col, ColProps } from 'react-bootstrap'

type CollapsedRadioGroupProps = ButtonGroupProps & ColProps & {
    name: string;
    mainOptions?: { value: string; label: string }[];
    otherOptions?: { value: string; label: string }[];
    otherOptionsDefaultLabel?: string;
    state: any;
    setState: Function;
};

function CollapsedRadioGroup(props: CollapsedRadioGroupProps) {
    return (
        (props.mainOptions && props.mainOptions.length > 0) || (props.otherOptions && props.otherOptions.length > 0) ?
            <>
                <ButtonGroup {...(props as ButtonGroupProps)}>
                    {/* Main Options */}
                    {
                        (props.mainOptions && props.mainOptions.length > 0) &&
                        props.mainOptions?.map((mainOptionObj, idx) => (
                            <ToggleButton key={`${mainOptionObj.label}${mainOptionObj.value}${idx}`} id={`${props.name}-${mainOptionObj.value}`} type="radio" variant='outline-primary' name={props.name} value={mainOptionObj.value} checked={props.state === mainOptionObj.value} onChange={(e) => props.setState(e.currentTarget.value)}>
                                {mainOptionObj.label}
                            </ToggleButton>))
                    }

                    {/* Other Options dropdown */}
                    {(props.otherOptions && props.otherOptions.length > 0) &&
                        <DropdownButton variant={props.otherOptions?.map(x => x.value).includes(props.state) ? 'primary' : 'outline-primary'} as={ButtonGroup} id="dropdown-basic-button" title={props.otherOptions?.map(x => x.value).includes(props.state) ? props.state : (props.otherOptionsDefaultLabel || 'Other')} onSelect={(eventKey) => props.setState(eventKey)}>
                            {
                                props.otherOptions?.map((otherOptionObj, idx) =>
                                    <Dropdown.Item id={`radio-${otherOptionObj.value}`} eventKey={otherOptionObj.value} key={`${otherOptionObj.label}${otherOptionObj.value}${idx}`}>{otherOptionObj.label}</Dropdown.Item>
                                )
                            }
                        </DropdownButton>}
                </ButtonGroup>
            </>
            : <>empty</>
    )
}

export default CollapsedRadioGroup