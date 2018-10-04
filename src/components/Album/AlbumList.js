import React, { Component } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        albums: [],
        isLoading: false
    }

    componentWillMount() {
        // console.log("Will mount + Fetch", this.state.albums)
        this.setState({ isLoading: true })
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(json => this.setState({ albums: [...json], isLoading: false }));        
    }

    render() {
        const { list } = styles;
        // console.log("Render", this.state.albums)
        // console.log(this.state.albums)
        return (
            <ScrollView style={list}>
                {this.state.isLoading && <ActivityIndicator size="large" color="#ffc107" />}
                {this.state.albums.map((album, i) => <AlbumDetail key={i} album={album} />)}                
            </ScrollView>
        )
    } 

    // componentDidMount() {
    //     console.log("Did mount", this.state.albums)
    // }
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 10
    }
});

export default AlbumList;