import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {SvgXml} from 'react-native-svg';

function SvgStarHalf(props) {
  if (props.xml) {
    return <SvgStarHalfXml {...props} />;
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}>
      <Path fill="none" d="M0 0h256v256H0z" />
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={12}
        d="M128 24v165.448m92.16-72.863l8.718-7.256c5.942-4.946 2.875-14.809-4.76-15.304l-11.548-.75m-28.443 75.609l-3.314-13.036a8.757 8.757 0 012.837-8.876l10.032-8.35M178.19 91.044l-13.136-.853a8.418 8.418 0 01-7.248-5.35L152.707 72l-16.93-42.633a8.319 8.319 0 00-15.555 0L98.194 84.84a8.418 8.418 0 01-7.248 5.35l-59.064 3.834c-7.635.495-10.702 10.358-4.76 15.304l45.228 37.643a8.757 8.757 0 012.837 8.876l-13.514 53.16c-2.295 9.031 7.31 16.32 15.046 11.42l46.87-29.695a8.214 8.214 0 018.822 0l11.517 7.296m29.093 18.433l9.826 6.226c6.446 4.084 14.45-1.99 12.538-9.516l-2.774-10.912"
      />
    </Svg>
  );
}

function SvgStarHalfXml(props) {
  const xml =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M128 24v165.448m92.16-72.863 8.718-7.256c5.942-4.946 2.875-14.809-4.76-15.304l-11.548-.75m-28.443 75.609-3.314-13.036a8.757 8.757 0 0 1 2.837-8.876l10.032-8.35M178.19 91.044l-13.136-.853a8.418 8.418 0 0 1-7.248-5.35L152.707 72l-16.93-42.633a8.319 8.319 0 0 0-15.555 0L98.194 84.84a8.418 8.418 0 0 1-7.248 5.35l-59.064 3.834c-7.635.495-10.702 10.358-4.76 15.304l45.228 37.643a8.757 8.757 0 0 1 2.837 8.876l-13.514 53.16c-2.295 9.031 7.31 16.32 15.046 11.42l46.87-29.695a8.214 8.214 0 0 1 8.822 0l11.517 7.296m29.093 18.433 9.826 6.226c6.446 4.084 14.45-1.99 12.538-9.516l-2.774-10.912"/></svg>';
  return <SvgXml xml={xml} width={props.width} height={props.height} />;
}

export default SvgStarHalf;
