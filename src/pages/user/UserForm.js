import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const UserFormFunc = props => {
  return (
    <form>
      <div>
        <label>
          Name
        </label>
        <input
          name="name"
          component="input"
          type="text"
          placeholder="Name"
        />
        <label>
          Email
        </label>
        <input
          name="email"
          component="input"
          type="text"
          placeholder="Email"
        />
      </div>
    </form>
  );
};

const UserForm = (reduxForm({
    form:'formUser'
}))(UserFormFunc);

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(UserForm);
