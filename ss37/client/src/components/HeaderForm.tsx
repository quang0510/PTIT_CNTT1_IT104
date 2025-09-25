import { message, Modal } from "antd";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import type { Student } from "../redux/slices/students.slices";

import { addStudent, editStudentInfo } from "../apis/getData";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function HeaderForm() {
  const dispatch = useAppDispatch();
  const editStudent = useAppSelector((state) => state.formAction);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>("");
  const [ageInput, setAgeInput] = useState<number>(0);
  const [gradeInput, setGradeInput] = useState<string>("");
  const [errorInform, setErrorInform] = useState<string>("");

  const openAddStudent = () => {
    setIsModalOpen(true);
    setErrorInform("")
  };
  useEffect(() => {
    console.log(editStudent);
    if (editStudent.mode === "edit") {
      setIsModalOpen(true);
      setAgeInput(editStudent.editInfor.age);
      setGradeInput(editStudent.editInfor.grade);
      setNameInput(editStudent.editInfor.name);
    }
  }, [editStudent]);

  const handleAddStudent = () => {
    // setIsModalOpen(false);
    console.log(nameInput, ageInput, gradeInput);
    if (!nameInput || !ageInput || !gradeInput) {
      setErrorInform("Thông tin học sinh không để trống");
    } else {
      setErrorInform("");
      const newStudent: Student = {
        name: nameInput,
        age: ageInput,
        grade: gradeInput,
      };
      console.log(newStudent);
      dispatch(addStudent(newStudent));
      setAgeInput(0);
      setGradeInput("");
      setNameInput("");
      setIsModalOpen(false);
      messageApi.open({
        type: "success",
        content: "Thêm sinh viên thành công",
      });
    }
  };

  const handleEditStudent = () => {
    if (!nameInput || !ageInput || !gradeInput) {
      setErrorInform("Thông tin học sinh không để trống");
    } else {
      setErrorInform("");
      const updateInfor = {
        ...editStudent.editInfor,
        name: nameInput,
        age: ageInput,
        grade: gradeInput,
      };
      dispatch(editStudentInfo(updateInfor))
      setAgeInput(0);
      setGradeInput("");
      setNameInput("");
      setIsModalOpen(false);
      messageApi.open({
        type: "success",
        content: "Cập nhật thông tin sinh viên thành công",
      });
      editStudent.mode = "add"
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-gray-900">🎓 Student Manager</h1>
        <Button
          onClick={openAddStudent}
          className="w-[fit-content]"
          variant="contained"
        >
          ADD STUDENT
        </Button>
      </div>
      <Modal
        title={<h1 className="text-xl">Add Student</h1>}
        closable={true}
        open={isModalOpen}
        onOk={
          editStudent.mode === "edit" ? handleEditStudent : handleAddStudent
        }
        okText={editStudent.mode !== "edit" ? "ADD" : "SAVE"}
        cancelText="CANCEL"
        onCancel={handleCancel}
        destroyOnHidden
      >
        <div className="flex flex-col gap-3">
          <TextField
            value={nameInput}
            onChange={(e) => {
              setErrorInform("");
              setNameInput(e.target.value);
            }}
            className="w-[100%]"
            label="Name"
            variant="outlined"
            error={errorInform !== ""}
            helperText={errorInform !== "" ? "Tên học sinh không để trống" : ""}
          />
          <TextField
            type="number"
            value={ageInput}
            onChange={(e) => {
              setErrorInform("");
              setAgeInput(Number(e.target.value));
            }}
            className="w-[100%]"
            label="Age"
            variant="outlined"
            error={errorInform !== ""}
            helperText={
              errorInform !== "" ? "Tuổi học sinh không để trống" : ""
            }
          />
          <TextField
            value={gradeInput}
            onChange={(e) => {
              setErrorInform("");
              setGradeInput(e.target.value);
            }}
            className="w-[100%]"
            label="Grade"
            variant="outlined"
            error={errorInform !== ""}
            helperText={errorInform !== "" ? "Lớp học không để trống" : ""}
          />
        </div>
      </Modal>
      {contextHolder}
    </>
  );
}