const data = {
    user : [
        {id:1,name:"kp"},
        {id:2,name:"kp2"},
    ]
}

const x = {...data,user:[...data.user,{id:3,name:"kp3"}]}
console.log(x)