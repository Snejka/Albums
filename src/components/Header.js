import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = (props) => {
    const { header, text } = styles;
    return (
        <View style={ header }>
            <Text style={ text }>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 25,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    text: {
        fontSize: 20,
    }
});

export default Header;