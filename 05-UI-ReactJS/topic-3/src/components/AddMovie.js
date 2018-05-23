import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = { //each component has his own state, so to save i send it to the app state
      newMovie:{}
    }
  }
  static defaultProps = {
    categories: ['fiction','comedy','drama']
  }
  handleSubmit(event) {
    if (this.refs.title.value === ''){
      alert('title required');
    }else{
      this.setState({newMovie: {
        title: this.refs.title.value,
        category:this.refs.category.value
      }}, function(){
        this.props.AddMovie(this.state.newMovie); //--> to see it on the main component
      });
    }

    event.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key ={category} value={category} >{category}</option>
    });
    return (
      <div>
        <br/>
        <h2>Add Movie</h2><hr/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title </label><br/>
            <input type="text" ref="title" />
          </div>
          <br/>
          <div>
            <label>Category</label><br/>
            <select ref="category">
            {categoryOptions}
            </ select>
            <br/>
          </div><br/>
          <input type="submit" value ="Submit"/>
        </form>
        <hr/>
        <h2>Movie List</h2>
      </div>
    );
  }
}
AddMovie.propTypes = {
  categories: PropTypes.array,
  AddMovie: PropTypes.func
}
export default AddMovie;
