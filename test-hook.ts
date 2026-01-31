// Intentionally poorly formatted file to test pre-commit hook

const badlyFormatted = () => {
  const unused = 'this should be detected';
  return 'test';
};

export { badlyFormatted };
