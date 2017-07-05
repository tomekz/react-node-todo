import React from 'react';
import TodosStore from '../.././stores/TodosStore'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';

class Todos extends React.Component {
  constructor(){
        super()
        this.state = {
            todos: []
        }

    }

    componentWillMount(){
      TodosStore.getAllFromDb().then((res) => {
        const todos = res.data.todos
        this.setState({todos: todos})
        TodosStore.set(todos)
      })

      TodosStore.on('change', () =>{
        this.setState({todos: TodosStore.getAll()})
      })
    }

   render(){
        const todos = this.state.todos.map(
          (todo) => <ListItem leftIcon={<ChevronRightIcon/>}> {todo} </ListItem>
        )

        return(
            <div>
                <List>
                    { todos }
                </List>
            </div>
        )
    }
}

export default Todos;
