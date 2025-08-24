import React, { Component } from 'react'

type State={
    email: string
}

export default class Bài1 extends Component<object , State> {
    constructor(props : object){
        super(props);

        this.state={

            email : ""
        }

    }
  render() {
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{

        this.setState({ email: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent)=>{

        e.preventDefault();
        alert(`Email người dùng nhập: ${this.state.email}`);
    }

    return (
        <>
        <h1>Form</h1>
        <form onSubmit={handleSubmit} action="">
            <div>
                <label htmlFor="">Email</label>
                <br />
                <input type="text" onChange={handleChange} />
                <button type='submit'>Submit</button>
            </div>
        </form>
        
        </>
    )
  }
}
