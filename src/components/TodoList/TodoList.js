import './TodoList.css'

const TodoList = ({todos, onDeleteTodo}) => (
    <ul className='TodoList'>
        {todos.map(({id, text, completed}) => (
            <li className='TodoList__item' key={id}>
                <p className='TodoList__text'>{text}</p>
                <button onClick={() => onDeleteTodo(id)}>Delete</button>
            </li>
        ))}
    </ul>
)

export default TodoList;