import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

export default function Icon(props) {
  return (
    <Image
      source={props.src}
      style={{
        height: props.size,
        width: props.size,
        tintColor: props.tintColor,
        resizeMode: 'contain',
      }}
    />
  );
}

Icon.propTypes = {
  src: PropTypes.any,
  size: PropTypes.number,
};
