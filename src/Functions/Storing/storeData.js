function storeData (data, location, callback) {
  //stores the data at the location specified
  //optional callback can be performed on the data
  if (callback) {
    callback(data);
  }

  //API call to store the data in the location
};

export default storeData;