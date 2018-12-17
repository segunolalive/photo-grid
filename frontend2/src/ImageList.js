import React from 'react';
import Image from './Image';

export default class ImageList extends React.Component {
  state = { photos: [] };

  componentDidMount() {
    fetch('http://localhost:5000/photos')
      .then(response => response.json())
      .then(photos => this.setState({ photos }));
  }

  incrementLikes = (event, id) => {
    event.preventDefault();
    const updatedPhotos = this.state.photos.map(photo => {
      if (photo.id === id) {
        photo.likes += 1;
      }
      return photo;
    });
    this.setState({ photos: updatedPhotos });
  };

  deleteImage = (event, id) => {
    event.preventDefault();
    const photos = this.state.photos.filter(photo => photo.id !== id);
    this.setState({ photos });
  };

  renderImagesList = () => {
    const images = this.state.photos.map((photo, i) => {
      photo.large = i % 5 === 0;
      return (
        <Image
          key={photo.id}
          photo={photo}
          incrementLikes={this.incrementLikes}
          deleteImage={this.deleteImage}
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
