import React from 'react'

const Card = ({song}) => {
    return(
        <div>
            <img src={song.ImageCover} alt={song.SongName}/>
            <h4>{song.SongName} {song.ArtistName}</h4>
            <p>{song.AlbumName} {song.Time} {song.Price}</p>
        </div>
    )
}

export default Card