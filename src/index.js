import _, { add, findLast } from "lodash";
import "./style.css";

// import { createBoard } from "./startup";

class knightBoard {
    constructor() {
        this.adjacentList = {}
    }

    addSquare = (x, y) => {
        this.adjacentList[[x, y]] = []
        return [x, y]
    }

    addEdge = (square1, square2) => {
        this.adjacentList[square1].push(square2)
    }

    knightPositions = (x, y, n) => {
        let square = this.addSquare(x, y)

        if ((x+2 < n) && (y+1 < n)) {
            this.addEdge(square, [x+2, y+1])
        }
        if ((x-2 >= 0) && (y+1 < n)) {
            this.addEdge(square, [x-2, y+1])
        }
        if ((x+2 < n) && (y-1 >= 0)) {
            this.addEdge(square, [x+2, y-1])
        }
        if ((x+1 < 0) && (y+1 < 0)) {
            this.addEdge(square, [x-2, y-1])
        }
        if ((x+1 < n) && (y+2 < n)) {
            this.addEdge(square, [x+1, y+2])
        }
        if ((x+1 < n) && (y-2 >= 0)) {
            this.addEdge(square, [x+1, y-2])
        }
        if ((x-1 >= 0) && (y+2 < n)) {
            this.addEdge(square, [x-1, y+2])
        }
        if ((x-1 >= 0) && (y-2 >= 0)) {
            this.addEdge(square, [x-1, y-2])
        }
    }

    allKnightPositions = (x, y, n) => {
        if (!this.adjacentList[`${x},${y }`]) {
            this.knightPositions(x, y, n)
            this.adjacentList[`${x},${y}`].map(child => {
                {
                    this.allKnightPositions(child[0], child[1], n)
                }
            })
        }
    }

    numberOfKnightMoves = (xStart, yStart, xEnd, yEnd, n) => {
		this.allKnightPositions(xStart, yStart, n);
		let numberOfKnights = 0;

		let currentSquareList = this.adjacentList[`${xStart},${yStart}`];

		let finalList = [];
		let searchQueue = [];
		currentSquareList.forEach(square => {
			searchQueue.push(square);
		});

		// Cache for already checked squares
		let checked = {};
		checked[[xStart, yStart]] = 'checked';


		while(searchQueue.length > 0) {
			numberOfKnights++; // this is placed here to catch the initial push of the start list
			let currentSquare = searchQueue.shift(); 
			
			// the first list does not make it to the rest of loop so has to be checked here
			if ((currentSquare[0] == xEnd) && (currentSquare[1] == yEnd)) {
				
			// because Breadth-first search doubles the number of edges
			// the final move count has to be divided by 2
				return Math.round(numberOfKnights/2);
			}

			finalList.push(currentSquare);
				if (this.adjacentList[`${currentSquare[0]},${currentSquare[1]}`] &&
					!checked[`${currentSquare[0]},${currentSquare[1]}`]) {
						this.adjacentList[`${currentSquare[0]},${currentSquare[1]}`].forEach(square => {
							if(!checked[`${square[0]},${square[1]}`]) {
								searchQueue.push(square);
								checked[[currentSquare[0],currentSquare[1]]] = 'checked';
                            }
                        })
                    }
        }
    }
}

const board = new knightBoard()
const knightMoves = board.numberOfKnightMoves(2, 0, 0, 0, 5)
console.log(knightMoves)