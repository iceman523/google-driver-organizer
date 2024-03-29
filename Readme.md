# Google Drive Cleanup Script

## Introduction

This is a personal Google Apps Script project designed to automate the organization of files within my Google Drive. It moves files from the root directory to folders named after their extensions, aiming to maintain a tidy and structured environment within my Google Drive.

## Setup Instructions

### Prerequisites

- A Google account with access to Google Drive and Google Apps Script.
- Node.js and npm for using the `clasp` command-line tool.

### Installation

1. **Install `clasp`**:

   ```sh
   npm install -g @google/clasp
   ```

2. **Authenticate `clasp` with Google**:
   ```sh
   clasp login
   ```
   Follow the prompts to log in to your Google account.

### Local Development

1. **Clone the Script**:
   Use `clasp` to clone the script to your local machine using the script's ID.

   ```sh
   clasp clone <SCRIPT_ID>
   ```

2. **Make Changes Locally**:
   Open the project in your favorite editor (VS Code recommended) and make your changes.

3. **Push Changes**:
   Sync your local changes back to Google Apps Script with:
   ```sh
   clasp push
   ```

## Usage

- **Key Functions**:

  - `CleanUpRootDrive()`: Main function to start the cleanup process.
  - `getExtension(file)`: Helper function to extract the extension from a file.
  - `notify(moved, details)`: Sends an email with the details of the cleanup process.

- **Running the Script**:
  Use the Google Apps Script online editor to manually run the `CleanUpRootDrive` function.

## Project Structure

- `Code.gs`: Main script file containing the cleanup logic.
- `FileUtilities.gs`: Contains utilities for file handling.
- `EmailNotifications.gs`: Manages sending email notifications about the cleanup process.

## Personal Notes

- **Future Improvements**:

  - Look into optimizing the file fetching process to handle large numbers of files more efficiently.
  - Enhance the email notification template for better readability.

- **Known Issues**:
  - MIME type to extension mapping is not always accurate for Google-specific file types.

## Documentation

- Keep detailed notes here about any significant changes, debugging insights, or ideas for future updates.

## License

This project is for personal use. Feel free to reference the code for your projects but please credit accordingly.

## Additional Resources

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [Node.js](https://nodejs.org/)
- [npm `clasp` package](https://www.npmjs.com/package/@google/clasp)
