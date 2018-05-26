import React from 'react';
import PropTypes from 'prop-types';


class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = { //each component has his own state, so to save i send it to the app state
      newMovie:{
        title:'',
        category:''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }//end Constructor
  static defaultProps = {
    categories: ['fiction','comedy','drama']
  }
  handleSubmit(event) {
    if(this.state.newMovie.title === '')
    {
      alert('Title required');
    }else {
      this.setState({newMovie:{
        title:this.state.newMovie.title,
        category:this.state.newMovie.category
      }}, function () {
        this.props.AddMovie(this.state.newMovie);
      });
      alert('title submitted:' + this.state.newMovie.title)
    }

    event.preventDefault();
    }//End handleSubmit



  handleChange(event) { //can't make it work right
    const target = event.target;
    this.setState({newMovie:{
      [target.name]: target.value }});
    /*let newtitle='';
    var newcat='';
    if(target.name === 'title')
    {
      newtitle =  target.value;
      this.setState({
        newMovie:{
          title: target.value}
        });
    }else{
      newcat = target.value;
      this.setState({
        newMovie:{
          category: target.value}
        });
    }**/

    console.log('nurevo estado:',this.state.newMovie);
    event.preventDefault();
  }//end handleChange
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
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          </div>
          <br/>
          <div>
            <label>Category</label><br/>
            <select name="category" value={this.state.category} onChange={this.handleChange}>
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
  AddMovie: PropTypes.func
}
export default AddMovie;
