import React, { useState } from 'react';
import './BasicForm.css';

export default function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "Male" // Default value
    });
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/success.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData)
        })
        .then(response => response.text())
        .then(data => {
            setResult(data);
        })
        .catch(error => {
            console.error("Error:", error);
            setResult("An error occurred");
        });
    }

    return (
        <div className='FORM'>
            <div className="formContainer">
                <h2>Personal Information Form</h2>
                <form onSubmit={handleSubmit}>
                    <h3>First Name</h3>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required/>
                    <h3>Last Name</h3>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required/>
                    <h3>Date of Birth</h3>
                    <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required/>
                    <h3>Gender :</h3>
                    <select id='gender' name='gender' value={formData.gender} onChange={handleChange} required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <h1>{result}</h1>
            </div>
        </div>
    );
}
