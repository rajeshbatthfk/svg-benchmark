import React from 'react';
import Icon from './Icon';

export function getPngIcons({id, size}) {
  let tintColor = getTintColor(`${id}`);
  return [
    <Icon
      size={size}
      tintColor={tintColor}
      key={`article-medium-${id}`}
      src={require('./assets/article-medium-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`baseball-${id}`}
      src={require('./assets/baseball-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`cpu-${id}`}
      src={require('./assets/cpu-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`discord-logo-${id}`}
      src={require('./assets/discord-logo-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`faders-${id}`}
      src={require('./assets/faders-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`flower-${id}`}
      src={require('./assets/flower-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`flower-lotus-${id}`}
      src={require('./assets/flower-lotus-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`hands-clapping-${id}`}
      src={require('./assets/hands-clapping-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`handshake-${id}`}
      src={require('./assets/handshake-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`poker-chip-${id}`}
      src={require('./assets/poker-chip-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`selection-foreground-${id}`}
      src={require('./assets/selection-foreground-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`selection-plus-${id}`}
      src={require('./assets/selection-plus-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`slack-logo-${id}`}
      src={require('./assets/slack-logo-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`sliders-${id}`}
      src={require('./assets/sliders-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`snowflake-${id}`}
      src={require('./assets/snowflake-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`soccer-ball-${id}`}
      src={require('./assets/soccer-ball-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`star-half-${id}`}
      src={require('./assets/star-half-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`sun-dim-${id}`}
      src={require('./assets/sun-dim-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`sun-${id}`}
      src={require('./assets/sun-light.png')}
    />,
    <Icon
      size={size}
      tintColor={tintColor}
      key={`user-circle-gear-${id}`}
      src={require('./assets/user-circle-gear-light.png')}
    />,
  ];
}

const tintColorCache = new Map();
function getTintColor(id) {
  if (tintColorCache.has(id)) {
    tintColorCache.get(id);
  }
  let color = getRandomColor();
  tintColorCache.set(id, color);
  return color;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
