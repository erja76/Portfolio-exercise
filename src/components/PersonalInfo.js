import React from "react";
import skydive from '../assets/images/skydive1.png'

const PersonalInfo = () => {
    return (
        <div className="personal-info container mt-5" id="personal-info">
            <div className="card mb-3 shadow">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={skydive} alt="sitfly"
                            className="img-fluid rounded-start"
                        />

                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">Personal Information</h2>
                            <p></p>
                            <p className="card-text">
                                <div style={{ height: '30px' }} />
                                <strong>Name: </strong> Erja Pisilä
                            </p>
                            <p className="card-text">
                                <strong>Email: </strong> erja22001@student.hamk.fi
                            </p>
                            <p className="card-text">
                                <strong>Motto: </strong> Life is what happens while you are busy studying.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;



