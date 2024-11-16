import React from "react";

function UserList({ users, selectedUser, onSelectUser }) {
  return (
    <div className="user-list">
      <h3>Users</h3>
      <div className="users">
        {users.map((user) => (
          <div
            key={user._id}
            className={`user-item ${
              selectedUser?._id === user._id ? "selected" : ""
            }`}
            onClick={() => onSelectUser(user)}
          >
            <div className="user-avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.username} />
              ) : (
                <div className="avatar-placeholder">
                  {user.username.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <div className="user-info">
              <div className="username">{user.username}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
