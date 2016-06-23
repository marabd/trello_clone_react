class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}

	getItems() {
	  $.ajax({
	  	url: '/items',
	  	type: 'GET',
	  	dataType: 'JSON'
	  }).done( items => {
	  	this.setState({ items });
	  })
	}

	componentWillMount() {
	    // TODO: make ajax call to grab all the lists items
	    // on success - set state of all the items which will in turn call render
		this.getItems()
	}

	showList(list) {
		this.setState({ show: true, list });
	}

	render() {
		return(
			<div>
				<div className="col s12 m6">
					<div className="card blue-grey darken-1">
						<div className="card-content white-text" onClick={() => this.props.showList(this.props)}>
							<span className="card-title">{this.props.name}</span>
						</div>
						<div className="card-action">
							<button className='btn red' onClick={() => this.props.deleteList(this.props.id)}>Delete</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}