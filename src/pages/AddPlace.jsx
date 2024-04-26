import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import AddPlaceForm from '../components/AddPlaceForm';
import ImageForm from '../components/ImageForm';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const AddPlace = () => {
    const [data, setData] = useState(null);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [openHours, setOpenHours] = useState('');
    const [image, setImage] = useState('');
    const [placeAdded, setPlaceAdded] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // Effect to clear messages after a certain time
    useEffect(() => {
        const timeout = setTimeout(() => {
            setErrorMessage('');
            setSuccessMessage('');
        }, 3000); // Adjust the time as needed
        return () => clearTimeout(timeout);
    }, [errorMessage, successMessage]);

    const handleAddPlace = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const placeData = {
                name: name,
                location: location,
                description: description,
                open_hours: openHours,
            };
            const response = await api.createPlace(placeData);
            setData(response.data);
            setSuccessMessage(`Place added successfully!`);
            setName('');
            setDescription('');
            setLocation('');
            setOpenHours('');
            setPlaceAdded(true);
        } catch (error) {
            setErrorMessage('Failed to add place: ' + error.response.data.error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleAddImage = async (e) => {
        e.preventDefault();
        if (!image) {
            setErrorMessage('Please select an image to upload.');
            return;
        }
        try {
            setIsSubmitting(true);
            const id = data._id;
            const formData = new FormData();
            formData.append('image', image);
            await api.uploadImage(id, formData);
            setImage('');
            navigate('/');
        } catch (error) {
            setErrorMessage('Failed to upload image: ' + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitting) {
        return <div>Loading........</div>;
    }

    return (
        <>
            <Header />
            <Alert variant="danger" show={errorMessage !== ''}>
                {errorMessage}
            </Alert>
            <Alert variant="success" show={successMessage !== ''}>
                {successMessage}
            </Alert>
            {!placeAdded ? (
                <AddPlaceForm
                    name={name}
                    location={location}
                    description={description}
                    openHours={openHours}
                    setName={setName}
                    setLocation={setLocation}
                    setDescription={setDescription}
                    setOpenHours={setOpenHours}
                    handleAddPlace={handleAddPlace}
                    isSubmitting={isSubmitting}
                />
            ) : (
                <ImageForm image={image} setImage={setImage} handleAddImage={handleAddImage} />
            )}
        </>
    );
};

export default AddPlace;
