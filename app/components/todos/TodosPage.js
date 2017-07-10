import React from 'react'
import TextField from 'material-ui/TextField';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AddTodo from './AddTodo'
import Todos from './Todos'
import { addTodo, loadTodos } from '../../actions/todosActions'
import { connect } from 'react-redux'

class TodosPage extends React.Component{
    constructor(){
        super()
    }

    componentWillMount(){
      this.props.loadTodos('/api/todos')
    }

    render(){
        return (
            <MuiThemeProvider>
                <div className= "row" >
                    <div className="col-sm-4">
                      <AddTodo addTodo = {this.props.addTodo} />
                    </div>
                    <div className="col-sm-8">
                      <Todos />
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state.todos,
      hasErrored: state.error,
      isLoading: state.itemsIsLoading,
      addTodo: addTodo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      loadTodos: (url) => dispatch(loadTodos(url))
    }
}

TodosPage.PropTypes = {
  addTodo: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage)
