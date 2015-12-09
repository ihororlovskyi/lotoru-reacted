'use strict';

import React from 'react';

import { RaisedButton, Dialog, TextField } from 'material-ui';

const RegistrationPopup = React.createClass({

  render() {

    let autorizationActions = [
      <RaisedButton
        key={1}
        label="Отмена"
        secondary={true}
        onTouchTap={this._dismissPopup} />,

      <RaisedButton
        style={{ marginLeft: '10px' }}
        key={2}
        label="Войти"
        primary={true}
        onTouchTap={this._submitPopup} />
    ];

    return (
      <span>

        <RaisedButton
          style={{ marginRight: '10px' }}
          label="Pегистрация"
          primary={true}
          onTouchTap={this._showPopup} />

        <Dialog
          title="Быстрая регистрация"
          actions={autorizationActions}
          autoScrollBodyContent={true}
          contentStyle={{
            textAlign: 'center',
            maxWidth: '304px',
          }}
          ref="autorizationPopup" >

          <TextField
            fullWidth={true}
            floatingLabelText="Email"
            hintText="Введите Email" />

          <TextField
            fullWidth={true}
            floatingLabelText="Пароль"
            hintText="Придумайте пароль" />

        </Dialog>

      </span>
    );
  },

  _submitPopup() {
    console.log('Submitting');
  },

  _showPopup() {
    this.refs.autorizationPopup._show();
  },

  _dismissPopup() {
    this.refs.autorizationPopup._dismiss();
  },

});

export default RegistrationPopup;