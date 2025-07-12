import React from 'react';
import '../../pages/styles/crimereportcard.css';

const CrimeReportCard = () => {
  return (
    <div className="container-fluid px-5 py-4 crime-report-ui">
      <div className="row g-4">
        {/* Left Panel */}
        <div className="col-md-6">
          <div className="bg-dark text-white rounded-4 p-4 mb-4">
            <img src="https://img.freepik.com/free-photo/black-white-vehicles-yellow-caution-tape-near-car-parking-lot-daytime-crime-scene_146671-16659.jpg?t=st=1746953565~exp=1746957165~hmac=c6f61e60d3c4106d1dbc3b3c52bbba1c50e6e1017f67d47a3df60ae0f53cf082&w=996" alt="Crime Badge" style={{ width: 30 }} />
            <h5 className="mt-3">Porto<br />Santo Stefano</h5>
            <p className="small mt-2">Via della Grotta, 54-23, 58019 Porto<br />
              Santo Stefano GR</p>
            <p className="small text-muted">Criminal Investigation Unit —<br /> Stefano Crime Bureau</p>
          </div>

          <div className="bg-light rounded-4 p-3 d-flex shadow-sm">
            <img
              src="https://img.freepik.com/free-photo/black-white-vehicles-yellow-caution-tape-near-car-parking-lot-daytime-crime-scene_146671-16659.jpg?t=st=1746953565~exp=1746957165~hmac=c6f61e60d3c4106d1dbc3b3c52bbba1c50e6e1017f67d47a3df60ae0f53cf082&w=996"
              alt="Crime Scene"
              className="rounded-3 me-3"
              style={{ width: '40%', height: 'auto' }}
            />
            <div>
              <h6>Burglary Case</h6>
              <p className="small text-muted">
                A break-in was reported in a luxury residence. Suspects fled the scene with valuables.
              </p>
              <div className="d-flex align-items-center gap-3 small text-muted">
                <span>🕵️‍♂️ 2 Suspects</span>
                <span>📁 Case ID: #4521</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-md-6 position-relative">
          <img
            src="https://img.freepik.com/premium-photo/close-up-soldier-pointing-gun_1048944-6824208.jpg?ga=GA1.1.855362730.1736223757&semt=ais_hybrid&w=740"
            alt="Victim or Scene"
            className="img-fluid rounded-4"
          />
          <div className="position-absolute top-0 end-0 m-3 bg-danger text-white rounded-pill px-3 py-1">
            <strong>Reward: $50,000</strong>
          </div>
          <div className="position-absolute bottom-0 start-0 m-3 bg-light rounded-pill px-3 py-1 small">
            📍 Via della Grotta, 54–23, Porto Santo Stefano GR
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeReportCard;
