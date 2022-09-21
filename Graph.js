class graph{
    constructor()
    {
        this.node=new Map()
        this.vertices=0;
        this.edges=0;
        this.visited={}
    }

    insertNode(data)
    {
        this.node.set(data,[])
        this.vertices++
    }
    hasNode(data)
    {
        if(!this.node.get(data))
        {
            return false
        }
        return true

        
    }

    getNeghibour(data)
    {
        if(!this.hasNode(data))
        {
            return false;
        }
        return this.node.get(data)
    }

    updateNode(data,val)
    {
        let curr=this.getNeghibour(data)
        this.edges=this.edges-curr.length;

        this.node.set(data,val)
        this.edges=this.edges+val.length

        val.map((el)=>{
            if(!this.hasNode(el))
            {
                this.insertNode(el)
            }
        })
    }

    addEdges(data1,data2)
    {
        if(!this.hasNode(data1))
        {
            this.insertNode(data1)
        }
        if(!this.hasNode(data2))
        {
            this.insertNode(data2)
        }

        let neighbour=this.getNeghibour(data1)

        if(!neighbour.includes(data2))
        {
            neighbour.push(data2)
            this.node.set(data1,neighbour)
            this.edges++
        }
    }

    MinimunTransverse()
    {
        let data=this.node.keys()
        let count=0;
        let val=8;
        while(val!=undefined)
        {
            val=data.next().value
            if(val!=undefined && !this.visited[val])
            {
                this.bfs(val)
                count++
            }
        }

        console.log(`Minium path required to transverse is ${count}`)
    }

    dfs(data)
    {
        this.visited[data]=true;

        let curr=this.node.get(data)

        for(let i=0;i<curr.length;i++)
        {
            if(!this.visited[curr[i]])
            {
                this.dfs(curr[i])
            }
        }
    }

    bfs(data)
    {
        this.visited[data]=true;
        let market=[]

        market.push(data)

        while(market.length>0)
        {
            let curr=this.node.get(market[0])
            market.shift()

            for(let i=0;i<curr.length;i++)
            {
                if(!this.visited[curr[i]])
                {
                    this.visited[curr[i]]=true
                    market.push(curr[i])
                }
            }
        }
    }
}


let data=new graph()
data.insertNode(5)
data.insertNode(4)
data.insertNode(8)
data.insertNode(7)
data.updateNode(5,[3,4])
data.addEdges(4,8)

data.MinimunTransverse()

console.log(data)