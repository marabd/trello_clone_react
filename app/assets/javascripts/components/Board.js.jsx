class Board extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text" onClick={() => this.props.showBoard(this.props)}>
              <span className="card-title">{this.props.name}</span>
              <p>{this.props.description}</p>
            </div>
            <div className="card-action">
              <button className='btn'>Edit</button>
              <button className='btn red' onClick={() => this.props.deleteBoard(this.props.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
		)
	}
}