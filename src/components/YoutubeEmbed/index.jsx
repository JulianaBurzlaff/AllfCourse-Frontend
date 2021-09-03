import React from 'react';
import * as S from './styles';

const YoutubeEmbed = ({ embedId }) => (
  <S.Video>
    <iframe
      width="674"
      height="379"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </S.Video>
);

export default YoutubeEmbed;
