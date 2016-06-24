class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
		this.getItems = this.getItems.bind(this);
	}

	getItems() {
	  $.ajax({
	  	url: '/items',
	  	type: 'GET',
	  	data: {list_id: this.props.id},
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

	addItem() {
		$.ajax({
			url: '/items',
			type: 'POST',
			data: { item: { name: this.refs.name.value },
							list_id: this.props.id },
			dataType: 'JSON',
		}).done( item => {
			this.refs.name.value = '';
			this.setState({ items: [{...item}, ...this.state.items ] });
		}).fail( data => {
			alert('Item not saved.');
		});
	}

	render() {
		let items = this.state.items.map( item => {
			let key = 'item-' + item.id;
			return(
				<div className="row">
					<button className='btn red' onClick={() => this.deleteItem(id)}>x</button> 
					<li key={key}>{item.name}</li>
				</div>
			);
		});
		return(
			<div>
				<div className="col s12 m6">
					<div className="card blue-grey darken-1">
						<div className="card-content white-text">
							<span className="card-title">{this.props.name}</span>
							<div className="card-action">
								<input ref='name' />
								<button className='btn' onClick={this.addItem.bind(this)}>New Item</button>
								<button className='btn'>Edit</button>
								<button className='btn red' onClick={() => this.props.deleteList(this.props.id)}>Delete</button>
							</div>
							<ul>{items}</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}