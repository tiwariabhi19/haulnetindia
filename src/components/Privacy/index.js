import React from "react";
import Headers from "../Headers";
import Footer from "../Footer";

import "./index.css";

const Privacy = () => {
  return (
    <>
      <Headers />
      <section className="privacy-section">
        <div className="privacy-container">
          <h2>Privacy Policy</h2>
          <p>
            At Shiv Shakti Transport, we prioritize your privacy and are
            committed to safeguarding your personal information. This policy
            outlines how we collect, use, and protect your data.
          </p>
          <p>
            We only collect data that is necessary for providing our services
            and maintaining the security and efficiency of our platform. Rest
            assured, we do not share your data with third parties without your
            consent.
          </p>
          <p>
            If you have any concerns or inquiries regarding our privacy
            practices, please feel free to contact us at{" "}
            <a href="mailto:privacy@shivshaktitransport.com">
              privacy@shivshaktitransport.com
            </a>
            .
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;
