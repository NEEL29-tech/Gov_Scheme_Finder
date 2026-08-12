import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { SCHEMES_DATA, calculateMatchScore } from "../data/schemesData";

export default function SchemeDetailPage({ userProfile, savedSchemes, onToggleSave }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const scheme = SCHEMES_DATA.find((s) => s.id === id) || SCHEMES_DATA[0];
  const isSaved = savedSchemes.includes(scheme.id);
  const matchPct = calculateMatchScore(userProfile, scheme);

  return (
    <div className="container py-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb small">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/schemes">Schemes Directory</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{scheme.title}</li>
        </ol>
      </nav>

      {/* Main Header Banner */}
      <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
              <span className={`badge ${scheme.level === "Central Government" ? "bg-primary" : "bg-warning text-dark"} px-3 py-1 rounded-pill fw-bold`}>
                {scheme.level}
              </span>
              <span className="badge bg-secondary bg-opacity-10 text-dark px-3 py-1 rounded-pill fw-bold">
                <i className="bi bi-tag-fill me-1 text-primary"></i> {scheme.sector}
              </span>
              {scheme.latestUpdate && (
                <span className="badge bg-danger bg-opacity-10 text-danger border border-danger-subtle px-3 py-1 rounded-pill fw-bold">
                  <i className="bi bi-bell-fill me-1"></i> Latest Update
                </span>
              )}
            </div>

            <h1 className="fw-extrabold brand-font text-navy mb-3 display-6">{scheme.title}</h1>
            <p className="lead text-secondary fs-6 mb-3">{scheme.fullDesc}</p>

            {scheme.latestUpdate && (
              <div className="alert alert-warning py-2 px-3 small border-0 d-flex align-items-center gap-2 mb-0">
                <i className="bi bi-info-circle-fill text-warning fs-5"></i>
                <div><strong>Note:</strong> {scheme.latestUpdate}</div>
              </div>
            )}
          </div>

          {/* Prominent Citizen Eligibility & Match Gauge Card */}
          <div className="col-lg-4">
            <div className="bg-light p-4 rounded-4 border text-center">
              <div className="text-uppercase text-muted fw-bold small mb-1">YOUR MATCHING STATUS</div>
              <div className="display-5 fw-extrabold text-success mb-2 brand-font">
                {matchPct}% Eligible
              </div>

              <div className="progress mb-3" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{ width: `${matchPct}%` }}
                ></div>
              </div>

              <div className="text-start small text-muted mb-3">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <span>Age Criteria ({scheme.eligibility.minAge}-{scheme.eligibility.maxAge} yrs):</span>
                  <strong className="text-success"><i className="bi bi-check-circle-fill"></i> Matched</strong>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <span>Income Limit (&le; &#8377;{scheme.eligibility.maxIncome.toLocaleString()}):</span>
                  <strong className="text-success"><i className="bi bi-check-circle-fill"></i> Matched</strong>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <span>Social Category / Profession:</span>
                  <strong className="text-success"><i className="bi bi-check-circle-fill"></i> Eligible</strong>
                </div>
              </div>

              <div className="d-grid gap-2">
                <button
                  onClick={() => navigate(`/apply/${scheme.id}`)}
                  className="btn btn-gov-accent btn-lg fw-bold shadow-sm"
                >
                  <i className="bi bi-send-fill me-2"></i> Start Application Now
                </button>

                <a
                  href={scheme.officialPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i> Jump to Official Govt Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED BREAKDOWN SECTIONS */}
      <div className="row g-4">
        {/* Left Column: Benefits & Application Instructions */}
        <div className="col-lg-8">
          {/* Section 1: Financial & Social Benefits */}
          <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
            <h4 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-gift-fill text-warning"></i>
              Key Benefits & Scheme Highlights
            </h4>
            <ul className="list-group list-group-flush">
              {Array.isArray(scheme.benefits) ? (
                scheme.benefits.map((benefit, idx) => (
                  <li key={idx} className="list-group-item bg-transparent px-0 py-2 d-flex align-items-start gap-2">
                    <i className="bi bi-check-circle-fill text-success fs-5 flex-shrink-0 mt-1"></i>
                    <span className="fw-medium text-dark">{benefit}</span>
                  </li>
                ))
              ) : (
                <li className="list-group-item bg-transparent px-0 py-2">
                  {scheme.benefits}
                </li>
              )}
            </ul>
          </div>

          {/* Section 2: Step-by-Step Application Instructions */}
          <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
            <h4 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-list-check text-primary"></i>
              Step-by-Step Application Guide
            </h4>
            <div className="timeline">
              {scheme.applicationSteps.map((step, idx) => (
                <div className="p-3 mb-2 rounded-3 bg-light border-start border-4 border-primary" key={idx}>
                  <div className="fw-semibold text-dark">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Required Documents & Helpline Support */}
        <div className="col-lg-4">
          {/* Required Documents Card */}
          <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
            <h5 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-file-earmark-text-fill text-danger"></i>
              Important Documents Required
            </h5>
            <ul className="list-unstyled mb-0">
              {scheme.documents.map((doc, idx) => (
                <li key={idx} className="mb-2 p-2 rounded bg-light border d-flex align-items-center gap-2 small fw-semibold text-secondary">
                  <i className="bi bi-file-earmark-check-fill text-success"></i>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Support & Helpline Card */}
          <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
            <h5 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-headset text-success"></i>
              Contact Support & Helplines
            </h5>
            <div className="small text-muted mb-3">
              Facing issues or need assistance with your application? Call the official toll-free helpline number:
            </div>
            <div className="p-3 bg-success bg-opacity-10 text-success rounded-3 border border-success-subtle fw-bold mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-telephone-fill fs-4"></i>
              <div>
                <div className="small text-uppercase text-muted" style={{ fontSize: "0.7rem" }}>Official Toll-Free Number</div>
                <div className="fs-5">{scheme.helpline}</div>
              </div>
            </div>

            <div className="d-grid">
              <Link to="/contact" className="btn btn-outline-primary btn-sm">
                <i className="bi bi-envelope-fill me-1"></i> Contact Nodal Officer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
