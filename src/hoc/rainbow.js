import React from 'react'

const Rainbow = (WrappedComponent) =>{
    const colors = ['red','black','blue','orange','purple','yellow','brown','green']
    const randomNum = Math.floor(Math.random()*colors.length)
    const randomColor = colors[randomNum]
    //console.log(randomColor + " " + randomNum)
    const className = randomColor + '-text';
    
    return(props) =>{
        return(
            <div className={className}>
                <WrappedComponent{...props}/>
            </div>
        )
    }
}

export default Rainbow