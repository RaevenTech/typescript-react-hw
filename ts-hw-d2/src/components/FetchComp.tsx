import { useState , useEffect } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import classes from './FetchComp.module.css';

const FetchComp =() => {
    const [songs, setSongs] = useState([]);

    export interface Song {
        
    }

    useEffect(() => {
     fetchSongs()
    },[])

    const fetchSongs = async () => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
            if(response.ok) {
                let data = await response.json();
                setSongs(data);
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>   
        <h1>Music Search</h1>   
        <InputGroup>
           <InputGroup.Prepend className={classes.search}>
              <InputGroup.Text>Search</InputGroup.Text>
           </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" />
       </InputGroup>
       <p><small>Press enter to find search</small></p>
    </div>
  )
}

export default FetchComp