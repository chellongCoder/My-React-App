import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {red500, pink500, green500,purple500, indigo500, cyan500, teal500, lime500} from './../common/color';
export default class layoutDemo extends Component {
	render() {
		return (
			<Grid>
			  <Row className="show-grid">
			    <Button bsStyle="primary">Primary</Button>
			  </Row>

			  <Row className="show-grid">
			    <Col xs={6} md={4} style={{backgroundColor: pink500}}>
			      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
			    </Col>
			    <Col xs={6} md={4}  style={{backgroundColor: red500}}>
			      <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
			    </Col>
			    <Col xsHidden md={4}  style={{backgroundColor: green500}}>
			      <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
			    </Col>
			  </Row>

			  <Row className="show-grid">
			    <Col xs={6} xsOffset={6}  style={{backgroundColor: purple500}}>
			      <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
			    </Col>
			  </Row>

			  <Row className="show-grid">
			    <Col md={6} mdPush={6}  style={{backgroundColor: indigo500}}>
			      <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
			    </Col>
			    <Col md={6} mdPull={6}  style={{backgroundColor: lime500}}>
			      <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
			    </Col>
			  </Row>
			</Grid>
		);
	}
}
