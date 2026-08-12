import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SCHEMES_DATA } from "../data/schemesData";

export default function ApplicationStepPage({ userProfile, onAddApplication }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const scheme = SCHEMES_DATA.find((s) => s.id === id) || SCHEMES_DATA[0];

  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: userProfile.fullName || "Rajesh Sharma",
    aadhaar: userProfile.aadhaar || "9876-5432-1098",
    mobile: userProfile.mobile || "9876543210",
    state: userProfile.state || "Gujarat",
    bankName: "State Bank of India (SBI)",
    accountNumber: "38910482019",
    ifscCode: "SBIN0001234",
    docAadhaarUploaded: true,
    docIncomeUploaded: true,
    agreeTerms: true
  });

  const [submittedRef, setSubmittedRef] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 100, behavior: "smooth" });
    } else {
      // Submit Application
      const randomRef = "GOV-2026-" + Math.floor(100000 + Math.random() * 900000);
      const newApp = {
        refNumber: randomRef,
        schemeId: scheme.id,
        schemeName: scheme.title,
        submissionDate: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
        status: "Under Verification",
        statusBadgeClass: "bg-warning text-dark",
        nextStep: "Verification Officer Assigned",
        progress: 40
      };

      if (onAddApplication) onAddApplication(newApp);
      setSubmittedRef(randomRef);
      setCurrentStep(4);
    }
  };

  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/schemes">Schemes Directory</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Application Submission</li>
        </ol>
      </nav>

      {/* Scheme Header Banner */}
      <div className="bg-primary bg-opacity-10 p-4 rounded-4 mb-4 border border-primary-subtle">
        <span className="badge bg-primary text-white mb-1 fw-bold">{scheme.level}</span>
        <h2 className="fw-extrabold brand-font text-navy mb-1">{scheme.title}</h2>
        <p className="text-muted small mb-0">Complete the 4-step digital application process for direct benefit transfer (DBT) credit.</p>
      </div>

      {/* STEP INDICATOR TIMELINE */}
      <div className="step-indicator px-2 mb-4">
        <div className={`step-item ${currentStep === 1 ? "active" : currentStep > 1 ? "completed" : ""}`}>
          <div className="step-number">
            {currentStep > 1 ? <i className="bi bi-check-lg"></i> : "1"}
          </div>
          <div className="small fw-bold text-navy">1. Personal Info</div>
        </div>

        <div className={`step-item ${currentStep === 2 ? "active" : currentStep > 2 ? "completed" : ""}`}>
          <div className="step-number">
            {currentStep > 2 ? <i className="bi bi-check-lg"></i> : "2"}
          </div>
          <div className="small fw-bold text-navy">2. Documents</div>
        </div>

        <div className={`step-item ${currentStep === 3 ? "active" : currentStep > 3 ? "completed" : ""}`}>
          <div className="step-number">
            {currentStep > 3 ? <i className="bi bi-check-lg"></i> : "3"}
          </div>
          <div className="small fw-bold text-navy">3. DBT Bank Info</div>
        </div>

        <div className={`step-item ${currentStep === 4 ? "active completed" : ""}`}>
          <div className="step-number">4</div>
          <div className="small fw-bold text-navy">4. Slip Receipt</div>
        </div>
      </div>

      {/* STEP CONTENT CONTAINER */}
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-4">
            {/* STEP 1: PERSONAL DETAILS */}
            {currentStep === 1 && (
              <div>
                <h4 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-person-lines-fill text-primary"></i>
                  Step 1: Citizen Personal Verification
                </h4>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Applicant Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Aadhaar Number (12-Digit)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="aadhaar"
                      value={formData.aadhaar}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Mobile Number (Aadhaar Seeded)</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">State of Domicile</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4 pt-3 border-top text-end">
                  <button onClick={handleNext} className="btn btn-gov-primary px-4 fw-bold">
                    Next Step: Upload Documents <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: DOCUMENTS UPLOAD */}
            {currentStep === 2 && (
              <div>
                <h4 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-file-earmark-arrow-up-fill text-danger"></i>
                  Step 2: Upload Scheme Documents
                </h4>

                <p className="text-muted small mb-4">
                  Please confirm required scanned original documents. Verification Officers review these files.
                </p>

                <div className="d-flex flex-column gap-3 mb-4">
                  {scheme.documents.map((doc, idx) => (
                    <div key={idx} className="p-3 border rounded-3 bg-light d-flex align-items-center justify-content-between flex-wrap gap-2">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-file-earmark-check-fill text-success fs-4"></i>
                        <div>
                          <div className="fw-bold text-dark">{doc}</div>
                          <div className="text-muted small" style={{ fontSize: "0.75rem" }}>PDF or JPG, Max 2MB</div>
                        </div>
                      </div>

                      <span className="badge bg-success bg-opacity-10 text-success border border-success-subtle px-3 py-2 fw-bold">
                        <i className="bi bi-check-lg me-1"></i> Verified & Uploaded
                      </span>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-between border-top pt-3">
                  <button onClick={() => setCurrentStep(1)} className="btn btn-outline-secondary">
                    Back
                  </button>
                  <button onClick={handleNext} className="btn btn-gov-primary px-4 fw-bold">
                    Next Step: Bank Account (DBT) <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: BANK DETAILS FOR DBT */}
            {currentStep === 3 && (
              <div>
                <h4 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-bank text-success"></i>
                  Step 3: Direct Benefit Transfer (DBT) Bank Account
                </h4>

                <div className="alert alert-info py-2 px-3 small border-0 d-flex align-items-center gap-2 mb-4">
                  <i className="bi bi-info-circle-fill text-primary fs-5"></i>
                  <div>
                    Financial benefits will be directly credited via Aadhaar Payment Bridge System (APBS) into this bank account.
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Bank Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Bank Account Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">IFSC Code</label>
                    <input
                      type="text"
                      className="form-control"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label small text-muted" htmlFor="agreeTerms">
                    I declare that all details provided are true to the best of my knowledge and I authorize verification via National Portal databases.
                  </label>
                </div>

                <div className="d-flex justify-content-between border-top pt-3">
                  <button onClick={() => setCurrentStep(2)} className="btn btn-outline-secondary">
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="btn btn-gov-accent btn-lg px-4 fw-bold shadow"
                    disabled={!formData.agreeTerms}
                  >
                    Submit Final Application <i className="bi bi-send-fill ms-1"></i>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: FINAL CONFIRMATION SLIP */}
            {currentStep === 4 && (
              <div className="text-center py-2">
                <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "72px", height: "72px", fontSize: "2.5rem" }}>
                  <i className="bi bi-check-circle-fill"></i>
                </div>

                <h3 className="fw-extrabold text-navy brand-font mb-1">Application Submitted Successfully!</h3>
                <p className="text-muted small mb-4">
                  Your application has been logged into the National Welfare Portal database.
                </p>

                {/* SLIP RECEIPT CARD */}
                <div className="bg-light p-4 rounded-4 border text-start mb-4 max-w-lg mx-auto position-relative">
                  <div className="d-flex align-items-center justify-content-between border-bottom pb-2 mb-3">
                    <div className="fw-bold brand-font text-navy">GovSchemes Acknowledgement Slip</div>
                    <span className="badge bg-warning text-dark fw-bold">Under Review</span>
                  </div>

                  <div className="row g-2 small mb-3">
                    <div className="col-6 text-muted">Application Ref No:</div>
                    <div className="col-6 fw-bold text-primary text-end font-monospace">{submittedRef}</div>

                    <div className="col-6 text-muted">Scheme Name:</div>
                    <div className="col-6 fw-bold text-dark text-end">{scheme.title}</div>

                    <div className="col-6 text-muted">Applicant Name:</div>
                    <div className="col-6 fw-semibold text-dark text-end">{formData.fullName}</div>

                    <div className="col-6 text-muted">Submission Date:</div>
                    <div className="col-6 text-dark text-end">{new Date().toLocaleDateString()}</div>
                  </div>

                  <div className="p-2 bg-white rounded border text-center">
                    <i className="bi bi-qr-code fs-1 text-dark d-block"></i>
                    <span className="small text-muted" style={{ fontSize: "0.7rem" }}>Scan QR to verify authentic government slip</span>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <button onClick={() => window.print()} className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-printer me-1"></i> Print / Save Slip PDF
                  </button>

                  <Link to="/dashboard" className="btn btn-gov-primary btn-sm px-4 fw-bold">
                    Go to Application Dashboard
                  </Link>

                  <a
                    href={scheme.officialPortal}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gov-accent btn-sm"
                  >
                    Jump to Official Govt Portal <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
