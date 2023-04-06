import businesslogo from '../assets/businessLogo.webp'
import manPic from '../assets/man.jpg'
import { AiFillStar } from 'react-icons/ai'
import community from '../assets/community-bg-removed.png'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <img src={businesslogo} alt="logo" className="dashboard-logo img" />

      <img src={manPic} alt="profile-pic" className="img profile-pic" />
      <p className="profile-name">Robert grant </p>
      <p className="rating">
        <span>
          <AiFillStar />
        </span>
        4.8
      </p>

      <ul className="screens-list">
        <li className="active-screen">Dashboard</li>
        <li>Insights</li>
        <li>Reports</li>
        <li>Comments</li>
        <li>Channels</li>
      </ul>

      <img
        src={community}
        alt="community logo"
        className=" img community-logo"
      />
    </div>
  )
}
export default Sidebar
