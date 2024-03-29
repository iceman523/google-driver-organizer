/**
 * Returns the extension from a file object by querying its MIME type.
 * @param {GoogleAppsScript.Drive.File} file - The file from which to extract the extension.
 * @return {string} The file extension.
 */
const getExtension = (file) => {
  const mime = file.getMimeType();
  const docType = mime.split("/").pop();
  return docType.split(".").pop();
};
