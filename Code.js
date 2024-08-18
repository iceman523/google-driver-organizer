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
    folderNameMap[folder.getName().toLowerCase()] = folder; // Key is lowercase for matching
  }

  let moved = 0;
  let details = [];
  while (rootFiles.hasNext()) {
    if (new Date().getTime() - startTime > 280000) { // Check time limit
      scriptProperties.setProperty('CONTINUATION_TOKEN', rootFiles.getContinuationToken());
      console.log("Time limit approaching, process will continue on next trigger.");
      if (moved > 0) { // Send notification if any files have been moved in this execution
        notify(moved, details);
      }
      return; // Exit the function
    }

    const file = rootFiles.next();
    let folderName = getFolderNameForFile(file);

    // Later, when checking for existing folders:
    let folder = folderNameMap[folderName.toLowerCase()];
    if (!folder) {
      // Create folder only if necessary
      folder = rootFolder.createFolder(folderName); // Use the capitalized name for creation
      folderNameMap[folderName.toLowerCase()] = folder;
    }

    if (file.getAccess(Session.getActiveUser()) === DriveApp.Permission.VIEW || file.getAccess(Session.getActiveUser()) === DriveApp.Permission.COMMENT) {
      continue; // Skip without logging for efficiency
    }

    file.moveTo(folder);
    details.push(`"${file.getName()}" moved to folder "${folderName}".`);
    moved++;
  }

  // Clean up and notifications
  if (moved > 0) {
    notify(moved, details);
    console.log(`${moved} files were successfully moved. Notification sent.`);
  }
  if (!rootFiles.hasNext()) {
    scriptProperties.deleteProperty('CONTINUATION_TOKEN'); // Clean up continuation token if done
    console.log("All files have been moved or processed. Process completed.");
  }
}
