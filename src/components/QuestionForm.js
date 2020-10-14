import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import QuestionService from '../services/QuestionService';
import { useAlert } from 'react-alert'

const QuestionForm = (props) => {
    let initialState = {
        Id: null,
        Question: null,
        Answer: null
    };
	const [question, setQuestion] = useState(initialState);
    const history = useHistory();
    const alert = useAlert();

    useEffect(() => {
        if (props && props.history && props.history.location && props.history.location.state) {
            
            QuestionService.get(props.history.location.state.QuestionId)
                .then((response) => {
                    setQuestion(response.data);
                })
                .catch((e) => {
                    console.log('ERROR ' + e);
                });
                
        }
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setQuestion({ ...question, [name]: value });
    };

	const saveQuestion = () => {
		QuestionService.save(question)
			.then((response) => {
                alert.show('Question saved!', { 
                    type: 'success',
                    onClose: () => {
                        history.push('/');
                    }
                 });
			})
			.catch((e) => {
                console.log(e);
                alert.show(`Error saving question. Please try again later.`, {
                    type: 'error'
                });
			});
	};

	return (
		<Form>
			<Form.Group>
				<Form.Label>Question</Form.Label>
                <Form.Control 
                    as='textarea' 
                    rows='5' 
                    type='text' 
                    readOnly={question?.Id > 0}
                    name='Question'
                    required
                    value={question?.Question}
                    placeholder='Enter your question (at least two words, please)'
                    onChange={handleInputChange} />
			</Form.Group>
            {question.Id > 0 ? 
                <Form.Group controlId='formAnswer'>
                    <Form.Label>Answer</Form.Label>
                    <Form.Control 
                        as='textarea' 
                        rows='5' 
                        type='text' 
                        name='Answer'
                        value={question?.Answer}
                        placeholder='Enter the answer'
                        onChange={handleInputChange} />
                </Form.Group> 
                : null}
			<Button variant='primary' type="button" onClick={saveQuestion}>
				Save
			</Button>
		</Form>
	);
};

export default QuestionForm;
