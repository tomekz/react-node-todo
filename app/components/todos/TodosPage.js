import React from 'react'
import TextField from 'material-ui/TextField';
import RefreshIcon from 'material-ui/svg-icons/navigation/refresh';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AddTodo from './AddTodo'
import Todos from './Todos'

const RETURN_KEY_CODE = 13;


class TodosPage extends React.Component{
    constructor(){
        super()
    }

    render(){
        return (
            <MuiThemeProvider>
                <div className= "row" >
                    <div className="col-sm-4">
                      <AddTodo />
                    </div>
                    <div className="col-sm-8">
                      <Todos />
                    </div>

                </div>
            </MuiThemeProvider>
        )
    }
}

export default TodosPage
