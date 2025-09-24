import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInputValue, addTask, deleteTask, updateTask } from "../redux/slice/taskManager.slice";
import axios from "axios";
import { changeCompletion } from "../redux/slice/taskManagerArray.slice";



interface Task {

  id: number;
  name: string;
  priority: "HIGH" | "MEDIUM" | "LOW";
  completion: boolean;
}


export default function TaskManager() {

  const value = useSelector((state: { task: Task }) => state.task);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [reload, setReload] = useState(0);


  useEffect(() => {

    axios.get<Task[]>("http://localhost:3000/tasks").then((res) => setTasks(res.data));
  }, [reload]);


  const handleAddTask = () => {

    dispatch(
      addTask({
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        name: value.name,
        priority: value.priority,
        completion: false,

      })
    );
    dispatch(getInputValue({ field: "name", value: "" }));
    setReload(reload + 1);
  };


  const handleDeleteTask = (id: number) => {

    dispatch(deleteTask({ id }));
    setReload(reload + 1);
  };

  const handleUpdateTask = (task: Task) => {
    
    const newName = prompt("Nhập tên công việc mới:", task.name);
    const newPriority = prompt("Nhập độ ưu tiên mới (HIGH/MEDIUM/LOW):", task.priority);

    if (newName && newPriority) {
      dispatch(updateTask({ id: task.id, name: newName, priority: newPriority as Task["priority"] }));
      setReload(reload + 1);
    }
  };

  const handleToggleCompletion = (task: Task) => {

    dispatch(changeCompletion({ id: task.id, value: !task.completion }));
    setReload(reload + 1);
  };

  const filterByPriority = (e: React.ChangeEvent<HTMLSelectElement>) => {

    if (e.target.value === "") {
      axios.get<Task[]>("http://localhost:3000/tasks").then((res) => setTasks(res.data));
    } else {
      setTasks([...tasks.filter((task) => task.priority === e.target.value)]);
    }
  };

  const filterByCompletion = (e: React.ChangeEvent<HTMLSelectElement>) => {

    if (e.target.value === "") {
      axios.get<Task[]>("http://localhost:3000/tasks").then((res) => setTasks(res.data));
    } else {
      setTasks([...tasks.filter((task) => String(task.completion) === e.target.value)]);
    }
  };

  const filterByName = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.value === "") {
      axios.get<Task[]>("http://localhost:3000/tasks").then((res) => setTasks(res.data));
    } else {
      setTasks([...tasks.filter((task) => task.name.includes(e.target.value))]);
    }
  };


  return (
    <div className="task-manager">
      <h2>📑 Task Manager</h2>

      <div className="task-input">
        <input
          type="text"
          placeholder="Công việc mới"
          value={value.name}
          onChange={(e) =>
            dispatch(getInputValue({ field: "name", value: e.target.value }))
          }
        />
        <select
          value={value.priority}
          onChange={(e) =>
            dispatch(getInputValue({ field: "priority", value: e.target.value }))
          }
        >
          <option value="HIGH">Cao</option>
          <option value="MEDIUM">Trung bình</option>
          <option value="LOW">Thấp</option>
        </select>
        <button onClick={handleAddTask}>THÊM</button>
      </div>

      <div className="task-filters">
        <select onChange={filterByCompletion}>
          <option value="">Tất cả</option>
          <option value="true">Hoàn thành</option>
          <option value="false">Chưa làm</option>
        </select>
        <select onChange={filterByPriority}>
          <option value="">Tất cả</option>
          <option value="HIGH">Cao</option>
          <option value="MEDIUM">Trung bình</option>
          <option value="LOW">Thấp</option>
        </select>
        <input type="text" placeholder="Tìm kiếm" onChange={filterByName} />
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                type="checkbox"
                checked={task.completion}
                onChange={() => handleToggleCompletion(task)}
              />
              <span className={task.completion ? "completed" : ""}>
                {task.name}
              </span>
              <span className={`priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </div>
            <div>
              <button className="delete-btn" onClick={() => handleDeleteTask(task.id)}>🗑</button>
              <button className="edit-btn" onClick={() => handleUpdateTask(task)}>✏️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
