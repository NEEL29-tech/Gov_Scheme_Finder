import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GOV_NEWS_UPDATES = [
  {
    id: 1,
    tag: "Urgent Update • Aug 2026",
    title: "Pradhan Mantri Awas Yojana 2.0 Released",
    desc: "Enhanced subsidies for urban housing now available. Direct benefit transfers increased by 20% for eligible first-time home buyers.",
    date: "August 2026",
    actionText: "Check Eligibility",
    actionLink: "/schemes?search=PM-KISAN",
    badgeBg: "bg-white/20",
    bgGradient: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #312e81 100%)"
  },
  {
    id: 2,
    tag: "New Expansion • 2026",
    title: "Ayushman Bharat PM-JAY Senior Citizen Health Expansion",
    desc: "Every citizen aged 70 years and above is now eligible for ₹5 Lakh annual cashless health coverage across 28,000+ empanelled hospitals.",
    date: "Cabinet Decision",
    actionText: "Get Ayushman Card",
    actionLink: "/schemes/ayushman-bharat",
    badgeBg: "bg-white/20",
    bgGradient: "linear-gradient(135deg, #059669 0%, #047857 50%, #022c22 100%)"
  },
  {
    id: 3,
    tag: "Budget Highlight • 2026",
    title: "PM MUDRA Loan Limit Doubled to ₹20 Lakh (Tarun Plus)",
    desc: "Non-farm micro-enterprises, artisans, and self-employed entrepreneurs can now access collateral-free business loans up to ₹20 Lakh.",
    date: "Union Budget 2026",
    actionText: "Explore MUDRA Loan",
    actionLink: "/schemes/pm-mudra-loan",
    badgeBg: "bg-white/20",
    bgGradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e3a8a 100%)"
  }
];

export default function NewsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GOV_NEWS_UPDATES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentNews = GOV_NEWS_UPDATES[currentIndex];

  return (
    <div className="mb-5">
      <div
        className="hero-banner p-4 p-md-5 text-white shadow-xl"
        style={{
          background: currentNews.bgGradient,
          transition: "background 0.5s ease",
          borderRadius: "24px"
        }}
      >
        <div className="row align-items-center g-4">
          <div className="col-lg-8">
            <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
              <span className="news-ticker-badge">
                <span className="pulse-dot"></span>
                OFFICIAL BULLETIN
              </span>
              <span
                className="badge rounded-pill px-3 py-1 fw-bold text-uppercase"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(6px)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em"
                }}
              >
                {currentNews.tag}
              </span>
            </div>

            <h1 className="fw-extrabold display-6 mb-3 brand-font text-white" style={{ lineHeight: 1.2 }}>
              {currentNews.title}
            </h1>

            <p className="lead fs-6 text-blue-100 mb-4 me-lg-4 opacity-90" style={{ fontSize: "0.95rem" }}>
              {currentNews.desc}
            </p>

            <div className="d-flex flex-wrap align-items-center gap-3">
              <Link
                to={currentNews.actionLink}
                className="btn btn-gov-accent btn-lg px-4 font-bold shadow-lg"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1e40af",
                  borderRadius: "12px",
                  fontSize: "0.88rem"
                }}
              >
                <i className="bi bi-arrow-right-circle me-1.5"></i>
                {currentNews.actionText}
              </Link>

              <Link
                to="/ai-suggestions"
                className="btn btn-lg px-4 text-white fw-bold"
                style={{
                  backgroundColor: "rgba(37, 99, 235, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "12px",
                  fontSize: "0.88rem"
                }}
              >
                <i className="bi bi-cpu me-1.5"></i>
                Read Eligibility Criteria
              </Link>
            </div>
          </div>

          <div className="col-lg-4 text-center d-none d-lg-block">
            <div
              className="p-4 rounded-3xl text-center"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "20px"
              }}
            >
              <i className="bi bi-bank fs-1 text-white opacity-75 mb-2 d-block"></i>
              <h5 className="fw-bold mb-1 text-white" style={{ fontSize: "1rem" }}>GovScheme India Updates</h5>
              <p className="small text-white-50 mb-3" style={{ fontSize: "0.78rem" }}>
                Real-time welfare disbursements, e-KYC status, & direct benefit transfers.
              </p>
              <div className="d-flex justify-content-center gap-2">
                {GOV_NEWS_UPDATES.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`btn btn-sm rounded-circle p-0 border-0 ${
                      idx === currentIndex ? "bg-white" : "bg-white-50"
                    }`}
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: idx === currentIndex ? "#ffffff" : "rgba(255, 255, 255, 0.3)"
                    }}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

