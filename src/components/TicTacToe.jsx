import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
function TicTacToe() {
  const [newTurn, setNewTurn] = useState("O");
  const [turn, setTurn] = useState(newTurn);
  const [turnArray, setTurnArray] = useState(Array(9).fill(""));
  const [itemArray, setItemArray] = useState(Array(9).fill(false));
  const [winMessage, setWinMessage] = useState("");
  const [tied, setTied] = useState(0);
  const [X, setX] = useState(0);
  const [O, setO] = useState(0);
  const checkWinner = (itemArray) => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== false
    ) {
      updateStats(itemArray[0]);
      return setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== false
    ) {
      updateStats(itemArray[3]);
      return setWinMessage(`${itemArray[3]} Won!`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== false
    ) {
      updateStats(itemArray[6]);
      return setWinMessage(`${itemArray[6]} Won!`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[3] !== false
    ) {
      updateStats(itemArray[0]);
      return setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== false
    ) {
      updateStats(itemArray[1]);
      return setWinMessage(`${itemArray[1]} Won!`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== false
    ) {
      updateStats(itemArray[2]);
      return setWinMessage(`${itemArray[2]} Won!`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== false
    ) {
      updateStats(itemArray[0]);
      return setWinMessage(`${itemArray[0]} Won!`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== false
    ) {
      updateStats(itemArray[2]);
      return setWinMessage(`${itemArray[2]} Won!`);
    }
    let res = 0;
    for (let i = 0; i < 9; i++) {
      if (itemArray[i] !== false) {
        res += 1;
      }
    }
    if (res === 9) {
      updateStats("Tied");
      return setWinMessage("Game Tied!");
    }
  };
  function changeItem(index) {
    if (winMessage === "Game Tied!") {
      let newTied = tied + 1;
      setTied(newTied);
    } else if (winMessage === "O Won!") {
      let newO = O + 1;
      setO(newO);
    } else if (winMessage === "X Won!") {
      let newX = X + 1;
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
  function updateStats(hi) {
    if (hi == "Tied") {
      setTied(tied + 1);
    } else if (hi == "O") {
      setO(O + 1);
    } else if (hi == "X") {
      setX(X + 1);
    }
  }
  function startOver() {
    setTied(0);
    setO(0);
    setX(0);
    playAgain();
  }
  return (
    <div className="flex items-center tracking-widest min-h-screen flex-col  bg-gradient-to-b from-[#6F2DA8] to-[#4B0082] h-auto">
      <div className="flex justify-evenly flex-col items-center w-3/5">
        <h1 className="text-5xl rounded bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-[#4B0082]/50  text-center drop-shadow-xl my-4 overflow-hidden">
          TicTacToe
        </h1>
        <h2
          className={`${
            winMessage == "O Won!"
              ? "animate-[bounce_.5s_ease-in_1.45]"
              : winMessage == "X Won!"
              ? "animate-[bounce_.5s_ease-in_1.45]"
              : ""
          }  text-purple-300 text-3xl text-center  h-14`}
        >
          {winMessage == "" ? `${turn}'s turn` : winMessage}
        </h2>
        <div className="flex justify-center items-center scale-95 xs:scale-100">
          <div className="w-screen aspect-square  xs:w-96 bg-[#4B0082] rounded-lg shadow-lg flex flex-wrap relative">
            <div className="absolute pointer-events-none w-full h-full flex justify-evenly">
              <div className="w-2 h-full bg-purple-300 rounded"></div>
              <div className="w-2 h-full bg-purple-300 rounded"></div>
            </div>
            <div className="absolute w-full h-full top-0 left-0 flex flex-col items-evenly justify-evenly pointer-events-none">
              <div className="w-full h-2 bg-purple-300 rounded"></div>
              <div className="w-full h-2 bg-purple-300 rounded"></div>
            </div>
            {itemArray.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` w-1/3 h-1/3 text-center items-center flex justify-center rounded-lg `}
                  onClick={() => changeItem(index)}
                >
                  <div
                    className={`${
                      item == "O" || item == "X" ? " scale-75 " : "scale-0"
                    } duration-300 flex justify-center items-center`}
                  >
                    {itemArray[index] ? (
                      item == "O" ? (
                        <svg height="100" width="100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="rgb(233 213 255)"
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
                          stroke="rgb(233 213 255)"
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
            {(winMessage === "O Won!" || winMessage === "X Won!") && (
              <div className={`absolute flex justify-center items-center`}>
                <Player
                  className="w-full aspect-square"
                  autoplay
                  src="https://assets4.lottiefiles.com/packages/lf20_tiviyc3p.json"
                ></Player>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-start m-2 flex-col items-center w-full xs:w-96">
        <button
          onClick={() => playAgain()}
          className={`${
            winMessage == "" ? "bg-green-700" : "animate-bounce bg-green-700"
          } hover:bg-green-800 font-extralight flex justify-center items-center w-2/3 text-lg h-14 rounded-lg p-3 my-6 mx-3 text-white`}
        >
          {winMessage == "" ? "New Game" : "Play Again"}
        </button>
        <div className="flex items-center justify-evenly w-full">
          <div className="w-full h-16 rounded-lg flex flex-col text-gray-300 items-center ">
            <div className="flex w-2/3 justify-evenly"
              <th className="w-1/4 h-8 flex text-center items-center justify-center p-2 ">
                Total
              </th>
              <th className="w-1/4 h-8 flex text-center items-center justify-center p-2 ">
                O
              </th>
              <th className="w-1/4 h-8 flex text-center items-center justify-center p-2 ">
                X
              </th>
              <th className="w-1/4 h-8 flex text-center items-center justify-center p-2 ">
                Tied
              </th>
            </div>
            <div className="flex w-2/3 justify-evenly">
              <div className="w-1/4 h-8 flex text-center items-center justify-center p-2">
                {O}
              </div>
              <div className="w-1/4 h-8 flex text-center items-center justify-center p-2">
                {X}
              </div>
              <div className="w-1/4 h-8 flex text-center items-center justify-center p-2  ">
                {tied}
              </div>
            </div>
          </div>
          <button
            onClick={() => startOver()}
            className={`bg-red-700 hover:bg-red-800 font-extralight flex justify-center items-center self-center w-1/4 h-12 rounded-lg p-2 mr-6 text-white`}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default TicTacToe;
