import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Label, Row, Col } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form'; 

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => val && val.length <= len;

export class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle() {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }

    handleSubmit(values) {
        this.toggle();
        const comment = {
            dishId: this.props.dishId, 
            rating: values.rating, 
            name: values.name, 
            comment: values.comment
        };
        this.props.postComment(comment);
    }

    render() {
        return (
            <div>
                <Button 
                    outline 
                    color="secondary" 
                    className="btn-min-content" 
                    onClick={this.toggle}
                >
                    <i className='fa fa-pencil' />{' Submit Comment'}
                </Button>
                
                <Modal isOpen={this.state.isModalOpen}>
                    <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                            <Col>
                                <Row><Label htmlFor="rating">Rating</Label></Row>
                                <Row>
                                    <Control.select model=".rating" id="rating" 
                                        className='w-100 form-control mb-13' name="rating">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Row>
                            </Col>
                            
                            <Col>
                                <Row><Label htmlFor="name" className='submit-row'>Your Name</Label></Row>
                                <Row>
                                    <Control.text model=".name" id="name" 
                                        name="name" placeholder="Your Name"
                                        validators={{
                                            required, 
                                            minLength: minLength(3), 
                                            maxLength: maxLength(15)
                                        }}
                                        className='w-100 form-control mb-13'
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be 3 characters or more',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Row>
                            </Col>
                            
                            <Col>
                                <Row><Label htmlFor="comment" className='submit-row'>Comment</Label></Row>
                                <Row>
                                    <Control.textarea model=".comment" id="comment" 
                                        name="comment" rows="5" 
                                        className='w-100 form-control'
                                    />
                                </Row>
                            </Col>
                            
                            <Button type="submit" color="primary" className='submit-row'>Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
};