import React, { useState } from 'react'
import { ToggleButton } from 'react-bootstrap';

function CheckButton(props: any) {
  const [b, setB] = useState(false);

  return (
            <ToggleButton {...props} type='checkbox' checked={b} onClick={() => setB(!b)} variant='outline-primary'>
                {props.children}
            </ToggleButton>
  )
}

export default CheckButton