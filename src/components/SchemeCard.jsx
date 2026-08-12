import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { calculateMatchScore } from "../data/schemesData";

export default function SchemeCard({ scheme, userProfile, isSaved, onToggleSave }) {
  const navigate = useNavigate();
  const matchPct = calculateMatchScore(userProfile, scheme);

  const getSectorBadge = (sector) => {
    switch (sector) {
      case "Healthcare":
        return (
          <span className="badge rounded-pill px-2.5 py-1 text-xs fw-bold" style={{ backgroundColor: "#ecfdf5", color: "#047857", border: "1px solid #a7f3d0" }}>
            <i className="bi bi-heart-pulse me-1"></i> Healthcare
          </span>
        );
      case "Education":
        return (
          <span className="badge rounded-pill px-2.5 py-1 text-xs fw-bold" style={{ backgroundColor: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" }}>
            <i className="bi bi-mortarboard me-1"></i> Education
          </span>
        );
      case "Agriculture":
        return (
          <span className="badge rounded-pill px-2.5 py-1 text-xs fw-bold" style={{ backgroundColor: "#fff7ed", color: "#c2410c", border: "1px solid #fed7aa" }}>
            <i className="bi bi-flower1 me-1"></i> Agriculture
          </span>
        );
      case "Employment":
        return (
          <span className="badge rounded-pill px-2.5 py-1 text-xs fw-bold" style={{ backgroundColor: "#faf5ff", color: "#7e22ce", border: "1px solid #e9d5ff" }}>
            <i className="bi bi-briefcase me-1"></i> Employment
          </span>
        );
      default:
        return (
          <span className="badge bg-slate-100 text-slate-700 rounded-pill px-2.5 py-1 text-xs fw-bold">
            {sector}
          </span>
        );
    }
  };

  return (
    <div className="scheme-card">
      <div>
        {/* Top Header Badges */}
        <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-1">
          <div className="d-flex align-items-center gap-1.5">
            {getSectorBadge(scheme.sector)}
            <span className={scheme.level === "Central Government" ? "badge-central" : "badge-state"}>
              {scheme.level === "Central Government" ? "Central Scheme" : "State Scheme"}
            </span>
          </div>

          <button
            onClick={() => onToggleSave && onToggleSave(scheme.id)}
            className={`btn btn-sm ${isSaved ? "text-danger" : "text-slate-400"}`}
            title={isSaved ? "Remove Bookmark" : "Save Scheme"}
            style={{ padding: "0 4px" }}
          >
            <i className={`bi ${isSaved ? "bi-bookmark-fill fs-5" : "bi-bookmark fs-5"}`}></i>
          </button>
        </div>

        {/* Scheme Title */}
        <h5 className="fw-bold mb-2 brand-font" style={{ color: "#0f172a", fontSize: "1.05rem" }}>
          <Link to={`/schemes/${scheme.id}`} className="text-decoration-none text-slate-900 hover-primary">
            {scheme.title}
          </Link>
        </h5>

        {/* Short Summary */}
        <p className="text-slate-500 small mb-3 opacity-90" style={{ minHeight: "38px", fontSize: "0.83rem", color: "#475569" }}>
          {scheme.shortDesc}
        </p>

        {/* Key Benefits snippet */}
        <div className="p-2.5 rounded-xl mb-3" style={{ backgroundColor: "#f8fafc", border: "1px solid #f1f5f9" }}>
          <div className="text-uppercase fw-bold text-slate-400 mb-1" style={{ fontSize: "0.68rem", letterSpacing: "0.05em" }}>
            <i className="bi bi-gift-fill me-1 text-primary" style={{ color: "#1d4ed8" }}></i> Main Benefit
          </div>
          <div className="fw-semibold text-slate-800 small" style={{ fontSize: "0.83rem", color: "#1e293b" }}>
            {Array.isArray(scheme.benefits) ? scheme.benefits[0] : scheme.benefits}
          </div>
        </div>
      </div>

      {/* Footer Section with Match Gauge & Apply Buttons */}
      <div>
        <div className="d-flex align-items-center justify-content-between mb-3 pt-2" style={{ borderTop: "1px solid #f1f5f9" }}>
          <span className="matching-badge matching-high">
            <i className="bi bi-check-circle-fill"></i> {matchPct}% Match
          </span>
          <span className="text-slate-400 small" style={{ fontSize: "0.78rem" }}>
            Income &le; &#8377;{(scheme.eligibility.maxIncome / 100000).toFixed(1)}L
          </span>
        </div>

        <div className="d-grid gap-2">
          <Link to={`/schemes/${scheme.id}`} className="btn btn-gov-outline btn-sm py-2">
            View Requirements & Guidelines
          </Link>

          <button
            onClick={() => navigate(`/apply/${scheme.id}`)}
            className="btn btn-gov-primary btn-sm py-2 fw-bold"
          >
            Apply Now <i className="bi bi-arrow-right ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

