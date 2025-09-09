import { Form, Input, Button, Typography, Card } from "antd";

const { Title, Text } = Typography;


interface LoginFormValues {
  email: string;
  password: string;
}

export default function Login() {
  const onFinish = (values: LoginFormValues) => {
    console.log("Form values:", values);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f0f2f5"
    }}>
      <Card style={{ width: 400 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Login account
        </Title>

        <Form<LoginFormValues>
          name="login"
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Your email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Email is not valid!" }
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

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login an account
            </Button>
          </Form.Item>
        </Form>

        <Text style={{ display: "block", textAlign: "center" }}>
          Already have an account?{" "}
          <a href="#">Register here</a>
        </Text>
      </Card>
    </div>
  );
}
