import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchOrganization } from "./GitHubAPI";
import MemberSettings from "./MemberSettings";
import { fetchFollowingMembers, followMember, unfollowMember } from "./api";

function App() {
  const organization = "emberjs";
  const [members, setMembers] = useState([]);
  const [followingMembers, setFollowingMembers] = useState([]);

  useEffect(() => {
    fetchFollowingMembers().then((response) => {
      setFollowingMembers(response);
    });

    fetchOrganization(organization).then((response) => setMembers(response));
  }, [organization]);

  function handleFollowMember(userId) {
    followMember(userId);
    setFollowingMembers(followingMembers.concat({ id: userId }));
  }

  function handleUnfollowMember(userId) {
    unfollowMember(userId);
    setFollowingMembers(followingMembers.filter(({ id }) => id !== userId));
  }

  return (
    <div className="text container" id="main-container">
      <h1>Rendering GitHub Members</h1>
      <h3>GitHub Organization: emberjs</h3>

      <div id="content-container">
        <MemberSettings
          members={members}
          followingMembers={followingMembers}
          followMember={handleFollowMember}
          unfollowMember={handleUnfollowMember}
        />
      </div>
    </div>
  );
}

export default App;
