// Surge Script

// This script modifies the response to set the user as a "星钻VIP"

// Match the specific API endpoint URL
const url = "https://api.gongkaoleida.com/api/v5_4_8/user/resume?"

// Check if the request is from the correct API
if ($request.url.indexOf(url) !== -1) {
  // Parse the response
  let body = JSON.parse($response.body);

  // Modify the VIP grade to "星钻VIP"
  body.data.userInfo.vipGrade = 2;  // Set to 星钻VIP
  body.data.userInfo.isVip = 1;     // Set VIP status to true
  body.data.userInfo.vipGradeList[1].isVip = 1;
  body.data.userInfo.vipGradeList[1].remainDays = 365; // Optional: Set VIP to valid for 365 days
  body.data.userInfo.vipExpire = 1893456000; // Set a future expire date (example timestamp)

  // Stringify the modified body back to JSON
  $done({body: JSON.stringify(body)});
} else {
  // If the URL doesn't match, proceed with the response unmodified
  $done({});
}