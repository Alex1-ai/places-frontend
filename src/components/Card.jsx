import React from 'react'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { APIMEDIAURL } from '../utils/constants';


const Card = ({item}) => {
    const { name, image } =  item;
    console.log("item ", item);
    console.log(`${APIMEDIAURL}/${item.image}`)

    const handleImageError = (e) => {
        e.target.src = 'notfound.jpg'; // Replace the image source with the placeholder image
    }
  return (
    <>

        <Col s={6} md={4} className='mb-3'>
            <Link to={`/place-detail/${item._id}`} style={{textDecoration: 'none', color:'black' }}>
            <Image
                    className='img-fluid'
                    style={{ width: '400px', height: '300px' }}
                    src={`${APIMEDIAURL}/${image}`}
                    rounded
                    onError={handleImageError} // Handle image loading error
                />
                <div className='text-center'>
                     <p>{name}</p>
                </div>
            </Link>
        </Col>
        {/* <Col xs={6} md={4}>
          <Image className='ml-3' style={{'width':500 , 'height':500}} src="lagos.jpg" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image className='ml-3' style={{'width':500 , 'height':500}} src="lagos.jpg" thumbnail  />
        </Col> */}


    </>
  )
}

export default Card