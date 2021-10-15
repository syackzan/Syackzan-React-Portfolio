import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'


function Contact() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };

    const handleEmailChange = (e) => {return setEmail(e.target.value)}
    const handleContentChange = (e) => {return setContent(e.target.value)}
    

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${firstName} ${lastName}, your message has been sent!`);
        setFirstName('');
        setLastName('');
        setEmail('');
        setContent('');
    };

    return (
        <div className='jumbotron center'>
            <Form className="mainBorder formPadding">
            <Form.Label><p><b>Hello...</b> {firstName} {lastName}</p> </Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Please Enter First Name: </Form.Label>
                    <Form.Control value={firstName} type="text" name="firstName" placeholder="First Name" onChange={handleInputChange} />
                    <Form.Label>Please Enter Last Name:</Form.Label>
                    <Form.Control value={lastName} type="text" name="lastName" placeholder="Last Name" onChange={handleInputChange} />
                    <Form.Label>Please Enter Email address:</Form.Label>
                    <Form.Control value={email} type="email" placeholder="name@example.com" onChange={handleEmailChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Please write a short Description for why you are requesting my services.</Form.Label>
                    <Form.Control value={content} as="textarea" rows={3} onChange={handleContentChange} />
                </Form.Group>
                <button type="button" onClick={handleFormSubmit}>
                Submit
                </button>
            </Form>
        </div>
    );
}

export default Contact;