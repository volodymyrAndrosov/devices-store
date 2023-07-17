import { createSelector } from "reselect";

const selectGlobal = state => state;

const makeUser = () => createSelector(selectGlobal, state => state.USER);

const makeIsAuth = () => createSelector(makeUser(), state => state.IS_AUTH);

const makeDevices = () => createSelector(selectGlobal, state => state.DEVICES);

const makeTypes = () => createSelector(selectGlobal, state => state.TYPES);

const makeActiveTypeId = () =>
  createSelector(makeTypes(), state => state.selectedTypeId);

const makeBrands = () => createSelector(selectGlobal, state => state.BRANDS);

const makeActiveBrandId = () =>
  createSelector(makeBrands(), state => state.selectedBrandId);

const makeNotifications = () =>
  createSelector(makeUser(), state => state.notificationList);

const makeTotalCountPages = () =>
  createSelector(makeUser(), state => state.pagination.totalCountPages);

const makeLimitPages = () =>
  createSelector(makeUser(), state => state.pagination.limit);

const makeActivePage = () =>
  createSelector(makeUser(), state => state.pagination.activePage);

export {
  selectGlobal,
  makeIsAuth,
  makeDevices,
  makeTypes,
  makeBrands,
  makeActiveTypeId,
  makeActiveBrandId,
  makeNotifications,
  makeTotalCountPages,
  makeLimitPages,
  makeActivePage,
};
