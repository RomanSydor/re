import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(item => (
          <li
            key={item.id}
            className={s.item}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
