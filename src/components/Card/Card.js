import React from 'react'

const Card = ({song}) => {
    return(
      <div className="col-md-4">
           <div className="card">
                <img src={song.ImageCover} alt={song.SongName} className="card-img-top" width="100"/>
                <div className="card-body">
                    <h4>{song.SongName} {song.ArtistName}</h4>
                    <p>{song.AlbumName} {song.Time} {song.Price}</p>
                </div>
            </div>
      </div>  
    )
}

export default Card