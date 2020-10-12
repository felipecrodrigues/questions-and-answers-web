import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap'

const QuestionAlert = (props) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState({});
  
    useEffect(() => {
        if (props && props.history && props.history.location && props.history.location.state) {
            const state = props.history.location.state;
            if (state.success === true) {
                setMessage({
                    Type: 'success',
                    Title: 'Success',
                    Description: 'Question saved!'
                });
            } else if (state.success === false) {
                setMessage({
                    Type: 'danger',
                    Title: 'Error',
                    Description: `Error saving question. Error message: ${state.error}`
                });
            }
        }
    }, [props]);

	return (
        <div>
            {show ?
                <Alert variant={message.Type} onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{message.Title}</Alert.Heading>                    
                    <p>{message.Description}</p>
                </Alert>
                : null
            }
        </div>
    );

};

export default QuestionAlert;