import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { button, text } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={button}>
            <Text style={text}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        padding: 15,        
        borderColor: '#00695c',
        borderWidth: 1,
        backgroundColor: '#4db6ac',
        borderRadius: 3,
    },
    text: {
        color: 'white',
        fontWeight: '900',
        textAlign: 'center',
        textTransform: 'uppercase'
    }
});

export default Button;