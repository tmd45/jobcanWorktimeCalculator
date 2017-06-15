import * as React from "react";

interface Props {
  stdWorkDays: string;
  stdWorkHours: string;
  workedDays: string;
  workedHours: string;
  salariedDays: string;
  remainWorkDays: string;
  excessWorkTimes: string;
  workTimeMargin: string;
  requiredWorkTimes: string;
  lastUpdatedAt: string;
}

const DefinitionList = (props: Props) =>
  <div>
    <dl>
      <hr />
      <dt>所定労働日数 <small>days</small></dt>
      <dd>{props.stdWorkDays}</dd>
      <dt>所定労働時間 <small>hours</small></dt>
      <dd>{props.stdWorkHours}</dd>
      <hr />
      <dt id="workedDays">実働日数 <small>days</small></dt>
      <dd>{props.workedDays}</dd>
      <dt id="workedHours">実労働時間 <small>hours</small></dt>
      <dd>{props.workedHours}</dd>
      <dt id="salariedDays">有給休暇消化日数 <small>days</small></dt>
      <dd>{props.salariedDays}</dd>
      <hr />
      <dt id="remainWorkDays">今月の残り出勤可能日数 <small>days</small></dt>
      <dd>{props.remainWorkDays}</dd>
      <dt id="excessWorkTimes">給与労働時間 <small>hours</small></dt>
      <dd>{props.excessWorkTimes}</dd>
      <dt id="workTimeMargin">何時間余裕があるか（貯金） <small>hours</small></dt>
      <dd>{props.workTimeMargin}</dd>
      <dt id="requiredWorkTimes">1日あたりの労働時間目安 <small>hours</small></dt>
      <dd>{props.requiredWorkTimes}</dd>
      <hr />
      <dt id="lastUpdatedAt">最終更新日時</dt>
      <dd>{props.lastUpdatedAt}</dd>
    </dl>
  </div>;

export default DefinitionList;
