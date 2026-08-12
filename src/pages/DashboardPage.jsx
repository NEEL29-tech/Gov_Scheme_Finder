import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SchemeCard from "../components/SchemeCard";
import { SCHEMES_DATA } from "../data/schemesData";

export default function DashboardPage({ userProfile, savedSchemes, onToggleSave, applications = [] }) {
  const navigate = useNavigate();

  const savedList = SCHEMES_DATA.filter((s) => savedSchemes.includes(s.id));

  // Default sample submitted application if empty
  const activeApplications = applications.length > 0 ? applications : [
    {
      refNumber: "GOV-2026-894210",
      schemeId: "pm-kisan",
      schemeName: "PM-KISAN Samman Nidhi",
      submissionDate: "10 August 2026",
      status: "Under Verification",
      statusBadgeClass: "bg-warning text-dark",
      nextStep: "District Agriculture Officer Verifying Khatauni Records",
      progress: 60
    },
    {
      refNumber: "GOV-2026-319504",
      schemeId: "ayushman-bharat",
      schemeName: "Ayushman Bharat PM-JAY",
      submissionDate: "02 August 2026",
      status: "Approved & Card Generated",
      statusBadgeClass: "bg-success",
      nextStep: "Download Ayushman Golden e-Card",
      progress: 100
    }
  ];

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div>
            <span className="badge bg-primary px-3 py-1 rounded-pill mb-1 fw-bold">SCHEME DASHBOARD</span>
            <h1 className="fw-extrabold brand-font text-navy mb-0">Citizen Scheme Dashboard</h1>
            <p className="text-muted small mb-0">Track active scheme applications, saved bookmarks, and direct benefit transfer (DBT) credit statuses.</p>
          </div>

          <Link to="/schemes" className="btn btn-gov-accent fw-bold">
            <i className="bi bi-plus-circle me-1"></i> Discover New Schemes
          </Link>
        </div>
      </div>

      {/* Stats Summary Bar */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="bg-white p-3 rounded-3 border d-flex align-items-center gap-3 shadow-sm">
            <div className="bg-primary bg-opacity-10 text-primary p-3 rounded-circle fs-3">
              <i className="bi bi-file-earmark-text-fill"></i>
            </div>
            <div>
              <div className="fs-4 fw-bold text-navy">{activeApplications.length}</div>
              <div className="small text-muted">Submitted Applications</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-3 rounded-3 border d-flex align-items-center gap-3 shadow-sm">
            <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-circle fs-3">
              <i className="bi bi-bookmark-star-fill"></i>
            </div>
            <div>
              <div className="fs-4 fw-bold text-navy">{savedSchemes.length}</div>
              <div className="small text-muted">Saved Bookmarks</div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white p-3 rounded-3 border d-flex align-items-center gap-3 shadow-sm">
            <div className="bg-success bg-opacity-10 text-success p-3 rounded-circle fs-3">
              <i className="bi bi-currency-rupee"></i>
            </div>
            <div>
              <div className="fs-4 fw-bold text-success">&#8377;11,000</div>
              <div className="small text-muted">Estimated Annual Benefit Value</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: ACTIVE APPLICATIONS TRACKER */}
      <div className="bg-white p-4 rounded-4 shadow-sm border mb-5">
        <h4 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
          <i className="bi bi-clock-history text-primary"></i>
          Active Application Tracking
        </h4>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light small text-muted text-uppercase">
              <tr>
                <th>Reference No.</th>
                <th>Scheme Name</th>
                <th>Submitted On</th>
                <th>Current Status</th>
                <th>Progress Stage</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {activeApplications.map((app, idx) => (
                <tr key={idx}>
                  <td>
                    <strong className="text-primary font-monospace">{app.refNumber}</strong>
                  </td>
                  <td>
                    <span className="fw-semibold text-dark">{app.schemeName}</span>
                  </td>
                  <td className="small text-muted">{app.submissionDate}</td>
                  <td>
                    <span className={`badge ${app.statusBadgeClass} px-3 py-1 rounded-pill fw-bold`}>
                      {app.status}
                    </span>
                  </td>
                  <td style={{ minWidth: "180px" }}>
                    <div className="progress" style={{ height: "6px" }}>
                      <div
                        className={`progress-bar ${app.progress === 100 ? "bg-success" : "bg-warning"}`}
                        role="progressbar"
                        style={{ width: `${app.progress}%` }}
                      ></div>
                    </div>
                    <span className="small text-muted" style={{ fontSize: "0.72rem" }}>{app.nextStep}</span>
                  </td>
                  <td className="text-end">
                    <button
                      onClick={() => navigate(`/apply/${app.schemeId || "pm-kisan"}`)}
                      className="btn btn-sm btn-outline-primary me-1"
                    >
                      View Slip
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2: SAVED SCHEMES */}
      <div className="mb-4">
        <h4 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
          <i className="bi bi-bookmark-fill text-warning"></i>
          Your Saved / Bookmarked Schemes
        </h4>

        {savedList.length === 0 ? (
          <div className="bg-white p-5 rounded-4 border text-center">
            <i className="bi bi-bookmark text-muted display-4 mb-2 d-block"></i>
            <h5 className="fw-bold text-navy">No Saved Schemes Yet</h5>
            <p className="text-muted small mb-3">
              Click the bookmark icon on any scheme card to save it for quick review later.
            </p>
            <Link to="/schemes" className="btn btn-gov-primary btn-sm">
              Explore Schemes Directory
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {savedList.map((scheme) => (
              <div className="col-lg-6" key={scheme.id}>
                <SchemeCard
                  scheme={scheme}
                  userProfile={userProfile}
                  isSaved={true}
                  onToggleSave={onToggleSave}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
