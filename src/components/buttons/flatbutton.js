import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const FlatBtn = (props) =>{
        return (

                <FlatButton
                    backgroundColor="#4FC3F7"
                    hoverColor="#03A9F4"
                    label={props.label}
                    type="submit"
                    onClick={props.handleClick}
                >
                </FlatButton>

        );
}

export default FlatBtn;