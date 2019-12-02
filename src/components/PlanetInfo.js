import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default (props) => {
	const { population, climate, terrain } = props;
	return (
		<Container className=" text-center">
			<Row className="p-3">
				<Col>
					<div className="title-info">Population</div>
					<div className="desc-info">
						<b>{population}</b>
					</div>
				</Col>
			</Row>
			<Row className="p-3">
				<Col>
					<div className="title-info">Climate</div>
					<div className="desc-info">
						<b>{climate}</b>
					</div>
				</Col>
			</Row>
			<Row className="p-3">
				<Col>
					<div className="title-info">Terrain</div>
					<div className="desc-info">
						<b>{terrain}</b>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
