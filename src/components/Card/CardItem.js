import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const CardItem = (props) => {
    return (
        <View style={styles.wrapper}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative',
        borderWidth: 1,

        // borderRadius: 2,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        // elevation: 1,
        // marginHorizontal: 5,
        // marginTop: 10
    }
})

export default CardItem;