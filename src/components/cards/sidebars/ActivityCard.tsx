import "./activitycard.css";
const ActivityCard = () => {
  return (
    <div className="activitycontainer">
      <div className="recent_activity">
        <span>Recent</span>
        <ul>
          <li>#design</li>
          <li>#design</li>
          <li>#design</li>
          <li>#design</li>
        </ul>
      </div>
      <div className="groups">
        <span>Groups</span>
        <ul className="">
          <li>React</li>
          <li>React</li>
          <li>React</li>
        </ul>
      </div>
      <div className="followed_hashtags">
        <span>Followd Hashtags</span>
        <ul>
          <li>#design</li>
          <li>#design</li>
          <li>#design</li>
          <li>#design</li>
        </ul>
      </div>
    </div>
  );
};

export default ActivityCard;
