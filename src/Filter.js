const todos=(state=[], action )=> {
    switch (action.type) {
        case 'ADD_TODO': 
        return[
            ...state,
            todo(undefined, action)
        
        ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
            default:
                return state ;
    }
};
const visibilityFilter = (
    state= 'SHOW_ALL' , 
    action 
) => {
    switch (action.type) {
        case'SET_VISIBLITY_FILTER':
        return action.filter;

    }
};
const { combineReducers }= Redux;
const todoApp = combineReducers({
    todos,
    visibilityFilter 

}); 
const {createStore} = Redux ; 
const store= createStore(todoApp);
const {component} = React ; 
const Filter Link = ({
    filter , 
    children 
}) => {
    return {
        <a href='a'
        onClick={e =>{
            e.preventDefault(); 
            store.dispatch({
                type:'SET_VISIBILITY_FILTER',
                filter
            });
        }}
       >
       {children}
       </a>
    };
};
 let nextTodoId=0;
 class TodoApp extends component {
     render () {
         const {
             todos, 
             visibilityFilter
         } = this.props;
         const visibleTodos= getVisibleTodos(
             this.props.todos,
             this.props.visibilityFilter
         );
         return (
             <div>
                 <input ref={node => {
                     this.input= node; 

                 }}/>
                 <button onClick={() => {
                     store.dispatch({
                         type: 'ADD_TODO',
                         text:this.input.value,
                         id:nextTodoId++

                     });
                     this.input .value='';

                 }}>
                     Add Todo

                    </button>
                    <ul>
                        {visibleTodos.map(todo =>
                            <li key={todo.id}
                            onClick={() => {
                                store.dispatch({
                                    type:'TOGGLE_TODO',
                                    id:todo.id
                                });
                            }}
                            style={{
                                textDecoration: 
                                todo.completed?
                                'line-throught';
                                'none'

                            }}>
                            {todo.text}
                             </li>
                            )}
                            </ul>
                            <p>
                                show:
                                {''}
                                <Filter='SHOW_ALL'
                                currentFilter={visibilityFilter}
                                >
                                All
                                 </FilterLink>
                                 {''}
                                 <FilterLink
                                 filter='SHOW_ACTIVE'
                                 >
                                    Active
                                    </FilterLink>
                                    {''}
                                    <FilterLink
                                    filter='SHOW_COMPLETED'
                                    currentFilter={visibilityFilter}
                                    >                           
                                       completed
                                       </FilterLink>

                                                            
                                                            
                                                            
                                 </p>
             </div>
         )
     };
 }