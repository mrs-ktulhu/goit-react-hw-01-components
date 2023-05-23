import PropTypes from "prop-types";
import './statistics.css';
import { getRandomColor } from "index";

export const Statistics = ({ statistic }) => (
  <section className="statistics">
    <h2 className="title">{statistic.title }</h2>

    <ul className="stat-list">
      {statistic.map(({id, label, percentage }) => {
        return (
          <li key={id} className="item" style={{ backgroundColor: getRandomColor() }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        )   
       })}
    </ul>
  </section>
)

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
};