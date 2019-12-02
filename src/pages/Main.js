import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './style.css';
import PlanetInfo from '../components/PlanetInfo';
import Loading from '../components/Loading';
import { http } from '../services/http';
import LaddaButton, { L, SLIDE_UP } from 'react-ladda';
import { S } from 'react-ladda/dist/constants';
class Main extends Component {
	state = {
		name: 'Nome do planeta',
		population: '-',
		climate: '-',
		terrain: '-',
		loading: true
	};
	componentDidMount() {
		this.loadCount();
	}

	loadCount = () => {
		http
			.get('planets')
			.then((x) => {
				let { count } = x.data;
				this.setState({ count }, this.loadPlaneta);
			})
			.catch(console.log);
	};

	loadPlaneta = () => {
		const { count } = this.state;
		const min = 1;
		var randPlanet = Math.floor(Math.random() * (count - min + 1)) + min;
		this.setState({ loading: true });
		http
			.get(`planets/${randPlanet}`)
			.then((x) => {
				const { name, climate, terrain, population, films } = x.data;
				this.setState({ name, climate, terrain, population, nFilms: (films || []).length });
			})
			.catch(console.log)
			.finally(() => {
				this.setState({ loading: false });
			});
	};
	render() {
		const { name, population, climate, terrain, loading, nFilms } = this.state;
		return (
			<Container className="w-100">
				<Row>
					<Col className="d-flex justify-content-center align-items-center w-100" style={{ height: '100vh' }}>
						<Card bg="secondary" text="white" style={{ width: '32rem' }}>
							<Card.Header className="header-planet-card text-center">{name}</Card.Header>
							<Card.Body className="planet-info-description ">
								<PlanetInfo population={population} climate={climate} terrain={terrain} />
								<div className="text-center featured-planet-info  pt-2">
									Featured in <b>{nFilms} films</b>
								</div>
							</Card.Body>
							<Card.Footer className="footer-planet-card text-center w-100 justify-content-center text-center">
								<LaddaButton
									className="w-100"
									loading={loading}
									onClick={this.loadPlaneta}
									data-color="#000"
									data-size={S}
									data-style={SLIDE_UP}
									data-spinner-size={30}
									data-spinner-color="#fff"
									data-spinner-lines={12}
								>
									Next
								</LaddaButton>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Main;
