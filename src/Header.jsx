import Profile from "./Profile.jpg"; 


export default function Header() {
  return (
    <div className="header-wrapper">
      <header className="header">
        <img src={Profile} alt="profile" className="header-avatar" />
        <div className="header-info">
          <h1 className="header-title">Brain Boost</h1>
          <p className="header-status">last seen recently</p>
        </div>
      </header>
    </div>
  );
}