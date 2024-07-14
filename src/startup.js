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
    '6':  [{'neighbour': '5', 'weight': 'left'}, {'neighbour': '13', 'weight': 'down'}],
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
    '17': [{'neighbour': '16', 'weight': 'left'}, {'neighbour': '10', 'weight': 'top'},  {'neighbour': '18', 'weight': 'right'}, {'neighbour': '24', 'weight': 'down'}],
    '18': [{'neighbour': '17', 'weight': 'left'}, {'neighbour': '11', 'weight': 'top'},  {'neighbour': '19', 'weight': 'right'}, {'neighbour': '25', 'weight': 'down'}],
    '19': [{'neighbour': '18', 'weight': 'left'}, {'neighbour': '12', 'weight': 'top'},  {'neighbour': '20', 'weight': 'right'}, {'neighbour': '26', 'weight': 'down'}],
    '20': [{'neighbour': '19', 'weight': 'left'}, {'neighbour': '13', 'weight': 'top'}, {'neighbour': '27', 'weight': 'down'}],
    '21': [{'neighbour': '14', 'weight': 'top'},  {'neighbour': '22', 'weight': 'right'}, {'neighbour': '28', 'weight': 'down'}],
    '22': [{'neighbour': '21', 'weight': 'left'}, {'neighbour': '15', 'weight': 'top'},  {'neighbour': '23', 'weight': 'right'}, {'neighbour': '29', 'weight': 'down'}],
    '23': [{'neighbour': '22', 'weight': 'left'}, {'neighbour': '16', 'weight': 'top'},  {'neighbour': '24', 'weight': 'right'}, {'neighbour': '30', 'weight': 'down'}],
    '24': [{'neighbour': '23', 'weight': 'left'}, {'neighbour': '17', 'weight': 'top'},  {'neighbour': '25', 'weight': 'right'}, {'neighbour': '31', 'weight': 'down'}],
    '25': [{'neighbour': '24', 'weight': 'left'}, {'neighbour': '18', 'weight': 'top'},  {'neighbour': '26', 'weight': 'right'}, {'neighbour': '32', 'weight': 'down'}],
    '26': [{'neighbour': '25', 'weight': 'left'}, {'neighbour': '19', 'weight': 'top'},  {'neighbour': '27', 'weight': 'right'}, {'neighbour': '33', 'weight': 'down'}],
    '27': [{'neighbour': '26', 'weight': 'left'}, {'neighbour': '20', 'weight': 'top'},  {'neighbour': '34', 'weight': 'down'}],
    '28': [{'neighbour': '21', 'weight': 'top'},  {'neighbour': '29', 'weight': 'right'}, {'neighbour': '35', 'weight': 'down'}],
    '29': [{'neighbour': '28', 'weight': 'left'}, {'neighbour': '22', 'weight': 'top'},  {'neighbour': '30', 'weight': 'right'}, {'neighbour': '36', 'weight': 'down'}],
    '30': [{'neighbour': '29', 'weight': 'left'}, {'neighbour': '23', 'weight': 'top'},  {'neighbour': '31', 'weight': 'right'}, {'neighbour': '37', 'weight': 'down'}],
    '31': [{'neighbour': '30', 'weight': 'left'}, {'neighbour': '24', 'weight': 'top'},  {'neighbour': '32', 'weight': 'right'}, {'neighbour': '38', 'weight': 'down'}],
    '32': [{'neighbour': '31', 'weight': 'left'}, {'neighbour': '25', 'weight': 'top'},  {'neighbour': '33', 'weight': 'right'}, {'neighbour': '39', 'weight': 'down'}],
    '33': [{'neighbour': '32', 'weight': 'left'}, {'neighbour': '26', 'weight': 'top'},  {'neighbour': '34', 'weight': 'right'}, {'neighbour': '40', 'weight': 'down'}],
    '34': [{'neighbour': '33', 'weight': 'left'}, {'neighbour': '27', 'weight': 'top'},  {'neighbour': '41', 'weight': 'down'}],
    '35': [{'neighbour': '28', 'weight': 'top'},  {'neighbour': '36', 'weight': 'right'}, {'neighbour': '42', 'weight': 'down'}],
    '36': [{'neighbour': '35', 'weight': 'left'}, {'neighbour': '29', 'weight': 'top'},  {'neighbour': '37', 'weight': 'right'}, {'neighbour': '43', 'weight': 'down'}],
    '37': [{'neighbour': '36', 'weight': 'left'}, {'neighbour': '30', 'weight': 'top'},  {'neighbour': '38', 'weight': 'right'}, {'neighbour': '44', 'weight': 'down'}],
    '38': [{'neighbour': '37', 'weight': 'left'}, {'neighbour': '31', 'weight': 'top'},  {'neighbour': '39', 'weight': 'right'}, {'neighbour': '45', 'weight': 'down'}],
    '39': [{'neighbour': '38', 'weight': 'left'}, {'neighbour': '32', 'weight': 'top'},  {'neighbour': '40', 'weight': 'right'}, {'neighbour': '46', 'weight': 'down'}],
    '40': [{'neighbour': '39', 'weight': 'left'}, {'neighbour': '33', 'weight': 'top'},  {'neighbour': '41', 'weight': 'right'}, {'neighbour': '47', 'weight': 'down'}],
    '41': [{'neighbour': '40', 'weight': 'left'}, {'neighbour': '34', 'weight': 'top'},  {'neighbour': '42', 'weight': 'down'}],
    '42': [{'neighbour': '35', 'weight': 'top'},  {'neighbour': '43', 'weight': 'right'}],
    '43': [{'neighbour': '42', 'weight': 'left'}, {'neighbour': '36', 'weight': 'top'},  {'neighbour': '44', 'weight': 'right'}],
    '44': [{'neighbour': '43', 'weight': 'left'}, {'neighbour': '37', 'weight': 'top'},  {'neighbour': '45', 'weight': 'right'}],
    '45': [{'neighbour': '44', 'weight': 'left'}, {'neighbour': '38', 'weight': 'top'},  {'neighbour': '46', 'weight': 'right'}],
    '46': [{'neighbour': '45', 'weight': 'left'}, {'neighbour': '39', 'weight': 'top'},  {'neighbour': '47', 'weight': 'right'}],
    '47': [{'neighbour': '46', 'weight': 'left'}, {'neighbour': '40', 'weight': 'top'},  {'neighbour': '48', 'weight': 'right'}],
    '48': [{'neighbour': '47', 'weight': 'left'}, {'neighbour': '41', 'weight': 'top'}],
}

