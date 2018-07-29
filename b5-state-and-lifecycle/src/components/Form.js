import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Grid,Col, Button, Row } from 'react-bootstrap';
import CONSTANT from './../common/textContent';
import {TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/lib/ti';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            text: '',
            emoji: '',
            isHandleText : true,
        };
        this.handleChangeText = this.handleChangeText.bind(this);
        this.onHandleClick = this.onHandleClick.bind(this);
        this.handleChangeEmoji = this.handleChangeEmoji.bind(this);
    }
    handleChangeText(e) {
        console.log(e);

        this.setState({text : e.target.value, isHandleText : true});
        if(e.target.value.trim()==='') {
            console.log(this.state.text);
        }
    }
    handleChangeEmoji(e) {

        this.setState({emoji : e.target.value, isHandleText : false});

    }
    onHandleClick() {
        this.setState({isLoading : true});  
        setTimeout(()=>this.setState({isLoading : false}), 2000);
        if(this.state.isHandleText) {
            let text = this.state.text.split('');
            let emojies = [];
            text.map(function(elem, index) {  
                CONSTANT.mappingContent.filter(function(item) {
                    Object.keys(item)[0]===elem ? emojies.push(item[elem]) : null;
                });
            });
            // this.emojies.join('')
            this.setState({emoji : emojies.join(''), text : ''});
        } else {
           this.setState({text : CONSTANT.notDecode});
        }
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>{CONSTANT.input.text}</ControlLabel>
                                <FormControl
                                    style={{fontSize : 'initial'}}
                                    onChange={this.handleChangeText}
                                    value={this.state.text}
                                    rows={4}
                                    componentClass="textarea"
                                />
                            </FormGroup>                
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Button
                        bsStyle="primary"
                        onClick={!this.state.isLoading ? this.onHandleClick : null}
                        disabled={this.state.isLoading}
                    > 
                        {this.state.isLoading ? 'is loading...' : 'Encode'}
                        {this.state.isHandleText ? <TiArrowSortedDown size={20}/> : <TiArrowSortedUp size={20}/> }
                    </Button>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <form>
                            <FormGroup
                                controlId="formBasicText"
                            >
                                <ControlLabel>{CONSTANT.input.emoji}</ControlLabel>
                                <FormControl
                                    style={{fontSize : 'initial'}}
                                    onChange={this.handleChangeEmoji}
                                    value={this.state.emoji}
                                    rows={4}
                                    componentClass="textarea"
                                />
                            </FormGroup>                
                        </form>
                    </Col>
                </Row>
            </Grid>
			
        );
    }
}
