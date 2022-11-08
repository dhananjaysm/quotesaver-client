import ActivityCard from "../cards/sidebars/ActivityCard";
import ProfileCard from "../cards/sidebars/ProfileCard";

const LeftSidebarComponent = () => {
  return (
    <div className="leftcontainer">
      {/* Profile Card */}
      <ProfileCard />
      {/* Activity Card */}
      <ActivityCard />
    </div>
  );
};

export default LeftSidebarComponent;
