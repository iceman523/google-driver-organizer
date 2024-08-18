/**
 * Returns a folder name for a given file object based on its MIME type, using a predefined mapping. If the MIME type
 * is not found in the predefined mapping, it appends the MIME type to a Google Spreadsheet for review and derives the folder name from the MIME type itself.
 * @param {GoogleAppsScript.Drive.File} file - The file for which to determine the folder name.
 * @return {string} The folder name associated with the file's MIME type or derived from the MIME type.
 */
const getFolderNameForFile = (file) => {
  const mime = file.getMimeType();

  // Attempt to find the MIME type in the predefined mapping.
  if (mimeTypeToFolderName.hasOwnProperty(mime)) {
    return capitalizeFirstLetters(mimeTypeToFolderName[mime]);
  } else {
    // Derive the folder name from the MIME type's subtype.
    let derivedFolderName = mime.split('/').pop().split('.').pop(); // Safeguard against MIME types with '.' in the subtype
    derivedFolderName = derivedFolderName.replace(/_/g, ' '); // Replace underscores with spaces
    return capitalizeFirstLetters(derivedFolderName);
  }
};


/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} str - The string to capitalize.
 * @return {string} The capitalized string.
 */
function capitalizeFirstLetters(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


