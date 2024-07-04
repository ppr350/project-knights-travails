// class Graph {
//     constructor() {
//         this.adjacencyList = {}
//     }
//     addVertex(vertex) {
//         if (!this.adjacencyList[vertex]) {
//             this.adjacencyList[vertex] = []
//         }
//     }
//     addEdge(source, destination) {
//         if (!this.adjacencyList[source]) {
//             this.addVertex(source)
//         }
//         if (!this.adjacencyList[destination]) {
//             this.addVertex(destination)
//         }
//         this.adjacencyList[source].push(destination)
//         this.adjacencyList[destination].push(source)
//     }
//     removeEdge(source, destination) {
//         this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination)
//         this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source)
//     }
//     removeVertex(vertex) {
//         while (this.adjacencyList[vertex]){
//             const adjacentVertex = this.adjacencyList[vertex].pop()
//             this.removeEdge(vertex, adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }
// }

// const graph = new Graph()
// console.log(graph)

// const ver1 = graph.addVertex('ver1')
// console.log(ver1)

// const ver2 = graph.addVertex('ver2')
// console.log(ver2)

// const ver3 = graph.addVertex('ver3')
// console.log(ver3)

// console.log(graph)

// graph.addEdge('ver1', 'ver2')
// graph.addEdge('ver1', 'ver3')
// console.log(graph)

// // graph.removeEdge('ver1', 'ver2')
// // graph.removeVertex('ver2')

// // example:
// // adjacencyList: Object {
// //      ver1: ["ver1", "ver3"]
// //      ver2: ["ver1"]
// //      ver3: ["ver1"]
// // }

// // graph.bfs('ver1')                                                // 1st round                    =>                  // 2nd round                    =>                  // 3rd round
// Graph.prototype.bfs = function(start) {                             // start = 'ver1'                                   
//     const queue = [start]                                           // queue = 'ver1'
//     const result = []                                               // []
//     const visited = {}                                              // {}
//     visited[start] = true                                           // {visited['ver1] = true}
//     let currentVertex
//     while (queue.length) {                                          // true                                             // true                                             // true
//         currentVertex = queue.shift()                               // currentVertex = 'ver1', queue = []               // currentVertex = 'ver2', queue = []               // currentVertex = 'ver3', queue = []
//         result.push(currentVertex)                                  // result = ['ver1']                                // result = ['ver1', 'ver2]                         // result = ['ver1', 'ver2', 'ver3']
//         this.adjacencyList[currentVertex].forEach(neighbour => {    // adjacencyList['ver1'].forEach(neighbour)         // adjacencyList['ver1'].forEach(neighbour)
//             if (!visited[neighbour]) {
//                 visited[neighbour] = true                           // visited['ver2] = true                            // visited['ver3'] = true
//                 queue.push(neighbour)                               // queue = ['ver2']                                 // queue = ['ver3']
//             }
//         })
//     }
//     return result                                                                                                                                                           // result = ['ver1', 'ver2', 'ver3']
// }

// // graph.dfsRecursive('ver1')
// Graph.prototype.dfsRecursive = function(start) {        
//     const result = []
//     const visited = {}
//     const adjacencyList = this.adjacencyList
//     (function(vertex) {
//         if (!vertex) return null
//         visited[vertex] = true
//         result.push(vertex)
//         adjacencyList[vertex].forEach(neighbour => {
//             if (!visited[neighbour]) {
//                 return dfs(neighbour)
//             }
//         })
//     })(start)
//     return result
// }

