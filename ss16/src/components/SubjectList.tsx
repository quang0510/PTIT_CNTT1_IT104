// bài 1
import React, { Component } from "react";

type StateType = {
  subject: string;
};

export default class SubjectList extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      subject: "",
    };
  }
  render() {
    const subjects: string[] = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];
    return (
      <div>
        <h2> Danh sách môn học</h2>
        <div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {subjects.map((subject: string) => (
              <li
                style={{
                  listStyle: "none",
                  textAlign: "center",
                  border: "1px solid #e0f7fa",
                  borderRadius: "8px",
                  padding: "10px",
                  color: "#1381c1",
                  backgroundColor: "#e0f7fa",
                }}
              >
                {subject}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}