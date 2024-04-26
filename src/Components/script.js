export const getInitials = (groupName) => {
    const splitName = groupName.split(" ");
    if (splitName.length === 1) {
      return splitName[0][0].toUpperCase();
      //can also write return splitName[0][0].toUpperCase();
    } else {
      return (splitName[0][0] + splitName[splitName.length - 1][0]).toUpperCase();
    }
  };