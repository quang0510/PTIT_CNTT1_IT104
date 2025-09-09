import { Form, Input, Button, Typography, Card } from "antd";

const { Title, Text } = Typography;

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const onFinish = (values: RegisterFormValues) => {
    console.log("Register values:", values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f2f5",
      }}
    >
      <Card style={{ width: 400 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Create account
        </Title>

        <Form<RegisterFormValues>
          name="register"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Your email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Email is not valid!" },
            ]}
          >
            <Input placeholder="name@company.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Create an account
            </Button>
          </Form.Item>
        </Form>

        <Text style={{ display: "block", textAlign: "center" }}>
          Already have an account?{" "}
          <a href="/login">Login here</a>
        </Text>
      </Card>
    </div>
  );
}
