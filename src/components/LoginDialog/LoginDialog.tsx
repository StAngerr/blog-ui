// LoginDialog.js
import  { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

export const LoginDialog = ({ visible, onClose }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);
            const values = await Promise.resolve()
            console.log('Login:', values);
            onClose(); // Close the dialog after successful login (replace with your logic)
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            title="Login"
            open={visible}
            onCancel={onClose}
            footer={[
                <Button key="close" onClick={onClose}>
                    Close
                </Button>,
                <Button key="login" type="primary" loading={loading} onClick={handleLogin}>
                    Login
                </Button>,
            ]}
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please enter your username' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please enter your password' }]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    );
};

