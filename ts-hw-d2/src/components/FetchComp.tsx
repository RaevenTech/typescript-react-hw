import { useState , useEffect } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import classes from './FetchComp.module.css';

const FetchComp =() => {
    const [songs, setSongs] = useState([]);

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