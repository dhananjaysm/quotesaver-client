import "./profilecard.css";
const ProfileCard = () => {
  return (
    <div className="profile">
      <div className="profile_info break-words">
        <div className="profile_banner"></div>
        <a href="#" style={{ display: "block", textAlign: "center" }}>
          <div>
            <img src="/profile.jpg" className="profile_img" />
          </div>
          <div className="user_name">Dhananjay Singh</div>
        </a>
        <p className="user_job">Full Stack JS Developer</p>
      </div>
      <div className="connections">
        <a href="#">
          <div>
            <span>Connections</span>
            <span>Grow your network</span>
          </div>
          <div>
            <span>11</span>
          </div>
        </a>
      </div>
      <div className="premium_ad">
        <a href="#">Get Hired</a>
      </div>
      <div className="profile_myitems">
        <a href="#">My Items</a>
      </div>
    </div>
  );
};

export default ProfileCard;
