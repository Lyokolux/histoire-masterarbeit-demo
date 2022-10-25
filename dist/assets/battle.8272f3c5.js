var TimeInMS = /* @__PURE__ */ ((TimeInMS2) => {
  TimeInMS2[TimeInMS2["SECOND"] = 1e3] = "SECOND";
  TimeInMS2[TimeInMS2["MINUTE"] = 6e4] = "MINUTE";
  TimeInMS2[TimeInMS2["HOUR"] = 36e5] = "HOUR";
  TimeInMS2[TimeInMS2["DAY"] = 864e5] = "DAY";
  TimeInMS2[TimeInMS2["WEEK"] = 6048e5] = "WEEK";
  return TimeInMS2;
})(TimeInMS || {});
const WARNING_AT_DAYS_LEFT = 7;
const DAYS_FOR_VOTING = 14;
export {
  DAYS_FOR_VOTING as D,
  TimeInMS as T,
  WARNING_AT_DAYS_LEFT as W
};
