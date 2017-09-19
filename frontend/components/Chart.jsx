import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const data02 = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 500 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const data03 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 }
];

class Chart extends React.Component {
  state = {
    data: data01,
    activeIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.data === data01) {
        this.setState({ data: data02 });
      } else {
        this.setState({ data: data01 });
      }
    }, 3000);
  }

  handleMouseEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  }

  /**
   * @param {string} cx Horizontal center value
   * @param {string} cy Veritical center value
   */
  render() {
    return (
      <div>
        <PieChart width={$('#react-application').width()} height={$('#react-application').height()}>
          <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={data03} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" />
          <Pie data={this.state.data} cx="50%" cy="50%" innerRadius={90} outerRadius={120} fill="#8884d8" label>
            {this.state.data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

export default Chart;
