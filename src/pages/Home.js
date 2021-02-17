import React, { Component } from 'react'
import Card from "../components/Card"
import peopleArray from "../starter.json"

export default class Home extends Component {

    state = {
        people:[],
        displayed:[],
        search:""
    }

    componentDidMount(){
        this.setState({people:peopleArray,displayed:peopleArray})
    }

    handleInputeChange = event =>{
        const name = event.target.name
        const value = event.target.value

        const id = event.target.getAttribute("data-id")
        const stateCopy = [...this.state.people]
        stateCopy.forEach(obj=>{
            if(obj.id == id){
                obj[name] = value
            }
        })
        this.setState({people:stateCopy,displayed:stateCopy})
        

    }

    handleSearch = (event)=>{
        const {name,value}= event.target

        this.setState({[name]:value})
        // const newArray = this.state.people.filter(obj => {
        //     const last = obj.name
        //     if(value === last){
        //         return obj
        //     }
        // })
        // this.setState({displayed:newArray})
    }

    // updateDisplay= ()=>{
    //     const newArray = this.state.people.filter(obj => {
    //         const last = obj.name
    //         if(this.state.search === last){
    //             return obj
    //         }
    //     })
    //     this.setState({displayed:newArray})
    // }

    render() {
        return (
            <div>
                <label>Search:</label>
                <input onChange={this.handleSearch} type="text" name="search" value={this.state.search}  />
                {[...this.state.people].filter(obj=> obj.name.toLowerCase().includes(this.state.search.toLowerCase())).map(person => <Card data={person} onChange={this.handleInputeChange}/>)}
            </div>
        )
    }
}
