import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyModal from "./components/PrivacyModal";

import HomePage from "./pages/HomePage";
import SchemesPage from "./pages/SchemesPage";
import SchemeDetailPage from "./pages/SchemeDetailPage";
import AISuggestionsPage from "./pages/AISuggestionsPage";
import UserProfilePage from "./pages/UserProfilePage";
import DashboardPage from "./pages/DashboardPage";
import ApplicationStepPage from "./pages/ApplicationStepPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [privacyOpen, setPrivacyOpen] = useState(false);

  // User Profile State
  const [userProfile, setUserProfile] = useState({
    fullName: "Rajesh Sharma",
    age: 28,
    income: 250000,
    occupation: "Farmer",
    state: "Gujarat",
    category: "General",
    gender: "Male",
    aadhaar: "9876-5432-1098",
    mobile: "9876543210"
  });

  // Saved/Bookmarked Scheme IDs
  const [savedSchemes, setSavedSchemes] = useState(["ayushman-bharat", "pm-kisan"]);

  // Submitted Applications list
  const [applications, setApplications] = useState([
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
  ]);

  const handleToggleSave = (schemeId) => {
    setSavedSchemes((prev) =>
      prev.includes(schemeId) ? prev.filter((id) => id !== schemeId) : [...prev, schemeId]
    );
  };

  const handleAddApplication = (newApp) => {
    setApplications((prev) => [newApp, ...prev]);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
        savedCount={savedSchemes.length}
      />

      <main className="flex-grow-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                userProfile={userProfile}
                savedSchemes={savedSchemes}
                onToggleSave={handleToggleSave}
              />
            }
          />
          <Route
            path="/schemes"
            element={
              <SchemesPage
                userProfile={userProfile}
                savedSchemes={savedSchemes}
                onToggleSave={handleToggleSave}
              />
            }
          />
          <Route
            path="/schemes/:id"
            element={
              <SchemeDetailPage
                userProfile={userProfile}
                savedSchemes={savedSchemes}
                onToggleSave={handleToggleSave}
              />
            }
          />
          <Route
            path="/ai-suggestions"
            element={
              <AISuggestionsPage
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <UserProfilePage
                userProfile={userProfile}
                setUserProfile={setUserProfile}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardPage
                userProfile={userProfile}
                savedSchemes={savedSchemes}
                onToggleSave={handleToggleSave}
                applications={applications}
              />
            }
          />
          <Route
            path="/apply/:id"
            element={
              <ApplicationStepPage
                userProfile={userProfile}
                onAddApplication={handleAddApplication}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}
