import React, {useState, useEffect} from "react";
import axios from 'axios';
// import LineIcon from 'react-lineicons';

function Socialicons(props){
  const [socialLinks, setSocialLinks] = useState({});

  useEffect(() => {
    axios.get('/api/information')
      .then(response =>{
        setSocialLinks(response.data.socialLinks);
      })
  }, [])

  return (
    <div>social icons</div>
  );
}

export default Socialicons;
