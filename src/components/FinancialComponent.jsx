import { AiTwotoneSetting, AiFillBell } from 'react-icons/ai'
import { IoIosDownload } from 'react-icons/io'
import { BsUpload } from 'react-icons/bs'
import { RiGalleryUploadFill } from 'react-icons/ri'

const FinancialComponent = () => {
  return (
    <div className="finance-container">
      <h1 className="dashboard-header">Dashboard</h1>
      <p className="dashboard-sub-header">Welcome back , Robert!</p>

      <div className="icons-container ">
        <span className="bell-icon">
          <AiFillBell />
        </span>
        <span className="settings-icon">
          <AiTwotoneSetting />
        </span>
      </div>

      <div className="money-tracker-container">
        <div className="revenue-container">
          <span className="revenue-icon">
            <IoIosDownload />
          </span>
          <div className="revenue">
            <p>Revenue</p>
            <h3>$950.031</h3>
          </div>
        </div>

        <div className="expenses-container">
          <span className="expenses-icon">
            <RiGalleryUploadFill />
          </span>
          <div className="expense">
            <p>Expenses</p>
            <h3>$234,390</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FinancialComponent
