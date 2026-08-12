import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NewsBanner from "../components/NewsBanner";
import SchemeCard from "../components/SchemeCard";
import { SCHEMES_DATA } from "../data/schemesData";

export default function HomePage({ userProfile, savedSchemes, onToggleSave }) {
  const navigate = useNavigate();

  const featuredCategories = [
    {
      title: "Healthcare",
      icon: "bi-heart-pulse-fill",
      colorClass: "cat-health",
      count: "15+ Central & State Schemes",
      desc: "Free medical cover, hospitalization assurance, and subsidized essential generic medicines.",
      sector: "Healthcare"
    },
    {
      title: "Education",
      icon: "bi-mortarboard-fill",
      colorClass: "cat-edu",
      count: "28+ Scholarships & Loans",
      desc: "Post-matric scholarships, collateral-free study loans, laptops, and digital learning tools.",
      sector: "Education"
    },
    {
      title: "Agriculture",
      icon: "bi-flower1",
      colorClass: "cat-agri",
      count: "20+ Kisan Welfare Schemes",
      desc: "Direct income support, low-interest credit cards, crop insurance, and solar pump grants.",
      sector: "Agriculture"
    },
    {
      title: "Employment",
      icon: "bi-briefcase-fill",
      colorClass: "cat-emp",
      count: "32+ Loans & Skilling",
      desc: "MUDRA micro-loans, PM Vishwakarma craft loans, MGNREGA job guarantee, and free skill training.",
      sector: "Employment"
    }
  ];

  // Pick top 4 flagship schemes for homepage highlight
  const topFlagshipSchemes = SCHEMES_DATA.slice(0, 4);

  return (
    <div className="container py-4">
      {/* 1. HERO SECTION: Official News Bulletin & Updates Poster */}
      <NewsBanner />

      {/* 2. FEATURED CATEGORIES SECTION */}
      <section className="mb-5">
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
          <div>
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-pill fw-bold text-uppercase" style={{ letterSpacing: "0.5px" }}>
              Sectoral Focus
            </span>
            <h2 className="fw-bold brand-font text-navy mb-0 mt-1">Featured Welfare Categories</h2>
          </div>
          <Link to="/schemes" className="btn btn-gov-outline">
            Browse All Categories <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>

        <div className="row g-4">
          {featuredCategories.map((cat, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div
                className="category-card"
                onClick={() => navigate(`/schemes?sector=${encodeURIComponent(cat.sector)}`)}
              >
                <div className={`category-icon-wrapper ${cat.colorClass}`}>
                  <i className={`bi ${cat.icon}`}></i>
                </div>
                <h4 className="fw-bold mb-1 brand-font">{cat.title}</h4>
                <div className="text-primary fw-semibold small mb-2">{cat.count}</div>
                <p className="text-muted small mb-3">{cat.desc}</p>
                <div className="text-decoration-none fw-bold small text-navy d-flex align-items-center">
                  Explore Schemes <i className="bi bi-chevron-right ms-1"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. AI ELIGIBILITY CALLOUT BANNER */}
      <section className="mb-5">
        <div
          className="p-4 p-md-5 rounded-3xl shadow-lg border-0 text-white"
          style={{
            background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 60%, #312e81 100%)",
            borderRadius: "24px"
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span
                className="badge px-3 py-1.5 rounded-pill mb-2 fw-bold text-uppercase d-inline-flex align-items-center gap-1.5"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(6px)", fontSize: "0.7rem", letterSpacing: "0.05em" }}
              >
                <i className="bi bi-cpu"></i> Gemini AI Intelligence
              </span>
              <h3 className="fw-bold brand-font mb-2 text-white">Not Sure Which Government Scheme Fits You?</h3>
              <p className="lead fs-6 text-blue-100 mb-0 opacity-90" style={{ fontSize: "0.95rem" }}>
                Input your age, income bracket, occupation, and state. Our AI Advisor matches your profile against 100+ central and state schemes to calculate your total financial benefits!
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link
                to="/ai-suggestions"
                className="btn btn-lg px-4 font-bold shadow-lg text-primary"
                style={{ backgroundColor: "#ffffff", color: "#1d4ed8", borderRadius: "12px", fontSize: "0.88rem" }}
              >
                Launch AI Assistant <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP SCHEMES HIGHLIGHT */}
      <section className="mb-5">
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
          <div>
            <span className="badge bg-success bg-opacity-10 text-success px-3 py-1 rounded-pill fw-bold text-uppercase">
              High Impact Initiatives
            </span>
            <h2 className="fw-bold brand-font text-navy mb-0 mt-1">Latest National Flagship Schemes</h2>
          </div>
          <Link to="/schemes" className="btn btn-gov-outline">
            View All Schemes <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>

        <div className="row g-4">
          {topFlagshipSchemes.map((scheme) => (
            <div className="col-lg-6" key={scheme.id}>
              <SchemeCard
                scheme={scheme}
                userProfile={userProfile}
                isSaved={savedSchemes.includes(scheme.id)}
                onToggleSave={onToggleSave}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="mb-5 py-4 bg-white rounded-4 p-4 border">
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="badge bg-secondary bg-opacity-10 text-dark px-3 py-1 rounded-pill fw-bold">
            SIMPLE 3-STEP PROCESS
          </span>
          <h2 className="fw-bold brand-font text-navy mt-2">How to Claim Scheme Benefits</h2>
        </div>

        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="p-3">
              <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px", fontSize: "1.75rem" }}>
                1
              </div>
              <h5 className="fw-bold brand-font">Search & Check Eligibility</h5>
              <p className="text-muted small">
                Filter schemes by your age, income, state, or occupation to find schemes you qualify for.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3">
              <div className="bg-warning bg-opacity-10 text-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px", fontSize: "1.75rem" }}>
                2
              </div>
              <h5 className="fw-bold brand-font">Gather Documents</h5>
              <p className="text-muted small">
                Review the exact required checklist (Aadhaar, Income Proof, Land Records) before applying.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3">
              <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "64px", height: "64px", fontSize: "1.75rem" }}>
                3
              </div>
              <h5 className="fw-bold brand-font">Direct Application & DBT</h5>
              <p className="text-muted small">
                Submit application online or jump directly to the official government portal for direct bank credit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
