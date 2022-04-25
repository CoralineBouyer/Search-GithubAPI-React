import PropTypes from 'prop-types';
import './styles.scss';
import { Form } from 'semantic-ui-react';

function Formulaire({ displayResults, newInputValue, value }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    displayResults();
    // Input.defaultValue = '';
  };

  const handleInput = (event) => {
    newInputValue(event.target.value);
  };

  return (
    <Form className="form" onSubmit={handleSubmit}>
      <Form.Field>
        <Form.Input
          icon="search"
          iconPosition="left"
          type="search"
          defaultValue={value}
          onChange={handleInput}
          placeholder="Quel dépôt recherchez-vous ?"
          aria-label="Le dépôt à rechercher"
        />
      </Form.Field>
    </Form>
  );
}

Formulaire.propTypes = {
  newInputValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  displayResults: PropTypes.func.isRequired,
};

export default Formulaire;
