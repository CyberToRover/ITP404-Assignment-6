import React, { useState } from "react";
import { fetchMemberInfo, fetchMemberRepos } from "./GitHubAPI";

export default function MemberModals({ member, isFollowing, followMember, unfollowMember }) {
  const [memberInfo, setMemberInfo] = useState({});
  const [memberRepos, setMemberRepos] = useState([]);

  // display Member Profile Modal
  function MemberInfoModal() {
    fetchMemberInfo(member.login).then(response => setMemberInfo(response));
    window.jQuery(`#modal-member-info-${member.id}`).modal("show");
  }

  // display Member Repos Modal
  function MemberReposModal() {
    fetchMemberRepos(member.login).then(response => setMemberRepos(response));
    window.jQuery(`#modal-member-repos-${member.id}`).modal("show");
  }

  return (
    <>
      {/* Member Profile Card */}
      <div className="ui card aligned">
        <a
          className="ui image cursor-pointer"
          onClick={() => MemberInfoModal()}
        >
          <img src={member.avatar_url} alt={`${member.login}`} />
        </a>
        <div className="content">
          <a
            className="center aligned header cursor-pointer"
            onClick={() => MemberInfoModal()}
          >
            {member.login}
          </a>
        </div>
        <div className="button content">
          <div className="ui two buttons">
            <div
              className="ui primary button"
              onClick={() => MemberReposModal()}
            >
              Repos
            </div>
            {!isFollowing && (
              <button
                className="ui active button"
                onClick={() => followMember(member.id)}
              >
                <i className="user icon"></i>
                Follow
              </button>
            )}
            {isFollowing && (
              <button
                className="ui button"
                onClick={() => unfollowMember(member.id)}
              >
                <i className="user icon"></i>
                Unfollow
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Member Profile Modal */}
      <div id={`modal-member-info-${member.id}`} className="ui modal">
        <div className="image content">
          <div className="description">
            <table className="ui definition table">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{memberInfo.name}</td>
                </tr>
                <tr>
                  <td>Id</td>
                  <td>{memberInfo.id}</td>
                </tr>
                <tr>
                  <td>Company</td>
                  <td>{memberInfo.company}</td>
                </tr>
                <tr>
                  <td>Blog</td>
                  <td>{memberInfo.blog}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{memberInfo.location}</td>
                </tr>
                <tr>
                  <td>Bio</td>
                  <td>{memberInfo.bio}</td>
                </tr>
                <tr>
                  <td>Public_Repos</td>
                  <td>{memberInfo.public_repos}</td>
                </tr>
                <tr>
                  <td>Followers</td>
                  <td>{memberInfo.followers}</td>
                </tr>
                <tr>
                  <td>Following</td>
                  <td>{memberInfo.following}</td>
                </tr>
                <tr>
                  <td>Public_Gists</td>
                  <td>{memberInfo.public_gists}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="actions">
          <div className="ui primary deny button">Okay</div>
        </div>
      </div>

      {/* Member Repos Modal */}
      <div id={`modal-member-repos-${member.id}`} className="ui modal">
        <div className="scrolling content">
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Repos Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {memberRepos.map(memberRepo => (
                <tr>
                  <td data-label="Repository">
                    <a
                      href={memberRepo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {memberRepo.name}
                    </a>
                  </td>
                  <td data-label="Description">{memberRepo.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="actions">
          <div className="ui primary deny button">Okay</div>
        </div>
      </div>
    </>
  );
}
