/**
 * Sends an email notification about moved files using GmailApp and an HTML template.
 * @param {number} moved - The number of files moved.
 * @param {string[]} details - Array of strings, each describing a moved file.
 */
const notify = (moved, details) => {
  const email = Session.getActiveUser().getEmail();
  const subject = `Google Drive Clean Up - ${moved} files moved`;

  // Prepare the HTML content
  const htmlTemplate = HtmlService.createTemplateFromFile('SuccessEmailTemplate');
  htmlTemplate.moved = moved;
  htmlTemplate.details = details;

  // Evaluate the HTML template to fill in the dynamic values
  const htmlBody = htmlTemplate.evaluate().getContent();

  // Send the email
  GmailApp.sendEmail(email, subject, '', { htmlBody: htmlBody });
};