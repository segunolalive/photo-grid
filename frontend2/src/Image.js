import React from 'react';
import Delete from './Delete';

const div = {
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  width: '50%',
  height: '50%',
  padding: 0,
  margin: 0,
  flexWrap: 'wrap'
};

const style = {
  largeDiv: {
    ...div,
    width: '100%',
    height: '100%'
  },
  div,
  img: {
    display: 'block',
    width: '100%',
    height: 'auto'
  },
  span: {
    display: 'inline-flex',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
    background: 'rgba(0, 0, 0, 0.6)',
    padding: '10px',
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    color: 'white'
  }
};
const Image = ({ incrementLikes, deleteImage, photo }) => {
  return (
    <figure style={photo.large ? style.largeDiv : style.div}>
      <div
        className="overlay"
        onClick={event => incrementLikes(event, photo.id)}
      >
        <div className="heart" />
      </div>
      <img src={photo.url} style={style.img} />
      <figcaption style={style.span}>
        Likes: {photo.likes} |{' '}
        <Delete deleteFunction={deleteImage} id={photo.id} />
      </figcaption>
    </figure>
  );
};

export default Image;
