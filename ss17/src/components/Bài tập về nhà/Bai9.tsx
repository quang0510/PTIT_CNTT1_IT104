import React, { useEffect, useRef, useState } from "react";

import { v7 as generateId } from "uuid";

interface Job {
  id: number | string;
  name: string;
  isCompleted: boolean;
}

export default function Todolist() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Quản lý công việc";

    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, []);

  const [inputValue, setInputValue] = useState<string>("");
  const [listJob, setListJob] = useState<Job[]>(() => {
    const listJobLocal = localStorage.getItem("listJob");
    const listJobLocalParse = (listJobLocal && JSON.parse(listJobLocal)) || [];

    return listJobLocalParse;
  });

  const saveData = (updateData: Job[]) => {
    setListJob(updateData);


    localStorage.setItem("listJob", JSON.stringify(updateData));
  };


  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue) {

      const newJob: Job = {
        id: generateId(),
        name: inputValue,
        isCompleted: false,
      };

     
      const listJobClone = [...listJob, newJob];


      saveData(listJobClone);


      setInputValue("");
    } else {
      alert("Tên công việc không được để trống");
    }
  };


  const handleDelete = (job: Job) => {
    const isConfirm = confirm(
      `Bạn có muốn xóa công việc ${job.name} này không?`
    );

    if (isConfirm) {

      const filterJob = listJob.filter((jobItem: Job) => jobItem.id !== job.id);


      saveData(filterJob);
    }
  };

  // Hàm cập nhật trạng thái công việc
  const handleChangeStatus = (id: number | string) => {
    const listJobUpdated = listJob.map((job: Job) => {
      if (job.id === id) {
        job.isCompleted = !job.isCompleted;
      }

      return job;
    });


    saveData(listJobUpdated);
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    Quản lý công việc
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex justify-content-center
                              align-items-center mb-4"
                  >
                    <div className="flex-fill">
                      <input
                        ref={inputRef}
                        onChange={handleChangeInput}
                        value={inputValue}
                        type="text"
                        id="form2"
                        className="form-control"
                      />
                    </div>
                    <button type="submit" className="btn btn-info ms-2">
                      Thêm
                    </button>
                  </form>
      
                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>
   
                  <div className="tab-content">
                    <div className="tab-pane fade show active">
                      <ul className="list-group mb-0">
                        {listJob.map((job: Job) => (
                          <li
                            key={job.id}
                            className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                            style={{ backgroundColor: "#f4f6f7" }}
                          >
                            <div>
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={job.isCompleted}
                                onChange={() => handleChangeStatus(job.id)}
                              />
                              {job.isCompleted ? (
                                <s>{job.name}</s>
                              ) : (
                                <span>{job.name}</span>
                              )}
                            </div>
                            <div>
                              <a
                                href="#!"
                                className="text-info"
                                title="Sửa công việc"
                              >
                                <i className="fas fa-pencil-alt me-3" />
                              </a>
                              <a
                                onClick={() => handleDelete(job)}
                                href="#!"
                                className="text-danger"
                                title="Xóa công việc"
                              >
                                <i className="fas fa-trash-alt" />
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}