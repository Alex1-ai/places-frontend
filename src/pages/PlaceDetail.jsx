import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import { APIMEDIAURL, DEFAULTIMAGEURL } from '../utils/constants';
import Image from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PlaceDetail = () => {
    const { id } = useParams();
    const [place, setPlace] = useState(null);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        description: '',
        open_hours: ''
    });
    const navigate = useNavigate()


    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => {
      setFormData({
        name: place.name,
        location: place.location,
        description: place.description,
        open_hours: place.open_hours
    });

      setShowModal(true)


    };

    const handleUpdate = async () => {
        try {
            const response = await api.updatePlaceById(id, formData);
            setPlace(response.data);
            handleCloseModal();
        } catch (error) {
            setError('Failed to update place. Please try again later.');
            console.error('Error updating place:', error);
        }
    };


    // Assuming you have a function to delete a place
  const handleDelete = async() => {
    console.log(id)
    // Implement delete functionality
    try {
      await api.deletePlaceById(id);
      navigate('/')
  } catch (error) {
      console.error('Error fetching place:', error);
  }
  };

  // Assuming you have a function to edit a place
  const handleEdit = () => {
    // Implement edit functionality
    handleShowModal()
  };

    useEffect(() => {
        const fetchPlace = async () => {
            try {
                const response = await api.getPlaceById(id);
                setPlace(response.data);
            } catch (error) {
                console.error('Error fetching place:', error);
            }
        };

        fetchPlace();
    }, [id]);

    if (!place) {
        return (
            <>
                <Header />
                <Spacer />
                <h6>Loading Place Detail...</h6>
            </>
        );
    }
    const handleImageError = (e) => {
      e.target.src = `${DEFAULTIMAGEURL}/notfound.jpg`; // Replace the image source with the placeholder image
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
    };
    const {  image } = place;

    return (
        <>
            <Header />
            <Spacer />
            {error && <p>{error.message}</p>}
            <div className="container">
        <div className="row">
          <div className="col-md-6">
          <Image
                    className='img-fluid'
                    style={{ width: '400px', height: '300px' }}
                    src={`${APIMEDIAURL}/${image}`}
                    rounded
                    onError={handleImageError} // Handle image loading error
                />
          </div>
          <div className="col-md-6">
            <h2>{place.name}</h2>
            <p><strong>Location:</strong> {place.location}</p>
            <p><strong>Open Hours:</strong> {place.open_hours}</p>
            <p><strong>Description:</strong> {place.description}</p>
            <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <Spacer />
      {/* Edit Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Place</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter location" name="location" value={formData.location} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formOpenHours">
                            <Form.Label>Open Hours</Form.Label>
                            <Form.Control type="text" placeholder="Enter open hours" name="open_hours" value={formData.open_hours} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PlaceDetail;
