import React from 'react';
import ReactDOM from 'react-dom';

require('../sass/main.scss');

document.addEventListener('DOMContentLoaded', function () {

	class Fetch extends React.Component{
		constructor(props){
			super(props);
			this.state={
				allEvents: [],
			}
        }		
        
		handleChange = (event) => {
			this.setState({
				[event.target.name]: event.target.value
			})
		}
		
		componentDidMount() {
			
		}

		render() {			
			var posTop = 40;
			var posLeft = 50;		
			var squareStyle = {
				top: posTop,
				left: posLeft
			}


			return (
				<div className="homepage">
                    DZIAŁA!
					<div className="container">
						<div id="square" style={squareStyle}></div>
					</div>
				</div>
			)
		}
	}


class Main extends React.Component {
	render() {
		return (
			<div>
				<Fetch/>
			</div>
		)
	}
}

ReactDOM.render(
		<Main />, document.getElementById('app'));
		
});
