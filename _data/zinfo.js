const e = require("cors");

// this is a regular  function 
function UserCtrl() {
    this.user = {
        first: 'Larray',
        last: 'Samuel'
    }

    this.bye = function () {
        alert('bye' + this.user.first);
    }
}


//using this function inside a template 

/*
 ng-controller

 UserCtrl as uCtrl 

 uCtrl.user.first 
 uCtrl.user.bye 
*/
 
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];


function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] == [to];
        } else {
            graph[from].push(to);
        }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);


// access a route parameter
/*
ngOnInit(){
    this.route.paramMap.subscribe(params =>{
        // convert number to string 
        let id = +params.get('id');
        console.log(id);
    })
}
*/