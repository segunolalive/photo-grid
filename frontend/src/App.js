import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  state = { photos: [] };

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/photos')
    const photos = await response.json();
    this.setState({ photos });
  }

  incrementLikes = (event, id) => {
    event.preventDefault();
    const newPhotos = this.state.photos.map(photo => {
      if (photo.id === id) {
        photo.likes += 1;
      }
      return photo;
    });
    this.setState({ photos: newPhotos });
  };

  renderImagesList = () => {
    const images = this.state.photos.map((photo, i) => {
      photo.large = i % 5 === 0;
      return (
        <Image
          key={photo.id}
          photo={photo}
          incrementLikes={this.incrementLikes}
        />
      );
    });
    const imagelist = [];
    let key = 0;
    while (images.length) {
      imagelist.push(
        React.createElement('div', { className: 'single', key }, images.shift())
      );
      key++;
      imagelist.push(
        React.createElement(
          'div',
          { className: 'grid', key },
          images.splice(0, 4)
        )
      );
      key++;
    }
    return imagelist;
  };

  render() {
    return <main>{this.renderImagesList()}</main>;
  }
}

export default App;
