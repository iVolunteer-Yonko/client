import React from "react";

function GroupList({ groups, selectedGroup, onSelectGroup }) {
  return (
    <div className="group-list">
      <h3>Groups</h3>
      <div className="groups">
        {groups.map((group) => (
          <div
            key={group._id}
            className={`group-item ${
              selectedGroup?._id === group._id ? "selected" : ""
            }`}
            onClick={() => onSelectGroup(group)}
          >
            <div className="group-info">
              <div className="group-name">{group.name}</div>
              <div className="member-count">{group.members.length} members</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupList;
