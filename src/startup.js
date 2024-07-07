import { forEach } from "lodash";

class createBoard {
    constructor() {
        
    }
}

const boardLayOut = [
    [ 0,  1,  2,  3,  4,  5,  6],
    [ 7,  8,  9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34],
    [35, 36, 37, 38, 39, 40, 41],
    [42, 43, 44, 45, 46, 47, 48]
]

const boardAdjacencyList = {
    '0': [                                      {'neighbour': '7', 'weight': 'down'}, {'neighbour': '1', 'weight': 'right'}],
    '1': [{'neighbour': '0', 'weight': 'left'}, {'neighbour': '8', 'weight': 'down'}, {'neighbour': '2', 'weight': 'right'}],
    '2': [{'neighbour': '1', 'weight': 'left'}, {'neighbour': '9', 'weight': 'down'}, {'neighbour': '3', 'weight': 'right'}],
    '3': [{'neighbour': '2', 'weight': 'left'}, {'neighbour': '10', 'weight': 'down'}, {'neighbour': '4', 'weight': 'right'}],
    '4': [{'neighbour': '3', 'weight': 'left'}, {'neighbour': '11', 'weight': 'down'}, {'neighbour': '5', 'weight': 'right'}],
    '5': [{'neighbour': '4', 'weight': 'left'}, {'neighbour': '12', 'weight': 'down'}, {'neighbour': '6', 'weight': 'right'}],
    '6': [{'neighbour': '5', 'weight': 'left'}, {'neighbour': '13', 'weight': 'down'},                                      ],
}

// console.log(boardLayOut)
// console.log(boardAdjacencyList)

class legalMove {
    constructor(sourceVertex) {
        
    }
}


class graph {
    constructor(adjacencyList) {
        this.adjacencyList = adjacencyList
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    addEdge(boardObject) {
        for (let source in boardObject) {
            console.log(source)
            console.log(boardObject[source])
            const [ ...destinations ] = boardObject[source]
            console.log(...destinations)
            // for (let dest in [...destinations]) {
            //     console.log(dest)
            // }
            // if (!this.adjacencyList[source]) {
            //     this.addVertex(source)
            // }
            // if (!this.adjacencyList[boardObject[source]]) {
            //     this.addVertex(dest)
            // }
        }
        // console.log(this.adjacencyList)

        // this.adjacencyList[source] = 
    }
}

const newBoard = new graph(boardAdjacencyList)
// newBoard.addEdge(boardAdjacencyList)
console.log(newBoard)

export { createBoard, graph };