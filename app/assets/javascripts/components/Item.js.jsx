class Items extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
		this.deleteItem = this.deleteItem.bind(this);
	}

	componentWillMount() {
		$.ajax({
			url: '/items',
			type: 'GET',
			dataType: 'JSON'
		}).done( items => {
			this.setState({ items });
		}).fail( data => {
			alert('Failed grabbing list items.');
		});
	}


}