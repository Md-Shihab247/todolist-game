import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import {playerOne , inputOne, inputTwo, playerTwo, eyeActive}   from "./slices/NumberSlice";

const NumberGuess = () => {

  let playerName = useSelector((state)=> state.game.playerName)
  let  inputVlu1 = useSelector((state)=> state.game.inputVlu1)
  let  inputVlu2 = useSelector((state)=> state.game.inputVlu2)
  let  active = useSelector((state)=> state.game.isActive)
  let  count = useSelector((state)=> state.game.count)
  let  isHidden = useSelector((state)=> state.game.isHidden)
  let  winner = useSelector((state)=> state.game.winner)
  let  isOpen = useSelector((state)=> state.game.isOpen)
  let  inputType = useSelector((state)=> state.game.inputType)
  let dispatch = useDispatch()

  return (
    <>
      <div className="w-full h-[100vh] font-poppins flex items-center flex-col justify-center  bg-[#0c192c]">
      <h2 className=' text-white font-medium  uppercase mb-5 text-2xl'>number guess game</h2>
        <div className=" border-l-3 border-t-3 border-[rgba(255,255,255,0.2)] w-[350px] rounded-2xl px-5 py-10 flex flex-col items-center justify-center">
          {isHidden === false
           ?
           <div className="w-full flex flex-col items-center">
          <h2 className="text-white text-center text-lg uppercase font-medium">
            {playerName}
          </h2>
          {active == true
          ?
          ""
          :
          <p className="text-white mt-3 font-medium text-sm">Chances : {count}</p>
          }

         {active == true
          ? 
          <div className=" w-full mt-8"> {/* player one */}
         <div className="w-[100%] mb-4 group flex relative">
            <input
              type= {isOpen === true ? inputType : `password`}
              placeholder="Type here..."
              onChange={(e)=> dispatch(inputOne(e.target.value))}
              value={inputVlu1}
              className=" relative w-full h-[40px] text-sm text-white border-b-2 border-[rgba(255,255,255,0.3)] outline-hidden placeholder:text-sm"
            />
            {isOpen === false
             ?
            <FaEyeSlash onClick={()=> dispatch(eyeActive(true))} className="absolute right-[10px] top-[10px] text-[20px] cursor-pointer text-[rgba(255,255,255,0.2)] hover:text-violet-800" />
             :
             <FaEye onClick={()=> dispatch(eyeActive(false))} className="absolute right-[11px] top-[12px] text-lg cursor-pointer text-[rgba(255,255,255,0.2)] hover:text-violet-800"/>
            }
            <span className=" absolute  bottom-0 left-0 bg-violet-800 h-[3px] w-full scale-x-0 transition duration-300 ease-in-out group-focus-within:scale-x-100"></span>
          </div>
          <button onClick={()=> dispatch(playerOne(inputVlu1))} className="text-white text-[15px] tracking-wide cursor-pointer w-full bg-[rgba(255,255,255,0.1)] px-4 rounded-[5px] mt-4  h-[40px] uppercase font-semibold transition-all hover:text-violet-800">
            submit
          </button>
         </div>
          :
         <div className=" w-full mt-8"> {/* player Two */}
         <div className="w-[100%] mb-4 group flex relative">
            <input
              type= {isOpen === true ? inputType : `password`}
              placeholder="Type here..."
              onChange={(e)=> dispatch(inputTwo(e.target.value))}
              value={inputVlu2}
              className=" relative w-full h-[40px] text-sm text-white border-b-2 border-[rgba(255,255,255,0.3)] outline-hidden placeholder:text-sm"
            />
            {isOpen === false
             ?
            <FaEyeSlash onClick={()=> dispatch(eyeActive(true))} className="absolute right-[10px] top-[10px] text-[20px] cursor-pointer text-[rgba(255,255,255,0.2)] hover:text-violet-800" />
             :
             <FaEye onClick={()=> dispatch(eyeActive(false))} className="absolute right-[11px] top-[12px] text-lg cursor-pointer text-[rgba(255,255,255,0.2)] hover:text-violet-800"/>
            }
           <span className=" absolute  bottom-0 left-0 bg-violet-800 h-[3px] w-full scale-x-0 transition duration-300 ease-in-out group-focus-within:scale-x-100"></span>
          </div>
          <button onClick={()=> dispatch(playerTwo(inputVlu2))} className="text-white text-[15px] tracking-wide cursor-pointer w-full bg-[rgba(255,255,255,0.1)] px-4 rounded-[5px] mt-4  h-[40px] uppercase font-semibold transition-all hover:text-violet-800">
            submit
          </button>
         </div>
         }
          <span className="text-white text-center mt-3 font-medium text-[11px]">Please enter a number between 1 to 10</span>
          </div>
          :
          <div className="flex flex-col items-center justify-center" >
            <h2 className="text-white text-2xl uppercase font-semibold">Game Over</h2>
            <h3 className="text-white text-[20px] mt-5 font-medium">{winner}</h3>
          </div>
          }
        </div>
      </div>
    </>
  );
};

export default NumberGuess;
