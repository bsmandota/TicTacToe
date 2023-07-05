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
    <div className="flex items-center flex-col lg:flex-row lg:justify-around bg-[#470953] h-screen">
      <div className="">
        <h1 className="text-6xl rounded bg-clip-text text-transparent bg-gradient-to-b from-[#6F2DA8]/50 via-white to-black font-bold text-center drop-shadow-xl my-4">
          TicTacToe
        </h1>
        <h2
          className={`${
            winMessage == "O Won!"
              ? "text-[#007FFF]"
              : winMessage == "X Won!"
              ? "text-[#3EB489]"
              : "text-white"
          } animate-bounce text-3xl text-center font-extrabold h-14`}
        >
          {winMessage}
        </h2>
        <div className="flex justify-center items-center">
          <div className="w-screen aspect-square md:w-96 md:h-96 bg-[#4B0082] rounded-lg shadow-lg flex flex-wrap space-x-0 space-y-0 relative">
            <div className="absolute top-0 left-1/3 w-3 h-full bg-[#6F2DA8] rounded"></div>
            <div className="absolute top-0 right-1/3 w-3 h-full bg-[#6F2DA8] rounded"></div>
            <div className="absolute left-0 top-1/3 h-3 w-full bg-[#6F2DA8] rounded"></div>
            <div className="absolute left-0 bottom-1/3 h-3 w-full bg-[#6F2DA8] rounded"></div>
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
                    className={`${item == "O" || item == "X" ? "scale-100 " : "scale-0"
                    } duration-300 flex justify-center items-center`}
                  >
                    {itemArray[index] ? (
                      item == "O" ? (
                        <svg height="100" width="100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#880085"
                            strokeWidth="12"
                            fill="transparent"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="transparent"
                          height="100"
                          width="100"
                          viewBox="0 0 16 16"
                          stroke="#880085"
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
          </div>
        </div>
        
        {(winMessage=== "O Won!" || winMessage === "X Won!" ) &&(
        <div className={`absolute top-36 flex justify-center items-center z-10`}>
          <Player
            className="w-full h-full"
            autoplay
            style={{height:400,width:400}}
            src="https://assets10.lottiefiles.com/packages/lf20_poy1vcfr.json"
          ></Player>
        </div>)}
      </div>
      <div className="flex justify-evenly flex-col items-center">
      <button
          onClick={() => playAgain()}
          className={`${
            winMessage == ""
              ? "bg-green-700/60"
              : "animate-bounce bg-green-700"
          } hover:bg-green-800 flex justify-center items-center w-4/5 text-lg font-light md:w-96 h-14 rounded-lg p-3 my-6 text-white`}
        >
          {winMessage == "" ? "New Game" : "Play Again!"}
        </button>
        <div className="bg-red h-32 w-96 rounded-lg flex flex-col">
          <div className="flex">
            <th className="w-1/3 h-16 text-center justify-center inline-block bg-purple-700">Tied</th><th className="w-1/3 h-16 text-center justify-center bg-purple-700">O Won</th><th className="w-1/3 h-16 text-center justify-center bg-purple-700">X Won</th></div>
          <div className="flex">
            <div className="w-1/3 h-16 text-center justify-center inline-block  bg-purple-300">{tied}</div><div className="w-1/3 h-16 text-center justify-center bg-purple-300">{O}</div><div className="w-1/3 h-16 text-center justify-center bg-purple-300">{X}</div></div>
        </div>
        
      </div>
    </div>
  );
}

export default TicTacToe;
