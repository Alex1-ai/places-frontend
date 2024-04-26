import React, { useEffect, useState } from 'react'
import Card from './Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import api from '../services/api';


const CardList = () => {
    const [placesData, setPlacesData] = useState([])
    const [error , setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // Define a function to fetch data using Axios
    const fetchData = async () => {
        try {
          // Make a GET request using Axios
          const response = await api.getAllPlaces('places');
          // Set the data state with the response data
          setPlacesData({
            success: response.success,
            count: response.count,
            data: response.data,
          });
        //   setPlaces(response);
          console.log("DATA oOOOOOOOH  ", placesData)
          console.log(placesData)
        } catch (error) {
          // If an error occurs, set the error state
          console.log("ERROOOOOOOOOOOORRRR   ", error)
          setError(error);

        }finally{
          setLoading(false);
        }
      };

      // Call the fetchData function when the component mounts
      fetchData();


    },[])
  return (
    <>
     <Container >
        <Row>
        {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}

              {console.log(`Checking ${placesData}`)}
              {placesData.success && (<div className="fs-5 mb-3">Places Found: {placesData.data.length}</div>)}
              {
                placesData.success && (
                //    places.data
                  // timetable.map((item)=><TimeTableItem key={item.id} item={item} />
                  placesData.data.map((item)=><Card key={item._id} item={item} />
                  )

                )
              }

        </Row>

     </Container>

    </>
  )
}

export default CardList