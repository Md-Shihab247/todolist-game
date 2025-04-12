import { useSelector,useDispatch } from 'react-redux'
import { addtodo, deleteTodo, editTodo, inputValue, isActive,update } from './slices/TodoSlice'
import { MdDelete, MdModeEditOutline } from 'react-icons/md'
const Todo = () => {
    let inputVlu = useSelector((state)=> state.todo.value)
    let array = useSelector((state)=> state.todo.array)
    let active = useSelector((state)=> state.todo.active)
    let updateIndex = useSelector((state)=> state.todo.updateIndex)
    let dispatch = useDispatch()
        
    function handleValue(){
        if(inputVlu){
            dispatch(addtodo(inputVlu))   
        }
    }
    function handleUpdate(){
        if(inputVlu){
            dispatch(update(updateIndex))
        }
    }
  return (
    <>
        <section className=' max-w-[100%] h-[100vh] flex-col font-poppins  bg-[#0c192c] flex items-center justify-center'>
            <h2 className=' text-white font-medium  uppercase mb-5 text-2xl'>Todo List ( React-redux )</h2>
            <div className='  overflow-auto overflow-x-hidden custom-scroll  w-[450px] rounded-[10px] h-[350px] border-2 border-[rgba(255,255,255,0.3)] '>
               <div className='w-[100%] h-[100%] p-5'>
               <div className=' mb-5 flex justify-between'>
                <div className='  relative group  w-[100%]'>
                <input type="text" onChange={(e)=> dispatch(inputValue(e.target.value))} value={inputVlu} placeholder='Type here...' className=' absolute w-[97%] h-[40px] text-sm text-white border-b-2 border-[rgba(255,255,255,0.3)] outline-hidden placeholder:text-sm' />
                 <span className=' absolute bottom-0 left-0 bg-violet-800 h-[3px] w-[97%] scale-x-0 transition duration-300 ease-in-out group-focus-within:scale-x-100'></span>
                </div>
                    {active == true
                    ?
                    <button onClick={()=> handleValue()} className='bg-[#252525] text-base px-4 h-[40px] rounded-[5px] font-semibold transition-all cursor-pointer  text-white hover:text-shadow-[0_0_2px_#5B21B6] hover:text-[#5B21B6]'>Add</button>
                    :
                    <button onClick={()=> handleUpdate()} className='bg-[#333] text-base px-4 h-[40px] rounded-[5px] font-semibold transition-all cursor-pointer  text-white hover:text-[#5B21B6] hover:bg-[#252525]'>update</button>
                    }             
                </div>
                <ul className=' font-medium'>
                    {array.map((data,index)=>{
                        return (
                            <li key={index} className=' overflow-hidden group flex justify-between text-sm font-medium p-2 mb-2.5 text-white rounded-[4px]  border-2 border-[rgba(255,255,255,0.3)]'>
                                {data} 
                              <div key={index} className=' flex gap-2.5'>
                              <button onClick={()=> (dispatch(editTodo(index)),dispatch(isActive(false)))} className='text-lg cursor-pointer hover:text-[#5B21B6] '><MdModeEditOutline/></button>  
                              <button onClick={()=> dispatch(deleteTodo(index))}  className='text-lg cursor-pointer hover:text-[#5B21B6] '><MdDelete/></button>  
                              </div>
                            </li>     
                        )})}
                </ul>
               </div>
            </div>
        </section>

    </>
  )
}

export default Todo