import React from 'react';
import {  View, Text, Image, StyleSheet, Linking } from 'react-native';

import Card from '../Card/Card';
import CardItem from '../Card/CardItem';
import Button from '../Button';


const AlbumDetail = ({ album }) => {
    const { thumbnail_image, artist, title, image, url } = album;
    const { cardHeadar, artistImage, albumInfo, albumArtist, albumCover } = styles;

    return (
        <View>
            <Card>
                <CardItem>
                    <View style={cardHeadar}>
                        <Image source={{ uri: thumbnail_image }} style={ artistImage }/>
                    </View>                    
                    <View style={ albumInfo }>
                        <Text style={albumArtist}>{ title }</Text>
                        <Text>{ artist }</Text>
                    </View>                    
                </CardItem>
                <CardItem>
                    <Image resizeMode={'cover'} source={{ uri: image }} style={ albumCover }/>
                </CardItem>
                <CardItem>
                    <Button onPress={() => Linking.openURL(url)}>
                        Buy on Amazon >
                    </Button>
                </CardItem>               
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    cardHeadar: {
        marginRight: 10
    },
    artistImage: {
        width: 50, 
        height: 50
    },
    albumInfo: {
        justifyContent: 'space-around'
    },
    albumArtist: {
        fontSize: 18
    },
    albumCover: {
        width: '100%', 
        height: 300
    }
})

export default AlbumDetail;