import React from 'react';
import { PieChart, Pie } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400, label: 'Group A' },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const data02 = [
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
    data: data01
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: data02
      });
    }, 2000);
  }

  /**
   * @param {string} cx Horizontal center value
   * @param {string} cy Veritical center value
   */
  render() {
    return (
      <PieChart width={800} height={400}>
        <Pie data={data01} cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        <Pie data={data02} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" />
        <Pie data={this.state.data} cx="50%" cy="50%" innerRadius={90} outerRadius={120} fill="#8884d8" label />
      </PieChart>
    );
  }
}

export default Chart;
