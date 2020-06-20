import React from 'react';
import { reduxForm, Field, submit } from 'redux-form';
import { connect } from 'react-redux';
import { submitUserAction } from '../../actions/user/UserAction';

const UserFormFunc = props => {

  const { handleSubmit } = props;
  const submit = (data, submitUserAction) => {
    submitUserAction(data)
  };

  return (
    <form 
      onSubmit={ handleSubmit(fields =>
        submit(fields, submitUserAction)
      )}
    >
      <div>
        <label>
          Name
        </label>
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Name"
        />
        <label>
          Email
        </label>
        <Field
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

const UserForm = (reduxForm({
    form:'formUser'
}))(UserFormFunc);

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {submitUserAction})(UserForm);
