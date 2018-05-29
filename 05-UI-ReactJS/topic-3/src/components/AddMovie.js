import React from 'react';
import PropTypes from 'prop-types';



class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //each component has his own state, so to save i send it to the app state

        title:'',
        category:''

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }//end Constructor
  static defaultProps = {
    categories: ['fiction','comedy','drama']
  }
  handleSubmit(event) {
    if(this.state.title === '')
    {
      alert('Title required');
    }else {
      this.setState({
        title:this.state.title,
        category:this.state.category
      }, function () {
        this.props.addMovie(this.state);
      });
      alert('title submitted:' + this.state.title)
    }

    event.preventDefault();
    }//End handleSubmit


  handleChangeCategory(event) {
    const target = event.target;
    this.setState({category:target.value});
    console.log('nurevo cate:',this.state);2
    event.preventDefault();
  }//end handleChangeCategory
  handleChangeTitle(event) {
    const target = event.target;
    this.setState({title:target.value});
    console.log('nurevo title:',this.state);
    event.preventDefault();
  }//end handleChangeTitle
  componentWillMount(){
    console.log('render');
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key ={category} value={category} >{category}</option>
    });
    return (
      <div>
        <br/>
        <h2>Add Movie</h2><hr/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title </label><br/>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle}/>
          </div>
          <br/>
          <div>
            <label>Category</label><br/>
            <select name="category" value={this.state.category} onChange={this.handleChangeCategory}>
            {categoryOptions}
            </ select>
            <br/>
          </div><br/>
          <input type="submit" value ="Submit"/>
        </form>


      </div>
    );
  }//End render
}//End Component
AddMovie.propTypes = {
  categories: PropTypes.array,
  addMovie: PropTypes.func
}

export default AddMovie;