// console.log(boardLayOut)
// console.log(boardAdjacencyList)

class legalMove {
    constructor(sourceVertex) {
        this.move = {

        }
    }

}


class adjacencyList {
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
    }
    print(adjacencyList = this.adjacencyList) {
        // console.log('print list')
        // console.log(adjacencyList)

        // loop
        // for (let key in adjacencyList) {
        //     console.log(adjacencyList[key])
        //     for (let subKey in adjacencyList[key]) {
        //         console.log(adjacencyList[key][subKey])
        //     }

        // }

        // recursion
        let moves = []
        let queue = []
        let visited = []
        for (let key in adjacencyList) {
            if (typeof adjacencyList[key] == 'object' && adjacencyList[key] !== null) {
                // console.log(adjacencyList[key])
                // console.log(adjacencyList[key].weight)
                visited.push(adjacencyList[key])
                
                if (adjacencyList[key].weight === 'down') {
                    // console.log(adjacencyList[key])
                    queue.push(adjacencyList[key])
                    // this.print(adjacencyList[key])
                    
                }
                this.print(adjacencyList[key])
            }
        }
        console.log(queue)
        // console.log(visited)

    }
}


const newBoard = new adjacencyList(boardAdjacencyList)
// newBoard.addEdge(boardAdjacencyList)
console.log(newBoard)
// console.log(boardAdjacencyList[0])
newBoard.print()

export { createBoard, adjacencyList as graph };