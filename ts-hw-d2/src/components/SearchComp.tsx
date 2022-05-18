import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap';
import classes from './SearchComp.module.css';
const SearchComp = () => {
  return (
    <div> 
         <h1>Music Search</h1>   
    <InputGroup>
       <InputGroup.Prepend className={classes.search}>
          <InputGroup.Text>Search</InputGroup.Text>
       </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
   </InputGroup>
   <p><small>Press enter to find search</small></p></div>
  )
}

export default SearchComp