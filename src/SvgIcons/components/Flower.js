import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgFlower(props) {
  if (props.xml) {
    return <SvgFlowerXml {...props} />;
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Circle
        cx={128}
        cy={128}
        r={28}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        d="M115.028 103.182C107.703 87.778 100 68.588 100 56a28 28 0 0156 0c0 12.588-7.703 31.779-15.028 47.182m-40.951 23.643c-17.002-1.358-37.473-4.282-48.375-10.576a28 28 0 0128-48.498c10.902 6.294 23.67 22.56 33.347 36.606m0 47.286c-9.677 14.046-22.445 30.312-33.347 36.606a28 28 0 01-28-48.498c10.902-6.294 31.373-9.218 48.375-10.576m40.951 23.643C148.297 168.222 156 187.412 156 200a28 28 0 01-56 0c0-12.588 7.703-31.779 15.028-47.182m40.951-23.643c17.002 1.358 37.473 4.282 48.375 10.576a28 28 0 01-28 48.498c-10.902-6.294-23.67-22.56-33.347-36.606m0-47.286c9.677-14.046 22.445-30.312 33.347-36.606a28 28 0 0128 48.498c-10.902 6.294-31.373 9.218-48.375 10.576"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
    </Svg>
  );
}

function SvgFlowerXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><circle cx="128" cy="128" r="28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M115.028 103.182C107.703 87.778 100 68.588 100 56a28 28 0 0 1 56 0c0 12.588-7.703 31.779-15.028 47.182m-40.951 23.643c-17.002-1.358-37.473-4.282-48.375-10.576a28 28 0 0 1 28-48.498c10.902 6.294 23.67 22.56 33.347 36.606m0 47.286c-9.677 14.046-22.445 30.312-33.347 36.606a28 28 0 0 1-28-48.498c10.902-6.294 31.373-9.218 48.375-10.576m40.951 23.643C148.297 168.222 156 187.412 156 200a28 28 0 0 1-56 0c0-12.588 7.703-31.779 15.028-47.182m40.951-23.643c17.002 1.358 37.473 4.282 48.375 10.576a28 28 0 0 1-28 48.498c-10.902-6.294-23.67-22.56-33.347-36.606m0-47.286c9.677-14.046 22.445-30.312 33.347-36.606a28 28 0 0 1 28 48.498c-10.902 6.294-31.373 9.218-48.375 10.576" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgFlower;
