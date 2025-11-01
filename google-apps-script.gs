/**
 * Handles HTTP POST requests from contact form and writes data to Google Sheets
 */
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the JSON data from the request
    var data = JSON.parse(e.postData.contents);

    // Extract form values
    var name = data.name || "";
    var email = data.email || "";
    var phone = data.phone || "";
    var subject = data.subject || "";
    var message = data.message || "";
    var timestamp = data.timestamp || new Date();

    // Append the data to the sheet
    // The data will be added as a new row
    sheet.appendRow([name, email, phone, subject, message, timestamp]);

    // Return a success response
    return ContentService.createTextOutput(
      JSON.stringify({
        result: "success",
        data: data,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return an error response
    return ContentService.createTextOutput(
      JSON.stringify({
        result: "error",
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles HTTP GET requests (for testing)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    "Contact Form Handler is working!"
  ).setMimeType(ContentService.MimeType.TEXT);
}
