import { useState } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
function TicTacToe() {
  const [newTurn, setNewTurn] = useState("O");
  const [turn, setTurn] = useState(newTurn);
  const [turnArray, setTurnArray] = useState(Array(9).fill(""));
  const [itemArray, setItemArray] = useState(Array(9).fill(false));
  const [winMessage, setWinMessage] = useState("");
  const [tied, setTied] = useState(0);
  const [X,setX] =useState(0);
  const [O,setO] =useState(0);
  const checkWinner = (itemArray) => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== false
    ) {
      updateStats(itemArray[0])
      return setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== false
    ) {
      updateStats(itemArray[3])
      return setWinMessage(`${itemArray[3]} Won!`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== false
    ) {
      updateStats(itemArray[6])
      return setWinMessage(`${itemArray[6]} Won!`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[3] !== false
    ) {
      updateStats(itemArray[0])
      return setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== false
    ) {
      updateStats(itemArray[1])
      return setWinMessage(`${itemArray[1]} Won!`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== false
    ) {
      updateStats(itemArray[2])
      return setWinMessage(`${itemArray[2]} Won!`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== false
    ) {
      updateStats(itemArray[0])
      return setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== false
    ) {
      updateStats(itemArray[2])
      return setWinMessage(`${itemArray[2]} Won!`);
    }
    let res = 0;
    for (let i = 0; i < 9; i++) {
      if (itemArray[i] !== false) {
        res += 1;
      }
    }
    if (res === 9) {
      
      updateStats("Tied")
      return setWinMessage("Game Tied!");
    }
  };
  function changeItem(index) {
  if(winMessage === "Game Tied!"){
    console.log()
    let newTied = tied+1;
    setTied(3);
   }
   else if(winMessage === "O Won!"){
    let newO = O+1;
    setO(newO);
   }
   else if(winMessage === "X Won!"){
    let newX = X+1
    setX(newX);
   }
    if (winMessage == "") {
      console.log(itemArray[index]);
      console.log(itemArray);
      let newTurn = turn;
      let newIconArray = [...turnArray];
      let newItemArray = [...itemArray];
      if (newIconArray[index] === "") {
        newItemArray.splice(index, 1, newTurn);
        setItemArray(newItemArray);
        newIconArray.splice(index, 1, true);
        setTurnArray(newIconArray);
        if (turn === "O") {
          setTurn("X");
        } else if (turn === "X") {
          setTurn("O");
        }
      }
      checkWinner(newItemArray);
    }
  }
  const playAgain = () => {
    if (newTurn == "O") {
      setNewTurn("X");
    } else {
      setNewTurn("O");
    }
    setTurnArray(Array(9).fill(""));
    setItemArray(Array(9).fill(false));
    setWinMessage("");
  };
  function updateStats(hi){
    if(hi == "Tied"){
      setTied(tied+1);
     }
     else if(hi == "O"){
      setO(O+1);
     }
     else if(hi == "X"){
       setX(X+1);
     }
  }
  return (
    <div className="flex items-center tracking-widest min-h-screen flex-col  bg-gradient-to-b from-[#6F2DA8] to-[#4B0082] h-auto">
      <div className="flex justify-evenly flex-col items-center w-3/5">
        <h1 className="text-6xl rounded bg-clip-text text-transparent bg-gradient-to-b from-white to-[#4B0082]/50  text-center drop-shadow-xl my-4">
          TicTacToe
        </h1>
        <h2
          className={`${
            winMessage == "O Won!"
              ? "text-[#007FFF]"
              : winMessage == "X Won!"
              ? "text-[#3EB489]"
              : "text-white"
          } animate-bounce text-3xl text-center  h-14`}
        >
          {winMessage}
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-screen aspect-square  xs:w-96 bg-[#4B0082] rounded-lg shadow-lg flex flex-wrap space-x-0 space-y-0 relative">
            <div className="absolute pointer-events-none w-full h-full flex justify-evenly">
              <div className="w-2 h-full bg-[#6F2DA8] rounded"></div>
              <div className="w-2 h-full bg-[#6F2DA8] rounded"></div>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col items-evenly justify-evenly pointer-events-none">
              <div className="w-full h-2 bg-[#6F2DA8] rounded"></div>
              <div className="w-full h-2 bg-[#6F2DA8] rounded"></div>
            </div>
            {itemArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    item == "O"
                      ? "bg-[#007FFF]"
                      : item == "X"
                      ? "bg-[#3EB489] "
                      : ""
                  } w-1/3 h-1/3 text-center items-center flex justify-center rounded-lg `}
                  onClick={() => changeItem(index)}
                >
                  <div
                    className={`${item == "O" || item == "X" ? "scale-75" : "scale-0"
                    } duration-300 flex justify-center items-center`}
                  >
                    {itemArray[index] ? (
                      item == "O" ? (
                        <svg height="100" width="100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#6F2DA8"
                            strokeWidth="12"
                            fill="transparent"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100"
                          width="100"
                          viewBox="0 0 16 16"
                          stroke="#6F2DA8"
                          fill="transparent"
                        >
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
            {(winMessage=== "O Won!" || winMessage === "X Won!" ) &&(
        <div className={`absolute flex justify-center items-center`}>
          <Player
            className="w-full aspect-square"
            autoplay
            src="https://assets10.lottiefiles.com/packages/lf20_poy1vcfr.json"
          ></Player>
        </div>)}
          </div>
          
        </div>
      </div>
      <div className="flex justify-evenly m-2 flex-col items-center w-4/5">
      <button
          onClick={() => playAgain()}
          className={`${
            winMessage == ""
              ? "bg-green-700/60"
              : "animate-bounce bg-green-700"
          } sm:w-96 hover:bg-green-800 font-extralight flex justify-center items-center w-full text-lg md:w-96 h-14 rounded-lg p-2 my-6 text-white`}
        >
          {winMessage == "" ? "New Game" : "Play Again!"}
        </button>
        <div className="bg-red w-1/2 h-16 sm:w-96 rounded-lg flex flex-col text-gray-300">
          <div className="flex justify-evenly">
            <th className="w-1/3 h-8 flex text-center justify-center ">Tied</th><th className="w-1/3 h-8 flex text-center justify-center ">O Won</th><th className="w-1/3 h-8 flex text-center justify-center ">X Won</th></div>
          <div className="flex justify-evenly">
            <div className="w-1/3 h-8 flex text-center justify-center  ">{tied}</div><div className="w-1/3 h-8 flex text-center justify-center">{O}</div><div className="w-1/3 h-8 flex text-center justify-center">{X}</div></div>
        </div>
        
      </div>
    </div>
  );
}

export default TicTacToe;
