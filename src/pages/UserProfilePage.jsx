import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserProfilePage({ userProfile, setUserProfile }) {
  const [profileForm, setProfileForm] = useState({ ...userProfile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserProfile(profileForm);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
        <div className="d-flex align-items-center gap-3">
          <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: "64px", height: "64px" }}>
            <i className="bi bi-person-fill fs-2"></i>
          </div>
          <div>
            <span className="badge bg-success px-3 py-1 rounded-pill mb-1 fw-bold">CITIZEN PROFILE</span>
            <h2 className="fw-extrabold brand-font text-navy mb-0">{profileForm.fullName || "Citizen Profile"}</h2>
            <p className="text-muted small mb-0">Manage your demographics to auto-calculate eligibility across all 100+ schemes.</p>
          </div>
        </div>
      </div>

      {savedSuccess && (
        <div className="alert alert-success alert-dismissible fade show d-flex align-items-center gap-2 mb-4" role="alert">
          <i className="bi bi-check-circle-fill text-success fs-4"></i>
          <div>
            <strong>Profile Successfully Saved!</strong> Your eligibility match percentages have been recalculated.
          </div>
          <button type="button" className="btn-close" onClick={() => setSavedSuccess(false)}></button>
        </div>
      )}

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="bg-white p-4 rounded-4 shadow-sm border">
            <h4 className="fw-bold brand-font text-navy mb-3">Demographic & Economic Details</h4>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={profileForm.fullName || ""}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">Aadhaar Number / Virtual ID</label>
                  <input
                    type="text"
                    className="form-control"
                    name="aadhaar"
                    placeholder="XXXX-XXXX-1234"
                    value={profileForm.aadhaar || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label small fw-bold text-muted">Age (Years)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    value={profileForm.age || ""}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label small fw-bold text-muted">Gender</label>
                  <select
                    className="form-select"
                    name="gender"
                    value={profileForm.gender || "Male"}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label small fw-bold text-muted">Social Category</label>
                  <select
                    className="form-select"
                    name="category"
                    value={profileForm.category || "General"}
                    onChange={handleChange}
                  >
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="EWS">EWS</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">Annual Family Income (&#8377;)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="income"
                    value={profileForm.income || ""}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">Occupation / Profession</label>
                  <select
                    className="form-select"
                    name="occupation"
                    value={profileForm.occupation || "Farmer"}
                    onChange={handleChange}
                  >
                    <option value="Farmer">Farmer / Agricultural Worker</option>
                    <option value="Student">Student</option>
                    <option value="Self-Employed">Self-Employed / Shopkeeper</option>
                    <option value="Daily Wager">Daily Wager / Unorganized Worker</option>
                    <option value="Artisan">Artisan / Craftsperson</option>
                    <option value="Unemployed Youth">Unemployed Youth</option>
                    <option value="Salaried Employee">Salaried Employee</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">State of Domicile</label>
                  <select
                    className="form-select"
                    name="state"
                    value={profileForm.state || "Gujarat"}
                    onChange={handleChange}
                  >
                    <option value="Gujarat">Gujarat</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label className="form-label small fw-bold text-muted">Mobile Number (Aadhaar Seeded)</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="mobile"
                    placeholder="9876543210"
                    value={profileForm.mobile || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-4 pt-3 border-top d-flex justify-content-end gap-2">
                <Link to="/schemes" className="btn btn-outline-secondary">
                  Cancel
                </Link>
                <button type="submit" className="btn btn-gov-primary px-4 fw-bold">
                  <i className="bi bi-save me-1"></i> Save Profile Details
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
            <h5 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-shield-lock-fill text-success"></i>
              Data Verification Status
            </h5>
            <div className="list-group list-group-flush small">
              <div className="list-group-item px-0 py-2 d-flex align-items-center justify-content-between">
                <span>Aadhaar e-KYC:</span>
                <span className="badge bg-success">Verified</span>
              </div>
              <div className="list-group-item px-0 py-2 d-flex align-items-center justify-content-between">
                <span>Income Certificate:</span>
                <span className="badge bg-success">Linked</span>
              </div>
              <div className="list-group-item px-0 py-2 d-flex align-items-center justify-content-between">
                <span>Bank Account (DBT):</span>
                <span className="badge bg-success">Active</span>
              </div>
            </div>
          </div>

          <div className="bg-primary bg-opacity-10 p-4 rounded-4 border border-primary-subtle text-center">
            <i className="bi bi-robot text-primary display-4 mb-2 d-block"></i>
            <h5 className="fw-bold text-navy brand-font">Check AI Suggestions</h5>
            <p className="text-muted small mb-3">
              Now that your profile is saved, launch AI Scheme Advisor to discover schemes tailored for you.
            </p>
            <Link to="/ai-suggestions" className="btn btn-gov-accent btn-sm fw-bold">
              Launch AI Advisor <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
