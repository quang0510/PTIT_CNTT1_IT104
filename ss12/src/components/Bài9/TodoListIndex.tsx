
import "./TodoListIndex.css";

export const TodoListIndex = () => {
  const tasks: string[] = ["ăn", "ngủ", "chơi"];
  return (
    <>
      <div className="task-manager">
        <h2>Quản lý công việc</h2>
        <div className="input-task">
          <input className="add" type="text" placeholder="Thêm công việc..."></input>
          <button className="add-btn">Thêm</button>
        </div>
        <div className="nav-bar">
          <div className="target">Tất cả công việc</div>
        </div>
        <div className="task-list">
          {tasks &&
            tasks.map((task: string, index: number) => {
              return (
                <span className="task" key={index}>
                  <div className="task-detail">
                    <input className="checkbox" type="checkbox"></input>
                    <p>{task}</p>
                  </div>
                  <div className="action">
                    <button>✏️</button>
                    <button>🗑️</button>
                  </div>
                </span>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TodoListIndex;