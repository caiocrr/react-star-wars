import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default (props) => {
	const { population, climate, terrain } = props;
	return (
		<Container className="p-4 pr-5 pl-5">
			<Row>
				<Col>Population:</Col>
				<Col>{population}</Col>
			</Row>
			<Row>
				<Col>Climate:</Col>
				<Col>{climate}</Col>
			</Row>
			<Row>
				<Col>Terrain:</Col>
				<Col>{terrain}</Col>
			</Row>
		</Container>
	);
};
