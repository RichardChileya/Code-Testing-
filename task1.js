const stringLength = (string) => {
  if (string.length > 1 && string.stringLength <= 10) {
    return string.stringLength;
  }
  throw new Error('No string recognised');
};

export default stringLength;