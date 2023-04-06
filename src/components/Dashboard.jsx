import ChannelsComponent from './ChannelsComponent'
import FinancialComponent from './FinancialComponent'
import HoursComponent from './HoursComponent'
import PremiumComponent from './PremiumComponent'
import ScheduleComponent from './ScheduleComponent'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <FinancialComponent />
      <PremiumComponent />
      <HoursComponent />
      <ScheduleComponent />
      <ChannelsComponent />
    </div>
  )
}
export default Dashboard
