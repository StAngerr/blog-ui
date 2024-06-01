import { Button, Card, Statistic, Typography } from "antd";
import { Link } from "react-router-dom";
import { LikeOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { GET_ALL_BLOGS } from "../../queries/blogs.ts";
import { BlogQuery } from "../../types/gql.ts";

const { Text, Title } = Typography;

const BlogFeed = () => {
  const { data, loading } = useQuery<BlogQuery>(GET_ALL_BLOGS);

  if (loading) return <h5>Loading...</h5>;

  return (
    <div
      style={{
        overflowY: "auto",
        width: "60%",
        margin: "0 auto",
      }}
    >
      {data.blogs.map((blog, index) => (
        <Card key={index} style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginRight: "10px",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <LikeOutlined style={{ fontSize: "18px", marginRight: "6px" }} />
            <Statistic value={Math.floor(Math.random() * 100)} />
          </div>
          <Title style={{ marginTop: "0" }} level={4}>
            {blog.title}
          </Title>
          <Text
            style={{ width: "70%" }}
            ellipsis={{ rows: 2, expandable: false }}
          >
            {blog.text}
          </Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <span>
              By: {`${blog.author.firstName} ${blog.author.lastName}`}
            </span>
            <Link to={`/blog/${blog.id}`}>
              <Button type="primary">View Blog</Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default BlogFeed;
