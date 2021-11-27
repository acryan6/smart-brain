import "./Profile.css";

export const Profile = ({ isProfileOpen, toggleModal }) => {
  return (
    <div className="profile-modal">
      <button onClick={toggleModal}>Click</button>
    </div>
  );
};
