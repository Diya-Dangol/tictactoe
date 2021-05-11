import React, {useState} from 'react';
import Board from './Board';
import { CalculateWinner } from './CalculateWinner';

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [XIsNext, setXIsNext] = useState(true);
    const winner = CalculateWinner(board);
    const [count, setCount] = useState(0);

    const handleClick = (i) => {
        const boardCopy = [...board];
        //if user click an occupied sqyare of or if game is won, return
        if(winner || boardCopy[i]) return;
        setCount(count+1);
        // put an X or an O in the clicked square
        boardCopy[i] = XIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!XIsNext);
    }

    const newGame = () => {
        setBoard(Array(9).fill(null));
    }
    
    return(
        <div>
            <Board squares={board} onClick={handleClick} />
            <div >
                <p>
                    {winner ? 'Winner:' + winner : 
                    'Next Player:' + (XIsNext ? 'X' : 'O')}
                </p>
            </div>
            <button onClick={newGame}>
                New Game 
            </button>
            {count===9 && !winner ? <div>No one won</div>: null}

        </div>
    )
}

export default Game;