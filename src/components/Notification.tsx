import * as React from "react";
import styled from "styled-components";

const StyleWrapper = styled.div`
  color: #999;
  font-size: 90%;
`;

const Notification = () =>
  <StyleWrapper>
    <p className="notify">
      値の取得・更新をするためには{" "}
      <a href="https://ssl.jobcan.jp/employee/attendance" target="_blank">
        JOBCAN の出勤簿ページ
      </a>{" "}
      へのアクセスが必要です。
    </p>
    <p className="notify">JOBCAN で「勤務中」にデータ取得を行った場合、貯金が大きくマイナスになる場合があります。</p>
  </StyleWrapper>;

export default Notification;
