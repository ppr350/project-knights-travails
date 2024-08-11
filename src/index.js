import _, { add, findLast } from "lodash";
import "./style.css";

console.log('Project Knights Travails, I can do it.')

function Node(pos, path) {
    if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7) { // if position of the knight is out of range
        return null                                             // do nothing
    }
    return { pos, path }    // esle, return the posistion and path
}

function knightMoves([x, y], [a, b]) {
    console.log([x, y])
    let q = [Node([x, y], [[x, y]])]
    console.log(q)
    let curentNode = q.shift()

    while (curentNode.pos[0] !== a || curentNode.pos[1] !== b) {
        let moves = [
            [curentNode.pos[0] + 2, curentNode.pos[1] - 1],
            [curentNode.pos[0] + 2, curentNode.pos[1] + 1],
            [curentNode.pos[0] - 2, curentNode.pos[1] - 1],
            [curentNode.pos[0] - 2, curentNode.pos[1] + 1],
            [curentNode.pos[0] + 1, curentNode.pos[1] - 2],
            [curentNode.pos[0] + 1, curentNode.pos[1] + 2],
            [curentNode.pos[0] - 1, curentNode.pos[1] - 2],
            [curentNode.pos[0] - 1, curentNode.pos[1] + 2],
        ]
        moves.forEach((move) => {
            let node = Node(move, curentNode.path.concat([move]))
            if (node) {
                q.push(node)
            }
        })
        curentNode = q.shift()
    }
    console.log(
        `=> You made it in ${curentNode.path.length - 1} moves! Here's your path:`
    )
    curentNode.path.forEach((pos) => {
        console.log(pos)
    })
}

knightMoves([3, 3], [4, 3])