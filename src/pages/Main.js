import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './style.css';
import PlanetInfo from '../components/PlanetInfo';
class Main extends Component {
	state = {
		name: 'Nome do planeta',
		population: 0,
		climate: '23',
		terrain: 'X'
	};
	render() {
		const { name, population, climate, terrain } = this.state;
		return (
			<div style={{ backgroundColor: 'black' }}>
				<Container className="w-100">
					<Row>
						<Col
							className="d-flex justify-content-center align-items-center w-100"
							style={{ height: '100vh' }}
						>
							<Card bg="dark" text="white" style={{ width: '32rem' }}>
								<Card.Header className="header-planet-card text-center">{name}</Card.Header>
								<Card.Body className="planet-info-description ">
									<PlanetInfo population={population} climate={climate} terrain={terrain} />
									<div className="text-center pt-4 featured-planet-info">Featured in NFILMS</div>
								</Card.Body>
								<Card.Footer className="footer-planet-card text-center w-100">
									<Button variant="dark" className="w-100">
										Next
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Main;
