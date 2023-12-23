function updateData(currentObject, newDataObject) {

  const updatedObject = {};

  for (const key in currentObject) {

    if (newDataObject.hasOwnProperty(key)) {
      updatedObject[key] = newDataObject[key];
    } else {
      updatedObject[key] = currentObject[key];
    }
  }

  return updatedObject;
}

module.exports = updateData;