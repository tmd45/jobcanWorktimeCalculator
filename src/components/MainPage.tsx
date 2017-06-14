import * as React from "react";
import styled from "styled-components";

import Header from "./Header";
import Notification from "./Notification";
import DefinitionList from "./DefinitionList";

const ContentContainer = styled.div`
  padding: 10px 10px;
`;

const MainPage = () =>
  <div>
    <Header />
    <ContentContainer>
      <Notification />
      <DefinitionList />
    </ContentContainer>
  </div>;

export default MainPage;
