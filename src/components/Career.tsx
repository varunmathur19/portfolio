import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Ritz Media World */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FULL STACK DEVELOPER</h4>
                <h5>Ritz Media World</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developed and deployed multiple full-stack web applications
              including Ritz Media World, Sanskar Realty, Novavista Education,
              and SayaHomes — handling responsive UI, REST APIs, admin
              dashboards, role-based authentication, CRM integration, and MySQL
              &amp; MongoDB database management.
            </p>
          </div>

          {/* Starx AI Technology */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Starx AI Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built Trinity-Network, a Telegram Mini App integrated with TON
              Wallet. Implemented Click Power, Auto-Tap earning systems, a
              30-day streak plan, leaderboard, multi-level referral system, and
              an AI-based chat earning feature.
            </p>
          </div>

          {/* Nexthikes IT Solutions */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Nexthikes IT Solutions</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on Talktoguruji — focused on frontend development and API
              integration, collaborating with backend developers to ensure
              seamless functionality across platforms.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;