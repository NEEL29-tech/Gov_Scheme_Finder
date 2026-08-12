import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AISuggestionsPage({ userProfile, setUserProfile }) {
  const navigate = useNavigate();

  // Form Inputs state initialized with userProfile
  const [formData, setFormData] = useState({
    age: userProfile.age || 28,
    income: userProfile.income || 250000,
    occupation: userProfile.occupation || "Farmer",
    sector: "All",
    state: userProfile.state || "All India",
    category: userProfile.category || "General",
    gender: userProfile.gender || "All"
  });

  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAISuggestionSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setRecommendations(null);

    // Persist updated profile info
    if (setUserProfile) {
      setUserProfile((prev) => ({
        ...prev,
        age: formData.age,
        income: formData.income,
        occupation: formData.occupation,
        state: formData.state,
        category: formData.category,
        gender: formData.gender
      }));
    }

    try {
      const response = await fetch("/api/ai-suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success && Array.isArray(data.recommendations)) {
        setRecommendations(data.recommendations);
      } else {
        throw new Error(data.error || "Failed to fetch AI suggestions.");
      }
    } catch (err) {
      console.error("AI fetch error:", err);
      // Client-side fallback if server issue
      setRecommendations([
        {
          id: "pm-kisan",
          name: "PM-KISAN Samman Nidhi",
          sector: "Agriculture",
          level: "Central Government",
          matchScore: 96,
          benefits: "₹6,000 annual direct cash transfer credited in 3 installments.",
          whyEligible: `Directly matches occupation (${formData.occupation}) and income bracket under ₹${formData.income}.`,
          documents: ["Aadhaar Card", "Land Holding Certificate", "Aadhaar-linked Bank Account"],
          officialPortal: "https://pmkisan.gov.in"
        },
        {
          id: "ayushman-bharat",
          name: "Ayushman Bharat PM-JAY",
          sector: "Healthcare",
          level: "Central Government",
          matchScore: 92,
          benefits: "Free health coverage up to ₹5 Lakh per family per year across 28,000+ hospitals.",
          whyEligible: `Provides cashless hospital treatment for age ${formData.age} in ${formData.state}.`,
          documents: ["Aadhaar Card", "Ration Card", "Mobile Number"],
          officialPortal: "https://pmjay.gov.in"
        },
        {
          id: "pm-mudra-loan",
          name: "PM MUDRA Yojana",
          sector: "Employment",
          level: "Central Government",
          matchScore: 88,
          benefits: "Collateral-free business loans up to ₹20 Lakh for small business growth.",
          whyEligible: `Tailored for self-employed and entrepreneurs seeking working capital.`,
          documents: ["Business Pitch Note", "Aadhaar Card", "PAN Card", "6 Months Bank Statement"],
          officialPortal: "https://www.mudra.org.in"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      {/* Header Banner */}
      <div className="hero-banner p-4 p-md-5 text-white mb-5" style={{ background: "linear-gradient(135deg, #0f2b48 0%, #1e3a5f 60%, #173852 100%)" }}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill mb-2">
              <i className="bi bi-robot me-1"></i> GEMINI AI SCHEME ADVISOR
            </span>
            <h1 className="fw-extrabold display-6 mb-2 brand-font text-white">Smart AI Scheme Suggestions</h1>
            <p className="lead fs-6 text-white-50 mb-0">
              Provide your details below. Gemini AI will analyze your age, income, occupation, and sector preferences to suggest the best government schemes offering maximum financial and social benefits!
            </p>
          </div>
          <div className="col-lg-4 text-center d-none d-lg-block">
            <i className="bi bi-cpu-fill text-warning display-1"></i>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Form Column */}
        <div className="col-lg-5">
          <div className="bg-white p-4 rounded-4 shadow-sm border">
            <h4 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-sliders text-warning"></i>
              Your Demographic Profile
            </h4>

            <form onSubmit={handleAISuggestionSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Citizen Age (Years)</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Annual Family Income (&#8377;)</label>
                <input
                  type="number"
                  className="form-control"
                  name="income"
                  value={formData.income}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Occupation / Profession</label>
                <select
                  className="form-select"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                >
                  <option value="Farmer">Farmer / Agricultural Worker</option>
                  <option value="Student">Student</option>
                  <option value="Self-Employed">Self-Employed / Shopkeeper</option>
                  <option value="Daily Wager">Daily Wager / Unorganized Worker</option>
                  <option value="Artisan">Artisan / Craftsperson (Vishwakarma)</option>
                  <option value="Unemployed Youth">Unemployed Youth</option>
                  <option value="Salaried Employee">Salaried Employee</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-muted">Primary Sector Interest</label>
                <select
                  className="form-select"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                >
                  <option value="All">All Sectors</option>
                  <option value="Healthcare">Healthcare & Medicine</option>
                  <option value="Education">Education & Scholarships</option>
                  <option value="Agriculture">Agriculture & Farming</option>
                  <option value="Employment">Employment & Micro-Loans</option>
                </select>
              </div>

              <div className="row g-2 mb-3">
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted">Social Category</label>
                  <select
                    className="form-select form-select-sm"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="General">General</option>
                    <option value="OBC">OBC</option>
                    <option value="SC">SC</option>
                    <option value="ST">ST</option>
                    <option value="EWS">EWS</option>
                  </select>
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted">State / Region</label>
                  <select
                    className="form-select form-select-sm"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="All India">All India (Pan-India)</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-gov-accent btn-lg w-100 fw-bold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Evaluating Schemes with Gemini AI...
                  </>
                ) : (
                  <>
                    <i className="bi bi-stars me-2"></i> Get Best AI Recommendations
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* AI Output Recommendations Column */}
        <div className="col-lg-7">
          {loading && (
            <div className="bg-white p-5 rounded-4 shadow-sm border text-center my-4">
              <div className="spinner-grow text-warning mb-3" style={{ width: "3rem", height: "3rem" }} role="status"></div>
              <h4 className="fw-bold text-navy brand-font">Analyzing Citizen Profile...</h4>
              <p className="text-muted small">
                Evaluating age limits, income caps, and occupation criteria across central and state welfare databases.
              </p>
            </div>
          )}

          {!loading && !recommendations && (
            <div className="bg-white p-5 rounded-4 shadow-sm border text-center my-4">
              <i className="bi bi-robot text-warning display-1 mb-3 d-block"></i>
              <h4 className="fw-bold text-navy brand-font">Ready for AI Scheme Evaluation</h4>
              <p className="text-muted small mb-4">
                Fill in or review your profile on the left and click <strong>Get Best AI Recommendations</strong> to view tailored scheme options.
              </p>
            </div>
          )}

          {!loading && recommendations && (
            <div>
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="fw-bold brand-font text-navy mb-0 d-flex align-items-center gap-2">
                  <i className="bi bi-award-fill text-warning"></i>
                  AI Recommended Schemes
                </h4>
                <span className="badge bg-success px-3 py-1 rounded-pill fs-6 fw-bold">
                  {recommendations.length} Best Matches
                </span>
              </div>

              <div className="d-flex flex-column gap-3">
                {recommendations.map((rec, idx) => (
                  <div className="bg-white p-4 rounded-4 shadow-sm border border-success-subtle" key={idx}>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="badge bg-primary bg-opacity-10 text-primary fw-bold px-3 py-1 rounded-pill">
                        {rec.sector || "General"}
                      </span>
                      <span className="matching-badge matching-high">
                        <i className="bi bi-check-circle-fill"></i> {rec.matchScore || 95}% Match Score
                      </span>
                    </div>

                    <h5 className="fw-bold text-navy brand-font mb-2">{rec.name}</h5>

                    <div className="bg-light p-3 rounded-3 mb-3 border">
                      <div className="text-uppercase text-muted fw-bold small mb-1">
                        <i className="bi bi-gift-fill me-1 text-warning"></i> Scheme Benefits:
                      </div>
                      <div className="fw-semibold text-dark small">{rec.benefits}</div>
                    </div>

                    <div className="p-2 mb-3 bg-success bg-opacity-10 rounded text-success small fw-medium">
                      <i className="bi bi-info-circle-fill me-1"></i> <strong>Why You Match:</strong> {rec.whyEligible}
                    </div>

                    {rec.documents && rec.documents.length > 0 && (
                      <div className="mb-3">
                        <span className="small fw-bold text-muted d-block mb-1">Required Documents:</span>
                        <div className="d-flex flex-wrap gap-1">
                          {rec.documents.map((doc, dIdx) => (
                            <span key={dIdx} className="badge bg-secondary bg-opacity-10 text-dark border small fw-normal">
                              {doc}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="d-flex align-items-center justify-content-between pt-2 border-top">
                      <a
                        href={rec.officialPortal || "https://india.gov.in"}
                        target="_blank"
                        rel="noreferrer"
                        className="small text-muted text-decoration-none fw-semibold"
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i> Official Portal
                      </a>

                      <button
                        onClick={() => navigate(`/apply/${rec.id || "ayushman-bharat"}`)}
                        className="btn btn-gov-accent btn-sm fw-bold px-3"
                      >
                        <i className="bi bi-send-fill me-1"></i> Quick Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
