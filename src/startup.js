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
    '0':  [{'neighbour': '7', 'weight': 'down'}, {'neighbour': '1', 'weight': 'right'}],
    '1':  [{'neighbour': '0', 'weight': 'left'}, {'neighbour': '8', 'weight': 'down'},  {'neighbour': '2', 'weight': 'right'}],
    '2':  [{'neighbour': '1', 'weight': 'left'}, {'neighbour': '9', 'weight': 'down'},  {'neighbour': '3', 'weight': 'right'}],
    '3':  [{'neighbour': '2', 'weight': 'left'}, {'neighbour': '10', 'weight': 'down'}, {'neighbour': '4', 'weight': 'right'}],
    '4':  [{'neighbour': '3', 'weight': 'left'}, {'neighbour': '11', 'weight': 'down'}, {'neighbour': '5', 'weight': 'right'}],
    '5':  [{'neighbour': '4', 'weight': 'left'}, {'neighbour': '12', 'weight': 'down'}, {'neighbour': '6', 'weight': 'right'}],
    '6':  [{'neighbour': '5', 'weight': 'left'}, {'neighbour': '13', 'weight': 'down'},                                      ],
    '7':  [{'neighbour': '0', 'weight': 'up'},   {'neighbour': '8', 'weight': 'right'}, {'neighbour': '14', 'weight': 'down'}],
    '8':  [{'neighbour': '7', 'weight': 'left'}, {'neighbour': '1', 'weight': 'top'},   {'neighbour': '9', 'weight': 'right'},  {'neighbour': '15', 'weight': 'down'}],
    '9':  [{'neighbour': '8', 'weight': 'left'}, {'neighbour': '2', 'weight': 'top'},   {'neighbour': '10', 'weight': 'right'}, {'neighbour': '16', 'weight': 'down'}],
    '10': [{'neighbour': '9', 'weight': 'left'}, {'neighbour': '3', 'weight': 'top'},  {'neighbour': '11', 'weight': 'right'}, {'neighbour': '17', 'weight': 'down'}],
    '11': [{'neighbour': '10', 'weight': 'left'}, {'neighbour': '4', 'weight': 'top'},  {'neighbour': '12', 'weight': 'right'}, {'neighbour': '18', 'weight': 'down'}],
    '12': [{'neighbour': '11', 'weight': 'left'}, {'neighbour': '5', 'weight': 'top'},  {'neighbour': '13', 'weight': 'right'}, {'neighbour': '19', 'weight': 'down'}],
    '13': [{'neighbour': '12', 'weight': 'left'}, {'neighbour': '6', 'weight': 'top'},  {'neighbour': '14', 'weight': 'right'}, {'neighbour': '20', 'weight': 'down'}],
    '14': [{'neighbour': '13', 'weight': 'left'}, {'neighbour': '7', 'weight': 'top'},  {'neighbour': '15', 'weight': 'right'}, {'neighbour': '21', 'weight': 'down'}],
    '15': [{'neighbour': '14', 'weight': 'left'}, {'neighbour': '8', 'weight': 'top'},  {'neighbour': '16', 'weight': 'right'}, {'neighbour': '22', 'weight': 'down'}],
    '16': [{'neighbour': '15', 'weight': 'left'}, {'neighbour': '9', 'weight': 'top'},  {'neighbour': '17', 'weight': 'right'}, {'neighbour': '23', 'weight': 'down'}],
    '17':
}

// console.log(boardLayOut)
// console.log(boardAdjacencyList)

class legalMove {
    constructor(sourceVertex) {
        this.move = {
            ['']
        }
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