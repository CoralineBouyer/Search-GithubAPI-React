import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import './styles.scss';

function Counter({ data, inputValue }) {
  return (
    <div className="counter">
      {inputValue !== '' && <Message>La recherche a donné {data} résultats</Message>}
    </div>
  );
}

Counter.propTypes = {
  data: PropTypes.number.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Counter;
