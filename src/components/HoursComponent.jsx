import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {},
}

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 24 })),
      backgroundColor: 'rgba(217, 165, 33,0.8)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 24 })),
      backgroundColor: 'rgba(20, 9, 84, 0.784)',
    },
  ],
}

const HoursComponent = () => {
  return (
    <div className="bar-container">
      <Bar options={options} data={data} className="bar-component" />
    </div>
  )
}
export default HoursComponent
