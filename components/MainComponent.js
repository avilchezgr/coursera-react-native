import React, {Component} from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import {View} from 'react-native';
class Main extends Component{

	constructor(props){
		super(props);
		this.state = {
			dishes: DISHES,
			selectedDish: null
		}
	}

	onDishSelect(dishId) {
		this.setState({...state, selectedDish: dishId});
	}
	render(){
		
		return(
			<View >
				<Menu dishes={this.state.dishes}
					onPress={(dishId) => this.onDishSelect(dishId)}/>
				<DishDetail dish={this.state.dishes.filter((dish) => this.id === this.state.selected.dish)[0]}/>
			</View>
		);
		
	
	}

}

export default Main;