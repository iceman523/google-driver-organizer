# Google Drive Cleanup Script

## Introduction

This is a Google Apps Script designed to automate the organization of files within Google Drive. It moves files from the root directory to folders named after their extensions, aiming to maintain a tidy and structured environment within Google Drive.


## Usage

- **Key Functions**:

  - `CleanUpRootDrive()`: Main function to start the cleanup process.
  - `getExtension(file)`: Helper function to extract the extension from a file.
  - `notify(moved, details)`: Sends an email with the details of the cleanup process.

- **Running the Script**:
  
  - For the first time, use the Google Apps Script online editor to manually run the `CleanUpRootDrive` function to approve the permissions that Google asks for.
  - Once the permissions have been given and the script runs without errors, use the scheduling feature to run the script every night.

## Project Structure

- `Code.gs`: Main script file containing the cleanup logic.
- `FileUtilities.gs`: Contains utilities for file handling.
- `EmailNotifications.gs`: Manages sending email notifications about the cleanup process.
- `SuccessEmailTemplate.html`: HTML template for the email notification.
- `MimeTypeMappings.js`: Mapping custom names for the folders based on mime types.

## License

This project is for personal use. Feel free to reference the code for your projects but please credit accordingly.
