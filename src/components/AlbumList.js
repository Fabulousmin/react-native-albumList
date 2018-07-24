import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  state = {
    albums: []
  }; // step1 initial state


    componentWillMount(){
       axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data})); //update albums
    }

    renderAlbums() {
      return this.state.albums.map(albums =>
        <AlbumDetail key={albums.title} album={albums}/>); //array helper
    }

    render() {
      console.log(this.state); //콘솔에 두번 출력됨.. 2번이상 실행되미 !!! setState 하면서 update발생
      return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
    }
};

export default AlbumList;
