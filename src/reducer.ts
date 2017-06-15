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

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
