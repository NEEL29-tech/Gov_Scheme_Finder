import React, { useState } from "react";

export default function ContactPage() {
  const [feedback, setFeedback] = useState({ name: "", email: "", topic: "General Query", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container py-4">
      {/* Page Header */}
      <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <span className="badge bg-primary text-white mb-1 fw-bold">HELPLINE & SUPPORT</span>
            <h1 className="fw-extrabold brand-font text-navy mb-1">Citizen Support & Contact Directory</h1>
            <p className="text-muted small mb-0">Get 24x7 help for scheme verification, complaint registration, and district nodal officer assistance.</p>
          </div>
          <div className="col-md-4 text-md-end mt-2 mt-md-0">
            <div className="p-2 bg-success bg-opacity-10 text-success rounded-3 border border-success-subtle d-inline-block text-start">
              <span className="small text-muted d-block" style={{ fontSize: "0.7rem" }}>National Toll-Free Helpline</span>
              <strong className="fs-5"><i className="bi bi-telephone-fill me-1"></i> 1800-11-2001</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-lg-7">
          <div className="bg-white p-4 rounded-4 shadow-sm border">
            <h4 className="fw-bold brand-font text-navy mb-3">Send Query or Feedback</h4>

            {submitted ? (
              <div className="alert alert-success py-3 border-0">
                <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                <strong>Query Logged!</strong> Ticket ID: #G-89421. A Nodal Officer will respond within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Your Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={feedback.name}
                      onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-bold text-muted">Email / Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      value={feedback.email}
                      onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label small fw-bold text-muted">Topic</label>
                    <select
                      className="form-select"
                      value={feedback.topic}
                      onChange={(e) => setFeedback({ ...feedback, topic: e.target.value })}
                    >
                      <option value="General Query">General Scheme Query</option>
                      <option value="e-KYC Issues">PM-KISAN e-KYC or Aadhaar Issues</option>
                      <option value="Ayushman Card">Ayushman Bharat Card Status</option>
                      <option value="MUDRA Loan">PM MUDRA / Vishwakarma Loan Delay</option>
                      <option value="Technical Glitch">Portal Technical Issue</option>
                    </select>
                  </div>

                  <div className="col-md-12">
                    <label className="form-label small fw-bold text-muted">Your Query / Problem Description</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      value={feedback.message}
                      onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
                      required
                      placeholder="Specify your reference number or application details..."
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 pt-2 text-end">
                  <button type="submit" className="btn btn-gov-primary px-4 fw-bold">
                    <i className="bi bi-send-fill me-1"></i> Submit Query
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Nodal Officer Directory */}
        <div className="col-lg-5">
          <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
            <h5 className="fw-bold brand-font text-navy mb-3">Key Scheme Helplines</h5>

            <div className="d-flex flex-column gap-2 small">
              <div className="p-2 rounded bg-light border d-flex justify-content-between align-items-center">
                <span>PM-KISAN Helpline:</span>
                <strong className="text-primary"><i className="bi bi-telephone me-1"></i> 155261</strong>
              </div>

              <div className="p-2 rounded bg-light border d-flex justify-content-between align-items-center">
                <span>Ayushman Bharat (PM-JAY):</span>
                <strong className="text-primary"><i className="bi bi-telephone me-1"></i> 14555</strong>
              </div>

              <div className="p-2 rounded bg-light border d-flex justify-content-between align-items-center">
                <span>PM MUDRA Loan Portal:</span>
                <strong className="text-primary"><i className="bi bi-telephone me-1"></i> 1800-180-1111</strong>
              </div>

              <div className="p-2 rounded bg-light border d-flex justify-content-between align-items-center">
                <span>National Scholarship Portal:</span>
                <strong className="text-primary"><i className="bi bi-telephone me-1"></i> 0120-6619540</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
