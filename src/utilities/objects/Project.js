export const getProjectObject = ({ name, startDate, endDate, ongoing, type, description }) => {
  return {
    name: name,
    startDate: startDate,
    endDate: endDate,
    ongoing: ongoing ? ongoing : false,
    type: type,
    description: description,
    hidden: false,
    isDeleted: false,
    deletedOn: '1970-01-01T00:00:00.000Z',
  };
};
