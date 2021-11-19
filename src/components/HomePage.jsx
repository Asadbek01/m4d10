import Row from "react-bootstrap/Row";
import fetchApi from "../assets/js/api-helpers";
import Card from "./Card";
import { useState, useEffect } from "react";

const HomePage = () => {
  

  const [album, setAlbumtData] = useState([]);


  const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/";
  let albumID = "75621062";
  

   let fetchFunction = async () => {
    let getData = await fetchApi.fetchData(albumUrl, albumID);
    setAlbumtData(getData);
    console.log(`here is the alblum data`, album);
  };

  useEffect(() => {
    
    
  }, [fetchFunction()]);

  return (
    <div className="content-box px-4">
      <Row>
        <Card album={album} />
      </Row>
    </div>
  );
};

export default HomePage;
