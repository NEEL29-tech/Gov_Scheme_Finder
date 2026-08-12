import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SchemeCard from "../components/SchemeCard";
import { SCHEMES_DATA, filterSchemes } from "../data/schemesData";

export default function SchemesPage({ userProfile, savedSchemes, onToggleSave }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Active Filters state
  const [selectedSector, setSelectedSector] = useState(searchParams.get("sector") || "All");
  const [selectedLevel, setSelectedLevel] = useState(searchParams.get("level") || "All");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [ageInput, setAgeInput] = useState(userProfile.age || "");
  const [incomeInput, setIncomeInput] = useState(userProfile.income || "");
  const [professionInput, setProfessionInput] = useState(userProfile.occupation || "All");
  const [categoryInput, setCategoryInput] = useState(userProfile.category || "All");

  // View All focus state for sectors
  const [viewAllSector, setViewAllSector] = useState(searchParams.get("sector") || null);

  useEffect(() => {
    const s = searchParams.get("sector");
    if (s) {
      setSelectedSector(s);
      setViewAllSector(s);
    }
    const q = searchParams.get("search");
    if (q) setSearchQuery(q);
    const l = searchParams.get("level");
    if (l) setSelectedLevel(l);
  }, [searchParams]);

  // Apply filter function
  const filteredList = filterSchemes(SCHEMES_DATA, {
    sector: selectedSector,
    level: selectedLevel,
    search: searchQuery,
    age: ageInput,
    income: incomeInput,
    profession: professionInput,
    category: categoryInput
  });

  // Group filtered schemes by Sector
  const sectorsList = ["Healthcare", "Education", "Agriculture", "Employment"];

  const handleSectorViewAll = (sectorName) => {
    setSelectedSector(sectorName);
    setViewAllSector(sectorName);
    setSearchParams({ sector: sectorName });
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  const handleResetFilters = () => {
    setSelectedSector("All");
    setSelectedLevel("All");
    setSearchQuery("");
    setAgeInput("");
    setIncomeInput("");
    setProfessionInput("All");
    setCategoryInput("All");
    setViewAllSector(null);
    setSearchParams({});
  };

  return (
    <div className="container py-4">
      {/* Page Header */}
      <div className="bg-primary bg-opacity-10 p-4 rounded-4 mb-4 border border-primary-subtle">
        <div className="row align-items-center">
          <div className="col-md-8">
            <span className="badge bg-primary text-white mb-2 px-3 py-1 rounded-pill fw-bold">
              GOVERNMENT SCHEMES DIRECTORY
            </span>
            <h1 className="fw-extrabold brand-font text-navy mb-2">Explore Government Schemes</h1>
            <p className="text-muted mb-0">
              Filter central and state schemes by eligibility criteria (age, income, occupation, and government level) with seamless single-click application access.
            </p>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <button onClick={handleResetFilters} className="btn btn-outline-danger btn-sm rounded-pill px-3">
              <i className="bi bi-arrow-counterclockwise me-1"></i> Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* FILTER PANEL SECTION */}
      <div className="filter-panel mb-5">
        <h5 className="fw-bold brand-font text-navy mb-3 d-flex align-items-center gap-2">
          <i className="bi bi-funnel-fill text-warning"></i>
          Integrated Eligibility & Criteria Filter
        </h5>

        <div className="row g-3">
          {/* Search Query */}
          <div className="col-md-4 col-lg-3">
            <label className="form-label small fw-bold text-muted">Search Scheme Name / Keyword</label>
            <div className="input-group input-group-sm">
              <span className="input-group-text bg-light"><i className="bi bi-search"></i></span>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Kisan, Scholarship..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Level Filter (Central vs State) */}
          <div className="col-md-4 col-lg-3">
            <label className="form-label small fw-bold text-muted">Government Level</label>
            <select
              className="form-select form-select-sm"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="All">All Levels (Central & State)</option>
              <option value="Central Government">Central Government Schemes</option>
              <option value="State Government">State Government Schemes</option>
            </select>
          </div>

          {/* Sector Category */}
          <div className="col-md-4 col-lg-2">
            <label className="form-label small fw-bold text-muted">Sector / Category</label>
            <select
              className="form-select form-select-sm"
              value={selectedSector}
              onChange={(e) => {
                setSelectedSector(e.target.value);
                setViewAllSector(e.target.value === "All" ? null : e.target.value);
              }}
            >
              <option value="All">All Sectors</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Agriculture">Agriculture / Farming</option>
              <option value="Employment">Employment & Loans</option>
            </select>
          </div>

          {/* Age Eligibility */}
          <div className="col-6 col-md-3 col-lg-2">
            <label className="form-label small fw-bold text-muted">Citizen Age (Years)</label>
            <input
              type="number"
              className="form-control form-control-sm"
              placeholder="e.g. 28"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
            />
          </div>

          {/* Max Annual Income */}
          <div className="col-6 col-md-3 col-lg-2">
            <label className="form-label small fw-bold text-muted">Annual Income (&#8377;)</label>
            <input
              type="number"
              className="form-control form-control-sm"
              placeholder="e.g. 250000"
              value={incomeInput}
              onChange={(e) => setIncomeInput(e.target.value)}
            />
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="d-flex align-items-center gap-2 mt-3 pt-3 border-top flex-wrap">
          <span className="small fw-bold text-muted me-1">Quick Sectors:</span>
          {["All", "Healthcare", "Education", "Agriculture", "Employment"].map((sec) => (
            <button
              key={sec}
              onClick={() => {
                setSelectedSector(sec);
                setViewAllSector(sec === "All" ? null : sec);
              }}
              className={`btn btn-sm rounded-pill ${
                selectedSector === sec ? "btn-gov-primary" : "btn-light border"
              }`}
            >
              {sec === "All" ? "All Sectors" : sec}
            </button>
          ))}
        </div>
      </div>

      {/* RESULT SCHEMES SECTION */}
      {selectedSector !== "All" || searchQuery || selectedLevel !== "All" ? (
        /* Single Sector or Filtered Search Result View */
        <div>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h3 className="fw-bold brand-font text-navy mb-0">
              {selectedSector !== "All" ? `${selectedSector} Schemes` : "Filtered Scheme Results"}
              <span className="badge bg-secondary ms-2 fs-6">{filteredList.length} Found</span>
            </h3>
            {selectedSector !== "All" && (
              <button
                onClick={() => {
                  setSelectedSector("All");
                  setViewAllSector(null);
                }}
                className="btn btn-outline-secondary btn-sm"
              >
                <i className="bi bi-grid-fill me-1"></i> View All Sector Sections
              </button>
            )}
          </div>

          {filteredList.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-4 border">
              <i className="bi bi-search text-muted display-4 mb-3 d-block"></i>
              <h4 className="fw-bold text-navy">No Schemes Found Matching Criteria</h4>
              <p className="text-muted small mb-4">
                Try relaxing your age, income, or sector filters to discover more government welfare schemes.
              </p>
              <button onClick={handleResetFilters} className="btn btn-gov-primary">
                Clear Filters & View All Schemes
              </button>
            </div>
          ) : (
            <div className="row g-4 mb-5">
              {filteredList.map((scheme) => (
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
          )}
        </div>
      ) : (
        /* Categorized Section View: Education, Agriculture, Health, Employment */
        <div>
          {sectorsList.map((sector) => {
            const sectorSchemes = filteredList.filter((s) => s.sector === sector);
            const latest3or4 = sectorSchemes.slice(0, 4);

            return (
              <div key={sector} className="mb-5">
                {/* Sector Header with "View All" button */}
                <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
                  <div className="d-flex align-items-center gap-2">
                    {sector === "Healthcare" && <i className="bi bi-heart-pulse-fill text-danger fs-3"></i>}
                    {sector === "Education" && <i className="bi bi-mortarboard-fill text-primary fs-3"></i>}
                    {sector === "Agriculture" && <i className="bi bi-flower1 text-success fs-3"></i>}
                    {sector === "Employment" && <i className="bi bi-briefcase-fill text-purple fs-3" style={{ color: "#9333ea" }}></i>}
                    <div>
                      <h3 className="fw-bold brand-font text-navy mb-0">{sector} Schemes</h3>
                      <span className="text-muted small">{sectorSchemes.length} Latest Active Schemes</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleSectorViewAll(sector)}
                    className="btn btn-gov-accent btn-sm rounded-pill px-3 fw-bold"
                  >
                    View All {sector} Schemes ({sectorSchemes.length}) <i className="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>

                {/* Cards for 3 - 4 latest schemes */}
                <div className="row g-4">
                  {latest3or4.map((scheme) => (
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
