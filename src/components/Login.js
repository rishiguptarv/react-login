import React, {Component} from 'react';
import {Input} from './common';
import {View, TextInput,Text} from 'react-native';
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';

const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
];

export default class Login extends Component {
    
    render(){
        return (
            <View>
                <Input placeholder={'XX-XXXXX-XXXXX'} />
                <Select options={techCompanies} />
            </View>
        );
    }
}