import { Divider, Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import { LikeFilled, LikeOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { CommentSection } from "../Comments/Comments.tsx";
import { useMutation, useQuery } from "@apollo/client";
import { GET_BLOG_BY_ID } from "../../queries/blogs.ts";
import { useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import { ADD_COMMENT } from "../../queries/comments.ts";

const { Text, Paragraph, Title } = Typography;

export const BlogPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const params = useParams();
  const { data, loading, refetch } = useQuery(GET_BLOG_BY_ID, {
    variables: { id: params.id },
  });
  const [addComment, { loading: newCommentLoading }] = useMutation(ADD_COMMENT);

  const handleAddComment = useCallback(
    (text: string) => {
      addComment({
        variables: { input: { text, author: "1", blog: params.id } },
      }).then(() => refetch());
    },
    [addComment, params.id],
  );

  if (loading) return <h4>Loading....</h4>;

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title
            level={3}
            style={{ color: "#fff", marginTop: "0", marginBottom: "0" }}
          >
            {data.blog.title}
          </Title>
          <Text style={{ color: "#fff", fontSize: "9px" }}>By: Tom Johns</Text>
        </div>
        <Divider type="vertical" style={{ margin: "0 10px" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {isLiked ? (
            <LikeFilled style={{ fontSize: "18px", marginRight: "6px" }} />
          ) : (
            <LikeOutlined style={{ fontSize: "18px", marginRight: "6px" }} />
          )}
          {12}
        </div>
      </Header>
      <Content style={{ padding: "20px" }}>
        <Paragraph>{data.blog.text}</Paragraph>
      </Content>
      <CommentSection
        isLoading={newCommentLoading}
        comments={data.blog.comments}
        onAddComment={handleAddComment}
      />
    </Layout>
  );
};
