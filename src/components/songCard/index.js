import React from 'react';
import AlbumImage from './albumImage';
import AlbumInfo from './albumInfo';
import "./songCard.css";

export default function SongCard({ album }) {
	console.log(album);
  return (
	<div className='songCard-body'>
		<AlbumImage url={album?.images[0]?.url} />
		<AlbumInfo album={album} />
	</div>
  )
}
