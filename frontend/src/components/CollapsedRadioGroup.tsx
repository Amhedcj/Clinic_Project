import React from 'react'
import { ButtonGroup, ToggleButton, DropdownButton, Dropdown, ButtonGroupProps, ColProps } from 'react-bootstrap'

type CollapsedRadioGroupProps = ButtonGroupProps & ColProps & {
    name: string;
    options: { value: string; label: string }[];
    // otherOptions?: { value: string; label: string }[];
    exposedOptions?: number;
    dropdownDefaultLabel?: string;
    state: any;
    setState: Function;
    groupVariant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
};

const clamp = (x: number, min: number, max: number) => Math.min(Math.max(x, min), max);

// INSTEAD OF NEEDING A mainOptions and otherOptions PARAMS, CAN CHANGE IT TO BE ONLY options AND ADD A NEW PARAM CALLED 'exposedOptions' (a number) to specify how many options 
// should be exposed to the left of the dropdown, all the options that come after that index/number of elements will be combined into the dropdown on the right

// [1, 2, 3, 4, 5, 6, 7]; len: 7
// exposedOptions: 3
// main : [1, 2, 3] slice(0, 3)
// other: [4, 5, 6]
function CollapsedRadioGroup(props: CollapsedRadioGroupProps) {
    const getMainOptions = () => (props.exposedOptions) ? props.options.slice(0, clamp(props.exposedOptions, 0, props.options.length)) : [];
    const getOtherOptions = () => (props.exposedOptions) ? props.options.slice(clamp(props.exposedOptions, 0, props.options.length)) : props.options;

    const currentOtherTitle = () => {
        if(getOtherOptions()?.map(x => x.value).includes(props.state)) {
            // Try to find the matching label for the current props.state value...
            for(const x of getOtherOptions()) {
                if(x.value === props.state) {
                    return x.label;
                }
            }

            // If can't find it, return the actual value itself
            return props.state;
        }
        else {
            return props.dropdownDefaultLabel || 'Other';
        }
    };

    return (
        ((getMainOptions() && getMainOptions().length > 0) || (getOtherOptions() && getOtherOptions().length > 0)) ?
            <>
                <ButtonGroup {...(props as ButtonGroupProps)}>
                    {/* Main Options */}
                    {
                        (props.options && props.options.length > 0 && 
                            (props.exposedOptions || 0) >= 0) && 
                        props.options?.map((mainOptionObj, idx) => (
                            idx < (props.exposedOptions || 0)
                            ?
                                <ToggleButton key={`${mainOptionObj.label}${mainOptionObj.value}${idx}`} id={`${props.name}-${mainOptionObj.value}`} type="radio" variant={`outline-${props.groupVariant ? props.groupVariant : 'primary'}`} name={props.name} value={mainOptionObj.value} checked={props.state === mainOptionObj.value} onChange={(e) => props.setState(e.currentTarget.value)}>
                                    {mainOptionObj.label}
                                </ToggleButton>
                            :
                                <></>
                        ))
                    }
                    
                    {/* Other Options dropdown */}
                    {(getOtherOptions() && getOtherOptions().length > 0) &&
                        <DropdownButton {...(props as {size: any})} variant={getOtherOptions()?.map(x => x.value).includes(props.state) ? props.groupVariant ? props.groupVariant : 'primary' : `outline-${props.groupVariant ? props.groupVariant : 'primary'}`} as={ButtonGroup} id="dropdown-basic-button" title={currentOtherTitle()} onSelect={(eventKey) => props.setState(eventKey)}>
                            {
                                getOtherOptions().map((otherOptionObj, idx) =>
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

/*


// Before making dynamic with the number of exposed options
import React from 'react'
import { ButtonGroup, ToggleButton, DropdownButton, Dropdown, ButtonGroupProps, Row, Col, ColProps } from 'react-bootstrap'

type CollapsedRadioGroupProps = ButtonGroupProps & ColProps & {
    name: string;
    mainOptions?: { value: string; label: string }[];
    otherOptions?: { value: string; label: string }[];
    exposedOptions?: number;
    otherOptionsDefaultLabel?: string;
    state: any;
    setState: Function;
};


// INSTEAD OF NEEDING A mainOptions and otherOptions PARAMS, CAN CHANGE IT TO BE ONLY options AND ADD A NEW PARAM CALLED 'exposedOptions' (a number) to specify how many options 
// should be exposed to the left of the dropdown, all the options that come after that index/number of elements will be combined into the dropdown on the right

function CollapsedRadioGroup(props: CollapsedRadioGroupProps) {
    const currentOtherTitle = () => {
        if(props.otherOptions?.map(x => x.value).includes(props.state)) {
            // Try to find the matching label for the current props.state value...
            for(const x of props.otherOptions) {
                if(x.value == props.state) {
                    return x.label;
                }
            }

            // If can't find it, return the actual value itself
            return props.state;
        }
        else {
            return props.otherOptionsDefaultLabel || 'Other';
        }
    };

    return (
        (props.mainOptions && props.mainOptions.length > 0) || (props.otherOptions && props.otherOptions.length > 0) ?
            <>
                <ButtonGroup {...(props as ButtonGroupProps)}>
                    {
                        (props.mainOptions && props.mainOptions.length > 0) &&
                        props.mainOptions?.map((mainOptionObj, idx) => (
                            <ToggleButton key={`${mainOptionObj.label}${mainOptionObj.value}${idx}`} id={`${props.name}-${mainOptionObj.value}`} type="radio" variant='outline-primary' name={props.name} value={mainOptionObj.value} checked={props.state === mainOptionObj.value} onChange={(e) => props.setState(e.currentTarget.value)}>
                                {mainOptionObj.label}
                            </ToggleButton>))
                    }

                    {(props.otherOptions && props.otherOptions.length > 0) &&
                        <DropdownButton {...(props as {size: any})} variant={props.otherOptions?.map(x => x.value).includes(props.state) ? 'primary' : 'outline-primary'} as={ButtonGroup} id="dropdown-basic-button" title={currentOtherTitle()} onSelect={(eventKey) => props.setState(eventKey)}>
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

*/