import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data01 = [
  { name: 'Completed', value: 4 },
  { name: 'Todo', value: 10 },
  { name: 'Overdue', value: 15 },
  { name: 'In Progress', value: 10 }
];

const data02 = [
  { name: 'Completed', value: 7 },
  { name: 'Todo', value: 10 },
  { name: 'Overdue', value: 15 },
  { name: 'In Progress', value: 7 }
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
          <Pie data={this.state.data} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" />
          <Pie data={this.state.data} cx="50%" cy="50%" innerRadius={90} outerRadius={120} fill="#8884d8" label>
            {this.state.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

export default Chart;
