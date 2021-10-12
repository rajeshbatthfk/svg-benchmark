import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgSoccerBall(props) {
  if (props.xml) {
    return <SvgSoccerBallXml {...props} />;
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
        r={96}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
      />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M128 86l-39.944 29.021 15.257 46.958h49.374l15.257-46.958L128 86zm0-22v22m35.016-47.413L128 64 92.984 38.587m-25.852 69.636l20.924 6.798M53.784 67.067l13.348 41.156-34.989 25.449m58.239 46.105l12.931-17.798m-56.197 17.775l43.266.023 13.391 41.141m61.845-41.141l-12.931-17.798m-.46 58.94l13.391-41.142 43.266-.023m-20.016-71.531l-20.924 6.798m55.913 18.652l-34.989-25.45 13.348-41.155"
      />
    </Svg>
  );
}

function SvgSoccerBallXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><circle cx="128" cy="128" r="96" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="m128 86-39.944 29.021 15.257 46.958h49.374l15.257-46.958L128 86zm0-22v22m35.016-47.413L128 64 92.984 38.587m-25.852 69.636 20.924 6.798M53.784 67.067l13.348 41.156-34.989 25.449m58.239 46.105 12.931-17.798m-56.197 17.775 43.266.023 13.391 41.141m61.845-41.141-12.931-17.798m-.46 58.94 13.391-41.142 43.266-.023m-20.016-71.531-20.924 6.798m55.913 18.652-34.989-25.45 13.348-41.155"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgSoccerBall;
