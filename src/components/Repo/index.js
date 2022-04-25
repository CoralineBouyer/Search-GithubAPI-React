import PropTypes from 'prop-types';
import './styles.scss';
import { Card, Image } from 'semantic-ui-react';

function Repo({ full_name, owner, description }) {
  return (
    <Card>
      <Image src={owner.avatar_url} alt="" />
      <Card.Content>
        <Card.Header>{full_name}</Card.Header>
        <Card.Meta>{owner.login}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
}

Repo.propTypes = {
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Repo;
