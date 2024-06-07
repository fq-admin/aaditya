import React from 'react';
import './CustomerProfile.css';

const CustomerProfile = () => {
  return (
    <div className="container">
      {/* <div className='side'> */}
      <div className="sidebar">
        <div className="profile">
          <img src="anna.svg" alt="Anna George" />
          <h3>Anna George</h3>
          <p>User ID: 23556</p>
        </div>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Link Account</li>
            <li className="active">Customers</li>
            <li>Subscription</li>
            <li>Customer Care</li>
            <li>Settings</li>
          </ul>
        </nav>
        {/* </div> */}
      </div>
      <div className="content">
      <div className="main-content" >
        <button className="back-button">Back</button>
        <h2>Personal Details</h2>
        <div className="details">
          <div className="photo-section">
            <img src="image.svg" alt="Tomiwa Oyeledu Dolapo" />
            <p>Verification Photo</p>
          </div>
          <div className="info-section">
            {/* div with colmun with 50% */}
            <div className='inf'>
            <div className="info">
              <p><strong>Name:</strong> Tomiwa Oyeledu Dolapo</p>
              <p><strong>Gender:</strong> Female</p>
              <p><strong>Date of Birth:</strong> August 27th, 1999</p>
              <p><strong>Nationality:</strong> Nigerian</p>
            </div>
            <div className="address">
              <h3>Address</h3>
              <em>Address Line</em>
              <strong><p>No 35 Jimmy Ebi Street</p></strong>
              <em>City</em>
              <strong><p>Yenagoa</p></strong>
              <em>State</em>
              <strong><p>Bayelsa</p></strong>
              <em>Country</em>
              <strong><p>Nigeria</p></strong>
              </div>
            </div>
            {/* div with column with 50% */}
            <div className="contact">
              <h3>Contact Details</h3>
              <p><em>Phone Number:</em> <strong>09034867656</strong></p>
              <p><em>Email:</em> <strong>tomilola@me.com</strong></p>
            </div>
          </div>
        </div>
        <button className="upload-button">Document Upload</button>
        </div>
      </div>
      </div>
  );
};

export default CustomerProfile;



