import { createSelector } from 'reselect';

const selectFilter = state => state.filter;

export const selectFilterResume = createSelector(
    [selectFilter],
    filter => ({
        type: filter.propertyType,
        operation: filter.propertyOperation,
        price: {
            min: filter.propertyMinPrice,
            max: filter.propertyMaxPrice,
        },
        area:{
            from: filter.homeAreaFrom,
            to: filter.homeAreaTo
        },
        home: {
            rooms: filter.homeRooms,
            baths: filter.homeBathRooms,
            extras: filter.homeExtras,
        },
        status: filter.homeStatus,
    })
  );