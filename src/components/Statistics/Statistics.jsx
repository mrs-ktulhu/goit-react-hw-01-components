import PropTypes from "prop-types";
import './statistics.css';
import { getRandomColor } from "index";

export const Statistics = ({ statistic, title }) => (
  <section className="statistics">
    {title && (<h2 className="title">{title}</h2>)}

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
  statistic: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
};