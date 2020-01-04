import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search/search-box.component';

import './App.css';

class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			monsters: [],
			searchQuery: '',
		};
	}

	handleSearchInputChange = evt => {
		this.setState({ searchQuery: evt.target.value });
	};

	filterMonsters () {
		const { monsters, searchQuery } = this.state;
		return monsters.filter(monster =>
			monster.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}

	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => this.setState({ monsters: data }));
	}

	render () {
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>

				<SearchBox
					placeholder="search monsters"
					handleChange={ this.handleSearchInputChange }
					searchInputValue={ this.state.searchQuery }
				/>
				<CardList monsters={ this.filterMonsters() }/>
			</div>
		)
	}
}

export default App;
