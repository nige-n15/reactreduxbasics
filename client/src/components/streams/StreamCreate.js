import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
    
    renderError({error, touched}) {
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        //console.log(formProps);
        //console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : '' }`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input autoComplete="off" {...input} />
                {this.renderError(meta)}
            </div>
            );
    }

    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

    
    render() {
        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}


export default connect(null, { createStream })(StreamCreate);