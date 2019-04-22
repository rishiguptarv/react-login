import React from 'react';
import {TextInput} from 'react-native';

const Input = (props) => {
    return (
    < TextInput style={{marginTop: 100}}placeholder={props.placeholder} />
    );
}

export {Input};
