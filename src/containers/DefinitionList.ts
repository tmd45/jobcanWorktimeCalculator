import { connect } from "react-redux";

import DefinitionList from "../components/DefinitionList";

interface State {
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

const mapStateToProps = (state: State) => ({
  stdWorkDays: state.stdWorkDays,
  stdWorkHours: state.stdWorkHours,
  workedDays: state.workedDays,
  workedHours: state.workedHours,
  salariedDays: state.salariedDays,
  remainWorkDays: state.remainWorkDays,
  excessWorkTimes: state.excessWorkTimes,
  workTimeMargin: state.workTimeMargin,
  requiredWorkTimes: state.requiredWorkTimes,
  lastUpdatedAt: state.lastUpdatedAt
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionList);
