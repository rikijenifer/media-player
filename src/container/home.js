import './home.css'
import React from 'react'
import SVGIcon from '../asset/svg/svg'
import Genre1 from '../asset/genre-1.jpg'
import Genre2 from '../asset/genre-2.jpg'
import Genre3 from '../asset/genre-3.jpg'
import Genre4 from '../asset/genre-4.jpg'
import Album1 from '../asset/album-1.jpg'
import Album2 from '../asset/album-2.jpg'
import Album3 from '../asset/album-3.jpg'
import Album4 from '../asset/album-4.jpg'
import IconBrowse from '../asset/icon-browse.png'
import IconAnimated from '../asset/AnimatedMusic.gif'
import ImgAlbumSongs from '../asset/ImgAlbumSongs.jpg'

const Home = () => {

    const Setup = () => {
        return (
            <div className='container-Setup'>
                <div className='Txt-Menu'>
                    <a href='#'><p style={{color:'#fff', backgroundColor: '#15151e'}}>HOME</p></a>
                    <a href='#'><p>BROWSE</p></a>
                    <a href='#'><p>HEAR THIS</p></a>
                </div>
                <div className='line'>
                    <hr />
                </div>
                <div className='view-menu-music'>
                    <p className='title-music'>My Music</p>
                    <div>
                        <div className='view-icon'>
                            <SVGIcon.IconFavouriteTracks />
                            <a href='#'><p>Favourite Tracks</p></a>
                        </div>
                        <div className='view-icon'>
                            <SVGIcon.IconPlaylist />
                            <a href='#'><p>Playlist</p></a>
                        </div>
                        <div className='view-icon'>
                            <SVGIcon.IconAlbums />
                            <a href='#'><p>Albums</p></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    const Body = () => {
        return (
            <div className='container-Body'>
                <div className='header-banner'>
                   <div>
                       <img src={ImgAlbumSongs} className='album-song-img' alt=''/>
                        <div className='view-imganimated'>
                            <img src={IconAnimated} className='imganimated' alt=''/>
                        </div>
                   </div>
                   <div className='desc-play'>
                       <p className='title-play'>All I Want</p>
                       <p className='by-play'>by Kodaline</p>
                       <div className='view-icon-play'>
                           <SVGIcon.IconFavouriteTracks />
                           <SVGIcon.IconOnPlay />
                       </div>
                   </div>
                </div>
                <div className='genre'>
                    <div className='view-title-genre'>
                        <p className='title-genre'>BROWSE</p>
                        <img src={IconBrowse} className='icon-title-browse' alt=''/>
                    </div>
                    <p className='desc-genre'>Explore music, entertainment, and many more</p>
                    <div className='view-img-genre-music'>
                        <div className='view-card'>
                            <img src={Genre1} className='img-genre-music' alt=''/>
                            <p className='txt-genre' style={{marginLeft: 110}}>Populer</p>
                        </div>
                        <div className='view-card'>
                            <img src={Genre2} className='img-genre-music' alt=''/>
                            <p className='txt-genre' style={{marginLeft: 110}}>Indie</p>
                        </div>
                        <div className='view-card'>
                            <img src={Genre3} className='img-genre-music' alt=''/>
                            <p className='txt-genre' style={{marginLeft: 110}}>Pop</p>
                        </div>
                        <div className='view-card'>
                            <img src={Genre4} className='img-genre-music' alt=''/>
                            <p className='txt-genre' style={{marginLeft: 130}}>Rock</p>
                        </div>
                    </div>
                </div>
                <div className='playlist'>
                    <p className='title-genre'>Playlist picks</p>
                    <p className='desc-genre'>Chosen for you by our Editors</p>
                    <div className='view-img-album-music'>
                        <div>
                            <img src={Album1} className='img-album-music' alt=''/>
                            <p className='txt-album'>Hits of the Moment</p>
                            <p className='about-album'>60 tracks - 725,066 fans</p>
                        </div>
                        <div>
                            <img src={Album2} className='img-album-music' alt=''/>
                            <p className='txt-album'>New Dance</p>
                            <p className='about-album'>50 tracks - 114,577 fans</p>
                        </div>
                        <div>
                            <img src={Album3} className='img-album-music' alt=''/>
                            <p className='txt-album'>Wake up Hits</p>
                            <p className='about-album'>87 tracks - 72,705 fans</p>
                        </div>
                        <div>
                            <img src={Album4} className='img-album-music' alt=''/>
                            <p className='txt-album'>Pop Punk Heroes</p>
                            <p className='about-album'>92 tracks -35,619 fans</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='container-home'>
            <Setup />
            <Body />
        </div>
    )
}

export default Home