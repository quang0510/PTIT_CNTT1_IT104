// bài 2
import React, { Component } from 'react'

type State = {
    userName: string;

};

export default class Notification  extends Component<object, State> {

    constructor(props: object){
        super(props);

        this.state={
            userName: "quang"
        }
    }
    componentDidMount() {
        console.log("Component đã được mount");
  }

  render() {
    return (
        <>
        <h3>Đây là component Notification </h3>
        </>
    )
  }
}
