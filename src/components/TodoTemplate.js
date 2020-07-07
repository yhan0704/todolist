import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width:512px;
    height:768px;

    position:relative;
    background: white;
    border-radius:16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 4);

    margin:0 auto;
    margin-top:96px;
    margin-bottom:32px;

    display:flex;
    flex-direction: column;
`;

export default function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
