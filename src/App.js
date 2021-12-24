import './App.css';
import { connect } from 'react-redux';
import List from './components/List/List';
import AddTodo from './components/AddTodo/AddTodo';

const App = () => (
  <div className="container">
    <h1>REDUX TO DO APP</h1>
    <AddTodo />
    <List />
  </div>
)

export default connect()(App);
