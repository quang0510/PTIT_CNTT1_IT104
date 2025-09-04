import React, { useState, useEffect } from "react";

import { Table, Modal, Form, Input, Button, Select, Tag } from "antd";

export default function Demo() {

  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingUser, setEditingUser] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {


    const saved = localStorage.getItem("users");
    if (saved) {

      setUsers(JSON.parse(saved));
    }
  }, []);

  const saveData = (data) => {

    localStorage.setItem("users", JSON.stringify(data));
  };

  const showModal = () => {

    setEditingUser(null);
    form.resetFields();

    setIsModalOpen(true);
  };

  const handleEdit = (record) => {

    setEditingUser(record);
    form.setFieldsValue(record);


    setIsModalOpen(true);
  };

  const handleCancel = () => {

    setIsModalOpen(false);

    form.resetFields();
  };

  const handleOk = () => {

    const values = form.getFieldsValue();

    if (!values.name || !values.email) {
      return;
    }

    if (editingUser) {

      const updated = users.map((u) =>
        u.id === editingUser.id ? { ...editingUser, ...values } : u
      );

      setUsers(updated);
      saveData(updated);

    } else {

      const newUser = {
        id: Date.now(),

        name: values.name,
        email: values.email,
        status: values.status || "active",
      };

      const newData = [...users, newUser];
      setUsers(newData);
      saveData(newData);
    }

    form.resetFields();
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {

    const filtered = users.filter((u) => u.id !== id);
    setUsers(filtered);
    saveData(filtered);

  };

  const columns = [

    { title: "Tên", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Trạng thái",
      dataIndex: "status",

      render: (text) =>
        text === "active" ? (
          <Tag color="green">Hoạt động</Tag>
        ) : (
          <Tag color="red">Ngừng hoạt động</Tag>
        ),
    },
    {
      title: "Hành động",
      
      render: (_, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Button size="small" onClick={() => handleEdit(record)}>
            Sửa
          </Button>
          <Button size="small" danger onClick={() => handleDelete(record.id)}>
            Xóa
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý thành viên</h2>

      <Button type="primary" onClick={showModal} style={{ marginBottom: 10 }}>
        Thêm thành viên
      </Button>

      <Table
        dataSource={users}
        columns={columns}
        rowKey="id"
        bordered
        pagination={true}
      />

      <Modal
        title={editingUser ? "Sửa thành viên" : "Thêm thành viên"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Tên">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="status" label="Trạng thái" initialValue="active">
            <Select>
              <Select.Option value="active">Hoạt động</Select.Option>
              <Select.Option value="inactive">Ngừng hoạt động</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
