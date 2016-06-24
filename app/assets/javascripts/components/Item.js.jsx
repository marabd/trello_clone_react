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

	deleteItem(id) {
		$.ajax({
			url:`/items/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( data => {
			let items = this.state.items;
			let index = items.findIndex( i => i.id === item.id);
			this.setState({
				items: [ ...items.slice(0, index), ...items.slice(index + 1, items.length) ]
			});
		}).fail( data => {
			alert('item not deleted!');
		});
	}

}