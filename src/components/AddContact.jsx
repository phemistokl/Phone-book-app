import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../actions';

import styles from './AddContact.less';

@connect(undefined, { addContact })
export default class AddContact extends Component {
    constructor() {
        super();

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handleContactAdd = this.handleContactAdd.bind(this);
    }

    state = {
        name: "",
        mail: ""
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleMailChange(e) {
        this.setState({
            mail: e.target.value
        });
    }

    handleContactAdd() {
        this.props.addContact(this.state.name, this.state.mail);
        this.setState({ name: "", mail: "" });
    }

    render() {
        return (
            <div className={styles.root}>
              <div className={styles.leftbox}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Введите имя..."
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <input
                    className={styles.second}
                    type="text"
                    placeholder="Введите e-mail..."
                    value={this.state.mail}
                    onChange={this.handleMailChange}
                />
              </div>
              <div className={styles.rightbox}>
                <button className={styles.add__button} disabled={!this.state.name || !this.state.mail} onClick={this.handleContactAdd}>
                  Создать
                </button>
              </div>
            </div>
        );
    }
}
