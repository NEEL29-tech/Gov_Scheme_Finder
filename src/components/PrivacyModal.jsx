import React from "react";

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content custom-modal-content p-2">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title fw-bold brand-font text-navy">
              <i className="bi bi-shield-check text-success me-2"></i>
              Citizen Data Privacy Policy
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body text-secondary small py-3" style={{ maxHeight: "65vh", overflowY: "auto" }}>
            <h6>1. Data Collection & Usage</h6>
            <p>
              GovSchemes Portal respects citizen privacy. Demographic information (such as age, annual income bracket, occupation, and state) entered into the AI Eligibility Checker or Citizen Profile is processed strictly for scheme evaluation and eligibility scoring.
            </p>

            <h6>2. Data Security & Storage</h6>
            <p>
              Your personal information and uploaded application documents remain stored locally in your browser workspace. We do not sell or monetize citizen data to third parties under any circumstances.
            </p>

            <h6>3. Direct Government Portal Redirection</h6>
            <p>
              When applying for a scheme, you are securely transferred to official national domain portals (.gov.in / .nic.in). Always ensure you verify official domain extension SSL certificates when submitting biometric or banking credentials.
            </p>

            <h6>4. Consent & Rights</h6>
            <p>
              You have full rights to clear, update, or remove your stored Citizen Profile details anytime via the Citizen Profile settings page.
            </p>
          </div>
          <div className="modal-footer border-0 pt-0">
            <button type="button" className="btn btn-gov-primary px-4" onClick={onClose}>
              I Understand & Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
