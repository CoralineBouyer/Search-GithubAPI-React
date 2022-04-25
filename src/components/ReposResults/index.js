import PropTypes from 'prop-types';
import Repo from 'src/components/Repo';
import { Card } from 'semantic-ui-react';

import './styles.scss';

function ReposResults({ data }) {
  return (
    <Card.Group className="results">
      {data.map((oneData) => <Repo key={oneData.id} {...oneData} />)}
    </Card.Group>
  );
}

ReposResults.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ReposResults;
