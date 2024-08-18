const mimeTypeToFolderName = {
  // Google Workspace
  'application/vnd.google-apps.document': 'Google Docs',
  'application/vnd.google-apps.spreadsheet': 'Google Sheets',
  'application/vnd.google-apps.presentation': 'Google Slides',
  'application/vnd.google-apps.drawing': 'Google Drawings',
  'application/vnd.google-apps.form': 'Google Forms',
  'application/vnd.google-apps.script': 'Google Apps Scripts',
  'application/vnd.google-apps.folder': 'Google Drive Folders',
  'application/vnd.google-apps.site': 'Google Sites',
  'application/vnd.google-apps.jam': 'Google Jamboard',
  'application/vnd.google-apps.shortcut': 'Google Drive Shortcuts',
  'application/vnd.google-apps.map': 'Google My Maps',
  'application/vnd.google-apps.drive-sdk': 'Google Drive SDK',
  'application/vnd.google.colaboratory': 'Google Colab Notebooks',

  // Microsoft Office
  'application/msword': 'Word Documents',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Word Documents',
  'application/vnd.ms-excel': 'Excel Files',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'Excel Files',
  'application/vnd.ms-powerpoint': 'PowerPoint Files',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'PowerPoint Files',

  // PDF
  'application/pdf': 'PDF Files',

  // Images
  'image/jpeg': 'Images',
  'image/png': 'Images',
  'image/gif': 'Images',
  'image/svg+xml': 'Vector Images',
  'image/webp': 'Images',

  // Audio
  'audio/mpeg': 'Audio Files',
  'audio/wav': 'Audio Files',
  'audio/ogg': 'Audio Files',

  // Video
  'video/mp4': 'Video Files',
  'video/mpeg': 'Video Files',
  'video/webm': 'Video Files',

  // Archives
  'application/zip': 'Z-Archives',
  'application/x-rar-compressed': 'Z-Archives',
  'application/x-7z-compressed': 'Z-Archives',

  // Text
  'text/plain': 'Text Files',
  'text/csv': 'CSV Files',

  // Web
  'text/html': 'HTML Files',
  'text/css': 'CSS Files',
  'application/javascript': 'JavaScript Files',

  // Programming Languages
  'text/x-python': 'Python Files',
  'application/x-python-code': 'Python Files',
  'text/x-java': 'Java Files',
  'text/x-c': 'C Files',
  'text/x-c++src': 'C++ Files',
  'text/x-csharp': 'C# Files',
  'application/x-ruby': 'Ruby Files',
  'text/x-php': 'PHP Files',
  'application/x-httpd-php': 'PHP Files',
  'text/x-scala': 'Scala Files',
  'text/x-go': 'Go Files',
  'text/x-swift': 'Swift Files',
  'text/x-kotlin': 'Kotlin Files',
  'text/x-rust': 'Rust Files',
  'application/typescript': 'TypeScript Files',

  // Data Formats
  'application/json': 'JSON Files',
  'application/xml': 'XML Files',
  'application/yaml': 'YAML Files',
  'application/x-yaml': 'YAML Files',

  // Others
  'application/octet-stream': 'Binary Files'

  // Add more MIME Types as needed
};
