import PropTypes from "prop-types";
import { getRandomColor } from "index";
import {StatisticsTitle,StatisticList,StatisticItem,StatisticLabel} from "./Statistics.styled"

export const Statistics = ({ statistic, title }) => (
  <section className="statistics">
    {title && (<StatisticsTitle>{title}</StatisticsTitle>)}

    <StatisticList>
      {statistic.map(({id, label, percentage }) => {
        return (
          <StatisticItem key={id} style={{ backgroundColor: getRandomColor() }}>
            <StatisticLabel>{label}</StatisticLabel>
            <span className="percentage">{percentage}%</span>
          </StatisticItem>
        )   
       })}
    </StatisticList>
  </section>
)

Statistics.propTypes = {
  statistic: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }).isRequired).isRequired,
  title: PropTypes.string,
};