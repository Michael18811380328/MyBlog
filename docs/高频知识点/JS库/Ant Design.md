# Ant Design

阿里巴巴开源的企业级 UI 组件库，支持 React 和 Vue。

* 主官网：<https://ant.design/>（v5 最新版）

* 中文文档：<https://ant.design/docs/react/introduce-cn>

* GitHub 仓库：<https://github.com/ant-design/ant-design>

* 核心特点：基于 React 的企业级 UI 设计体系，组件丰富、开箱即用、可定制性强、支持 TypeScript、响应式设计。

AntD 提供 80+ 企业级组件，核心分类如下：

1. **基础组件**：Button（按钮）、Input（输入框）、Typography（排版）、Icon（图标）、Space（间距）；

2. **布局组件**：Layout（布局）、Grid（栅格）、Card（卡片）、Divider（分割线）；

3. **表单组件**：Form（表单）、Select（选择器）、DatePicker（日期选择器）、Checkbox/Radio；

4. **数据展示**：Table（表格）、List（列表）、Avatar（头像）、Tag（标签）、Progress（进度条）；

5. **反馈组件**：Modal（弹窗）、Message/Notification（消息提示）、Alert（警告）、Drawer（抽屉）；

6. **导航组件**：Menu（菜单）、Pagination（分页）、Breadcrumb（面包屑）、Tabs（标签页）。

案例

```javascript
import React, { useState } from 'react';
// 引入 AntD 核心组件
import { 
  ConfigProvider, Button, Form, Input, InputNumber, 
  Card, List, Space, Typography, message, Layout, 
  Divider, Avatar 
} from 'antd';
// 引入 AntD 图标
import { UserOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
// 引入中文语言包（默认中文，可省略，如需英文引入 en_US）
import zhCN from 'antd/locale/zh_CN';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

function App() {
  // 1. 状态管理：表单数据 + 用户列表
  const [form] = Form.useForm();
  const [userList, setUserList] = useState([
    { id: 1, name: '张三', age: 25, email: 'zhangsan@test.com' }
  ]);

  // 2. 表单提交事件
  const onFinish = (values) => {
    // 生成新用户 ID
    const newId = userList.length > 0 ? Math.max(...userList.map(u => u.id)) + 1 : 1;
    const newUser = { id: newId, ...values };
    // 更新用户列表
    setUserList([...userList, newUser]);
    // 重置表单
    form.resetFields();
    // 消息提示
    message.success('用户添加成功！');
  };

  // 3. 删除用户事件
  const handleDelete = (id) => {
    setUserList(userList.filter(user => user.id !== id));
    message.warning(`删除用户 ID: ${id}`);
  };

  // 4. 自定义主题 Token（覆盖默认样式）
  const customToken = {
    colorPrimary: '#1890ff', // 主色调
    fontSize: 14, // 基础字体大小
    borderRadius: 6, // 圆角
    marginXXS: 4, // 最小间距
  };

  return (
    // 全局配置：语言 + 自定义主题
    <ConfigProvider locale={zhCN} theme={{ token: customToken }}>
      <Layout style={{ minHeight: '100vh' }}>
        {/* 头部 */}
        <Header style={{ background: '#fff', padding: '0 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
          <Title level={3} style={{ margin: '16px 0' }}>AntD 基础案例 - 用户管理</Title>
        </Header>

        {/* 内容区域 */}
        <Content style={{ padding: '20px', maxWidth: 1000, margin: '0 auto' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {/* 表单卡片 */}
            <Card title="添加用户" bordered={true}>
              <Form
                form={form}
                layout="horizontal"
                onFinish={onFinish}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 20 }}
              >
                <Form.Item
                  label="姓名"
                  name="name"
                  rules={[{ required: true, message: '请输入姓名！' }]}
                >
                  <Input placeholder="请输入姓名" prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                  label="年龄"
                  name="age"
                  rules={[{ required: true, message: '请输入年龄！' }]}
                >
                  <InputNumber min={1} max={120} placeholder="请输入年龄" style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                  label="邮箱"
                  name="email"
                  rules={[
                    { required: true, message: '请输入邮箱！' },
                    { type: 'email', message: '请输入正确的邮箱格式！' }
                  ]}
                >
                  <Input placeholder="请输入邮箱" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4 }}>
                  <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                    添加用户
                  </Button>
                </Form.Item>
              </Form>
            </Card>

            {/* 分割线 */}
            <Divider orientation="left">用户列表</Divider>

            {/* 用户列表 */}
            <List
              dataSource={userList}
              renderItem={(user) => (
                <List.Item
                  key={user.id}
                  actions={[
                    <Button 
                      type="text" 
                      danger 
                      icon={<DeleteOutlined />} 
                      onClick={() => handleDelete(user.id)}
                    >
                      删除
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar>{user.name.substring(0, 1)}</Avatar>}
                    title={<Text strong>{user.name}</Text>}
                    description={
                      <>
                        <Text>年龄：{user.age} | 邮箱：{user.email}</Text>
                      </>
                    }
                  />
                </List.Item>
              )}
              bordered
              emptyText="暂无用户数据"
            />
          </Space>
        </Content>

        {/* 底部 */}
        <Footer style={{ textAlign: 'center' }}>
          Ant Design Demo ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
```

​
