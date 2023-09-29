import axios from 'axios';
import React, { useState } from 'react';
import "./ServicePageStyles.css";
const ServicePage = () => {
    const [symptom, setSymptom] = useState('');
    const [disease, setDisease] = useState('');

    const handleInputChange = (e) => {
        setSymptom(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/predict', {
                symptom: symptom,
            });

            // Assuming your Flask API returns the disease as a property of the response data
            setDisease(response.data.disease);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="service-container">
            <h1>Service Page</h1>
            <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Enter the symptoms"
                        type="text"
                        value={symptom}
                        onChange={handleInputChange}
                    />

                <button type="submit">Submit</button>
            </form>
            {disease && <p>Result: {disease}</p>}
        </div>
    );
}

export default ServicePage;