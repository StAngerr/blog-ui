// CommentSection.js
import { useState } from "react";
import { Form, Button, Input, List, Typography } from "antd";
import { Comment } from "../../types/gql.ts";
const { Text } = Typography;

interface Props {
  comments: Comment[];
  onAddComment: (text: string) => void;
  isLoading: boolean;
}

export const CommentSection = ({
  comments = [],
  onAddComment,
  isLoading,
}: Props) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = () => onAddComment(commentText);

  return (
    <div>
      {/* Add new comment section */}
      <Form.Item>
        <Input.TextArea
          rows={4}
          placeholder="Type your comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          loading={isLoading}
          disabled={!commentText || isLoading}
          type="primary"
          onClick={handleSubmit}
        >
          {isLoading ? "Adding Comment..." : "Add Comment"}
        </Button>
      </Form.Item>

      <List
        dataSource={comments}
        header={`${comments.length} ${comments.length === 1 ? "comment" : "comments"}`}
        itemLayout="vertical"
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={`${item.author.username}`}
              description={item.date}
            />
            <Text style={{ fontSize: "17px", fontWeight: "bold" }}>
              {item.text}
            </Text>
          </List.Item>
        )}
      />
    </div>
  );
};