// // graph.dfsIterative('ver1')                                       // 1st round                    =>                  // 2nd round                    =>                  // 3rd round
// Graph.prototype.dfsIterative = function(start) {                    // start = 'ver1'
//     const result = []                                               // result = []
//     const stack = [start]                                           // stack = ['ver1']
//     const visited = {}                                              // {}
//     visited[start] = true                                           // visited['ver1'] = true
//     let currentVertex
//     while (stack.length) {                                          // true                                             // true                                             // true
//         currentVertex = stack.pop()                                 // currentVertex = 'ver1', stack = []               // currentVertex = 'ver2', stack = []               // currentVertex = 'ver3', stack = []
//         result.push(currentVertex)                                  // result = ['ver1']                                // result = ['ver1', 'ver2']                        // result = ['ver1', 'ver2', 'ver3']
//         this.adjacencyList[currentVertex].forEach(neighbour => {    // adjacencyList['ver1'].forEach(neighbour)         // adjacencyList['ver1'].forEach(neighbour)
//             if (!visited[neighbour]) {
//                 visited[neighbour] = true                           // visited['ver2'] = true                           // visited['ver3'] = true
//                 stack.push(neighbour)                               // stack = ['ver2']                                 // stack = ['ver3']
//             }
//         })
//     }
//     return result                                                                                                                                                           // result = ['ver1', 'ver2', 'ver3']
// }

// const depthFirstPrint = (graph, source) => {
//     const stack = [ source ]

//     while (stack.length > 0) {
//         const current = stack.pop()
//         console.log(current)
//         for (let neighbour of graph[current]) {
//             stack.push(neighbour)
//         }
//     }
// }

// const depthFirstPrint = (graph, source) => {
//     console.log(source)
//     for (let neighbour of graph[source]) {
//         depthFirstPrint(graph, neighbour)
//     }
// }

// const breadthFirstPrint = (graph, source) => {
//     const queue = [ source ]
//     while (queue.length > 0) {
//         const current = queue.shift()
//         console.log(current)
//         for (let neighbour of graph[current]) {
//             queue.push(neighbour)
//         }
//     }
// }

// const graph = {
//     a: ['c', 'b'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// }

// depthFirstPrint(graph, 'a')     // abdfce
// breadthFirstPrint(graph, 'a')

// const hasPath = (graph, src, dst) => {
//     const queue = [ src ]

//     while (queue.length > 0) {
//         const current = queue.shift()
//         if (current === dst) return true
//         for (let neighbour of graph[current]) {
//             queue.push(neighbour)
//         }
//     }
//     return false
// }

// const hasPath = (graph, src, dst) => {
//     if (src === dst) return true

//     for (let neighbour of graph[src]) {
//         if (hasPath(graph, neighbour, dst)) {
//             return true
//         }
//     }
//     return false
// }

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// }

// hasPath(graph, 'f', 'k') // true

// const undirectedPath = (edges, nodeA, nodeB) => {
//     const graph = buildGraph(edges)
//     return hasPath(graph, nodeA, nodeB, new Set())
// }

// const hasPath = (graph, src, dst, visited) => {
//     if (src === dst) {
//         console.log(src, dst)
//         return true
//     }
//     if (visited.has(src)) return false
//     visited.add(src)

//     for (let neighbour of graph[src]) {
//         if (hasPath(graph, neighbour, dst, visited) === true) {
//             return true
//         }
//     }
//     return false
// }

// const buildGraph = (edges) => {
//     const graph = {}

//     for (let edge of edges) {
//         const [a, b] = edge
//         if (!(a in graph)) graph[a] = []
//         if (!(b in graph)) graph[b] = []
//         graph[a].push(b)
//         graph[b].push(a)
//     }

//     return graph
// }

// const edges = [
//     ['i', 'j'],
//     ['k', 'i'],
//     ['m', 'k'],
//     ['k', 'l'],
//     ['o', 'n']
// ]

// undirectedPath(edges, 'j', 'm')

// const connectedComponentsCount = (graph) => {
//     const visited = new Set()
//     let count = 0
//     for (let node in graph) {
//         if (explore(graph, node, visited) === true) {
//             count += 1
//         }
//     }
//     console.log(count)
// }

// const explore = (graph, current, visited) => {
//     if (visited.has(String(current))) return false

//     visited.add(String(current))

//     for (let neighbour of graph[current]) {
//         explore(graph, neighbour, visited)
//     }
//     return true
// }

// connectedComponentsCount({
//     0: [8, 1, 5],
//     1: [0],
//     5: [0,8],
//     8: [0, 5],
//     2: [3, 4],
//     3: [2, 4],
//     4: [3, 2]
// })

