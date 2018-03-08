export default (fileName, content) => {
  const aLink = document.createElement('a');
  const blob = new Blob(['\ufeff', content]);
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
};
