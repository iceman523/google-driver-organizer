/**
 * Main function to clean up the root drive folder. Moves files from the root to folders named after their extensions.
 */
function CleanUpRootDrive() {
  const rootFolder = DriveApp.getRootFolder();
  const folders = rootFolder.getFolders();
  const startTime = new Date().getTime();

  // Retrieve the continuation token from the PropertiesService (if it exists)
  const scriptProperties = PropertiesService.getScriptProperties();
  const continuationToken = scriptProperties.getProperty('CONTINUATION_TOKEN');
  const rootFiles = continuationToken
    ? DriveApp.continueFileIterator(continuationToken)
    : rootFolder.getFiles();

  let folderNameMap = {};
  while (folders.hasNext()) {
    const folder = folders.next();
    folderNameMap[folder.getName()] = folder;
  }

  let moved = 0;
  let details = [];
  while (rootFiles.hasNext()) {
    // Check if the script is close to the time limit
    if (new Date().getTime() - startTime > 280000) { // 280 seconds = 4 minutes 40 seconds
      // Save the continuation token for the next trigger execution
      scriptProperties.setProperty('CONTINUATION_TOKEN', rootFiles.getContinuationToken());
      console.log("Time limit approaching, process will continue on next trigger.");
      return; // Exit the function
    }

    const file = rootFiles.next();
    let ext = getExtension(file);

    let folder = folderNameMap[ext];
    if (!folder) {
      folder = rootFolder.createFolder(ext);
      folderNameMap[ext] = folder;
    }

    if (file.getAccess(Session.getActiveUser()) === DriveApp.Permission.VIEW || file.getAccess(Session.getActiveUser()) === DriveApp.Permission.COMMENT) {
      console.log(`Skipping file "${file.getName()}": insufficient permissions.`);
      continue;
    }

    file.moveTo(folder);
    details.push(`"${file.getName()}" moved to folder "${ext}".`);
    moved++;
  }

  // If the loop ends without timing out, it means all files have been processed
  // Notify about the moved files if any
  if (moved > 0) {
    notify(moved, details);
    console.log(`${moved} files were successfully moved. Notification sent.`);
  }

  // If there are no more files and the continuation token is set, it's the end of the process
  if (!rootFiles.hasNext() && continuationToken) {
    scriptProperties.deleteProperty('CONTINUATION_TOKEN');
    console.log("All files have been moved. Process completed.");
  }

  // If there are no files moved and no continuation token, no further action is required
  if (moved === 0 && !continuationToken) {
    console.log("No files were moved. Process completed or will continue on next trigger.");
  }
}
