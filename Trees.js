class node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}


class tree{
    constructor(){
        this.root=null;
    }

    insert(data)
    {
        let n=new node(data)
        if(this.root==null)
        {
            this.root=n;
            return
        }


        let current=this.root;

        while(true)
        {
            if(data<current.data)
            {
                if(current.left==null)
                {
                    current.left=n;
                    return
                }
                current=current.left;
            }
            else
            {
                if(current.right==null)
                {
                    current.right=n;
                    return
                }
    
                current=current.right
            }
        }

    }
}

//Left root right
function inOrder(root)
{
    if(root==null)
    {
        return []
    }

    let result=[]

    if(root.left!=null)
    {
        result.push(...inOrder(root.left))
    }

    result.push(root.data)

    if(root.right!=null)
    {
        result.push(...inOrder(root.right))
    }

    return result
}

//root left right
function postOrder(root)
{
    if(root==null)
    {
        return []
    }

    let result=[]
    result.push(root.data)

    if(root.left!=null)
    {
        result.push(...postOrder(root.left))
    }

    if(root.right!=null)
    {
        result.push(...postOrder(root.right))
    }

    return result
}


let data=new tree()
data.insert(5)
data.insert(8)
data.insert(3)
data.insert(2)


console.log(data)


let outi=inOrder(data.root)

let outi2=postOrder(data.root)

console.log(outi)

console.log(outi2)