import { useState , useEffect } from 'react';
import classes from './FetchComp.module.css';
import SearchComp from './SearchComp';
import { Card, Button } from 'react-bootstrap';

export interface SearchResponse {
    data: Song[];
}

export interface Song {
    id:                      number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version:           string;
    link:                    string;
    duration:                number;
    rank:                    number;
    explicit_lyrics:         boolean;
    explicit_content_lyrics: number;
    explicit_content_cover:  number;
    preview:                 string;
    md5_image:               string;
    artist:                  Artist;
    album:                   Album;
    type:                    string;
}

export interface Album {
    id:           number;
    title:        string;
    cover:        string;
    cover_small:  string;
    cover_medium: string;
    cover_big:    string;
    cover_xl:     string;
    md5_image:    string;
    tracklist:    string;
    type:         AlbumType;
}

export enum AlbumType {
    Album = "album",
}

export interface Artist {
    id:             number;
    name:           string;
    link:           string;
    picture:        string;
    picture_small:  string;
    picture_medium: string;
    picture_big:    string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistType;
}



export enum ArtistType {
    Artist = "artist",
}



const FetchComp =() => {
    const [songs, setSongs] = useState<Song[]>([]);


    useEffect(() => {
     fetchSongs()
    },[])

    const fetchSongs = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
            if(response.ok) {
                let {data} = await response.json()as SearchResponse;
                setSongs(data);
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    }
console.log(songs);
  return (
    <div className={classes.fetch}>   
        <SearchComp />
        {songs.map((song) =>(
                   <Card  key={song.id} id="songCard" className="text-center">
                   <Card.Header>{song.album.title}</Card.Header>
                   <Card.Body>
                     <Card.Title>{song.title}</Card.Title>
                     <Card.Text>
                     <small>length: {song.duration}</small>
                     </Card.Text>
                     <Button variant="info">Favourites</Button>
                   </Card.Body>
                   <Card.Footer className="text-muted"><small>id: {song.id}</small></Card.Footer>
                 </Card>
        ))}
 
      
    </div>
  )
}

export default FetchComp