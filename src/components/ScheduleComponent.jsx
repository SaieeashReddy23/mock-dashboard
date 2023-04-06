import { MdAccessTimeFilled } from 'react-icons/md'

const ScheduleComponent = () => {
  return (
    <div className="schedule-container">
      <h4 className="schedule-header">Schedule</h4>
      <p className="seemore">see more</p>
      <div className="schedule">
        <div className="schedule-number">
          <span>05</span>
        </div>
        <div className="schedule-content">
          <h4> UX/UI Workshop</h4>
          <p>10 of 45 chapeters. Mrs. Wilson</p>
        </div>
        <div className="time">
          <span>
            <MdAccessTimeFilled />
          </span>
          14:00
        </div>
      </div>

      <div className="schedule">
        <div className="schedule-number">
          <span>06</span>
        </div>
        <div className="schedule-content">
          <h4> Interactive Design</h4>
          <p>5 of 30 chapters. Mrs. Wilson</p>
        </div>
        <div className="time">
          <span>
            <MdAccessTimeFilled />
          </span>
          14:00
        </div>
      </div>
    </div>
  )
}
export default ScheduleComponent
