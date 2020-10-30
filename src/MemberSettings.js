import React from "react";
import MemberModals from "./MemberModals";

export default function MemberSettings({
  members,
  followingMembers,
  followMember,
  unfollowMember,
}) {
  return (
    <div className="ui card">
      {members.map(member => (
        <MemberModals
          key={member.id}
          member={member}
          isFollowing={followingMembers.some(({ id }) => id === member.id)}
          followMember={followMember}
          unfollowMember={unfollowMember}
        />
      ))}
    </div>
  );
}
