import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: '',
      comment:'',
    }
    this.onChange= this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
submitForm(e) {
  e.preventDefault();
  const url = "https://post-a-form.herokuapp.com/api/movies"
  const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(this.state),
  };
  fetch(url, config)
  .then (res => res.json())
    .then(res => {
      if (res.error){
        alert(res.error)
      } else { alert(`Film ${this.state.title} ajouté à la liste`);
    }
    })
    .catch(e=> {
      console.error(e);
      alert("Erreur pendant l'ajout du film")
    })

  }


  render(){
  return (
    <div className="App">
      <form onSubmit={this.submitForm}>
        <fieldset>
          <div className="form-data">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="url">Affiche</label>
            <input
              type="url"
              id="poster"
              name="poster"
              onChange={this.onChange}
              value={this.state.poster}
              required
            />
          </div>
          <div className="form-data">
            <label htmlFor="Comment">Comment</label>
            <input
              type="text"
              id="comment"
              name="comment"
              onChange={this.onChange}
              value={this.state.comment}
            />
          </div>
          <div className="form-data">
          <input type="submit" value="Envoyer" />
          </div>
        </fieldset>
      </form>
    </div>
  );}
}

export default App;
