import { AiOutlineDribbble } from 'react-icons/ai'
import { BsBehance } from 'react-icons/bs'
import { DiEnvato } from 'react-icons/di'
import { FaShopify } from 'react-icons/fa'
import { AiFillRightCircle } from 'react-icons/ai'

const ChannelsComponent = () => {
  return (
    <div className="channels-container">
      <div className="channel-text">
        <h4>Channels</h4>
        <p>Your statistics for 1week period</p>
      </div>

      <ul className="channels-list">
        <li className="channel">
          <span>
            <AiOutlineDribbble />
          </span>
          <h4>Dribble</h4>
          <p>@grantart</p>
          <div className="percentage">+2%</div>
        </li>
        <li className="channel">
          <span>
            <BsBehance />
          </span>
          <h4>Behance</h4>
          <p>@grantart</p>
          <div className="percentage">-7%</div>
        </li>
        <li className="channel">
          <span>
            <DiEnvato />
          </span>
          <h4>Envato</h4>
          <p>@robertgrantart</p>
          <div className="percentage">+4%</div>
        </li>
        <li className="channel">
          <span>
            <FaShopify />
          </span>
          <h4>Shopify</h4>
          <p>@robertgrant</p>
          <div className="percentage">+2%</div>
        </li>

        <li className="full-stats">
          <h4>
            Full <br /> Stats
          </h4>
          <span>
            <AiFillRightCircle />
          </span>
        </li>
      </ul>
    </div>
  )
}
export default ChannelsComponent
