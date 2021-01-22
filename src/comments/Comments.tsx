import styled from "styled-components";

import { Spinner } from "../components";

import { gql, useQuery } from "@apollo/client";

const CommentsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0; 
  margin: 0;
`;

const Item = styled.p`
  text-align: center;
  color: palevioletred;
`;

function Comments() {
  const GET_COMMENTS = gql`
    query get_comments {
      comment {
        id
        content
        created
      }
    }
  `;

  interface CommentData {
    comment: Comment[];
  }

  interface Comment {
    id: string;
    content: string;
    created: string;
  }

  const { loading, error, data } = useQuery<CommentData>(GET_COMMENTS);

  if (loading) return <Spinner />;
  if (error) return <CommentsArea> <Item>Error! {error.message}</Item></CommentsArea>;

  return (
    <div>
      {data &&
        data.comment.map((comment) => (
          <CommentsArea key={comment.id}>
            <List>
              <li>
                <Item>ID: {comment.id}</Item>
              </li>
              <li>
                <Item>CONTENT: {comment.content}</Item>
              </li>
              <li>
                <Item>CREATED: {comment.created}</Item>
              </li>
            </List>
          </CommentsArea>
        ))}
    </div>
  );
}

export default Comments;
