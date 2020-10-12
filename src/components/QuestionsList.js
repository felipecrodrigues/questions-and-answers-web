import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
import QuestionService from '../services/QuestionService';

const QuestionsList = (props) => {
	const [questions, setQuestions] = useState([]);
    const history = useHistory();

	useEffect(() => {
		retrieveQuestions();
	}, [props]);

	const retrieveQuestions = () => {
		QuestionService.getAll()
			.then((response) => {
				setQuestions(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
    };
    
    const editQuestion = (question) => {
        history.push("/form", { QuestionId : question.Id });
    }

    const rowFormat = (question) => {
        return {
            backgroundColor: question.Answer ? 'rgba(0,255,0,0.3)' : 'rgba(255,0,0,0.3)',
            backgroundOpacity: 0.3,
            cursor: "pointer"
        };
    }
    
	return (
        <div>
            <Link to={"/form"} className="nav-link">
                Create  
            </Link>
            <br />
            <Table bordered hover size="sm">
                <thead>
                    <tr className='TableHeader'>
                        <th>Question</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {questions
                        .sort((a, b) => a.Id - b.Id)
                        .map((question) => (
                        <tr key={question.Id} style={rowFormat(question)} onClick={() => editQuestion(question)}>
                            <td>{question.Question}</td>
                            <td>{question.Answer}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
	);
};

export default QuestionsList;
