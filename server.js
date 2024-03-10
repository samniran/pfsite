import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzGvb7iMgNfiFkfPo8vKa-AD5Bpm_tX4CqdTlcDIjvUciYkr2SrUoK6__5FwBL0PygJGQ/exec";
const firebaseConfig = {
  apiKey: "AIzaSyBImgU4VcZ0xNnOTptraxRrJDlq4pywZ5k",
  authDomain: "pdfdown-8e60f.firebaseapp.com",
  projectId: "pdfdown-8e60f",
  storageBucket: "pdfdown-8e60f.appspot.com",
  messagingSenderId: "129822492452",
  appId: "1:129822492452:web:ab7861199c493993de95b1",
  measurementId: "G-ZQZQJ5GJQ0",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

document.addEventListener("DOMContentLoaded", function () {
  const nameSection = document.querySelector(".name");
  const stateSection = document.querySelector(".state");
  const mailSection = document.querySelector(".mail");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const msg = document.getElementById("scsmsg");
  const dwd = document.querySelector(".dwd");
  var states = [
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Chandigarh",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Orissa",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Telangana",
    "Uttar Pradesh",
    "Union Territory",
    "Uttarakhand",
    "West Bengal",
  ];

  var selectElement = document.getElementById("state_select");

  var defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  defaultOption.textContent = "--Select your state--";
  selectElement.appendChild(defaultOption);

  // Create options for each state
  states.forEach(function (state) {
    var option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    selectElement.appendChild(option);
  });

  // Initially hide the loading spinner and sections other than the name section
  loadingSpinner.style.display = "none";
  stateSection.style.display = "none";
  mailSection.style.display = "none";

  document.getElementById("name_next").addEventListener("click", function (e) {
    e.preventDefault();

    // Show loading spinner
    loadingSpinner.style.display = "inline-block";

    // Simulate some asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      // Hide loading spinner
      loadingSpinner.style.display = "none";

      // Hide name section
      nameSection.style.display = "none";

      // Show state section
      stateSection.style.display = "flex";
    }, 1500); // You can replace this with actual logic or remove the timeout for immediate transition
  });

  document.getElementById("state_next").addEventListener("click", function (e) {
    e.preventDefault();

    // Show loading spinner
    loadingSpinner.style.display = "inline-block";

    // Simulate some asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      // Hide loading spinner
      loadingSpinner.style.display = "none";

      // Hide state section
      stateSection.style.display = "none";

      // Show email section
      mailSection.style.display = "flex";
    }, 1500); // You can replace this with actual logic or remove the timeout for immediate transition
  });

  const form = document.forms["submit-to-google-sheet"];

  function sendgreet() {
    const email = document.getElementById("email");
    let emailbody = `
    <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!--><!--<![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        .image_block img+div {
          display: none;
        }
    
        @media (max-width:720px) {
          .desktop_hide table.icons-inner {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .mobile_hide {
            display: none;
          }
    
          .row-content {
            width: 100% !important;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
    
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
      </style>
    </head>
    
    <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px; margin: 0 auto;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:10px;">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="padding-left:15px;padding-right:15px;width:100%;">
                                    <div class="alignment" align="left" style="line-height:10px">
                                      <div style="max-width: 122.5px;"><a href="http://example.com" target="_blank" style="outline:none" tabindex="-1"><img src="https://0fa0509a35.imgdist.com/pub/bfra/582tooyv/xjv/8l8/ecq/logo.jpg" style="display: block; height: auto; border: 0; width: 100%;" width="122.5" alt="Your Logo" title="Your Logo"></a></div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; font-weight: 400; text-align: center;">
                                    <table class="alignment" cellpadding="0" cellspacing="0" role="presentation" align="center" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img class="icon" src="https://0fa0509a35.imgdist.com/pub/bfra/582tooyv/efe/nqg/x53/popper-confetti-celebration-8362409.jpg" height="128" width="98" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px; margin: 0 auto;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px; margin: 0 auto;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="heading_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <h1 style="margin: 0; color: #2b2d2d; direction: ltr; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 43px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 51.6px;"><strong>Thanks for your subscription</strong></h1>
                                  </td>
                                </tr>
                              </table>
                              <table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad">
                                    <div style="color:#6f7077;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:14px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
                                      <p style="margin: 0;">Explore our other contents on our site</p>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;">
                                    <div class="alignment" align="center" style="line-height:10px">
                                      <div style="max-width: 350px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/4091/image-host.png" style="display: block; height: auto; border: 0; width: 100%;" width="350" alt="Services Company" title="Services Company"></div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px; margin: 0 auto;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px; margin: 0 auto;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f7fafe;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 700px; margin: 0 auto;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 25px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; width: 700px; margin: 0 auto;" width="700">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                      <tr>
                                        <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                          <!--[if !vml]><!-->
                                          <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                            <tr>
                                              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="32" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                              <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table><!-- End -->
    </body>
    
    </html>

    `;
    Email.send({
      SecureToken: "b04ccac7-9f85-4a10-857b-bcd277bbafba",
      To: email.value,
      From: "info@india4o.com",
      Subject: "Subscription added!",
      Body: emailbody,
    }).then((message) => console.log(message));
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    loadingSpinner.style.display = "inline-block";

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        sendgreet();
        msg.style.display = "block";

        loadingSpinner.style.display = "none";
        mailSection.style.display = "none";
        form.style.display = "none";
        var list = document.querySelectorAll("#front_only");
        for (var i = list.length - 1; 0 <= i; i--)
          if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
          }
        document.getElementById("checkout").innerHTML = "Here is your File!";
        dwd.style.display = "block";
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  });

  dwd.addEventListener("click", () => {
    const selectedState = form.elements["State"].value;

    let pdfPath = "";
    switch (selectedState) {
      case "TamilNadu":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/TN201718.pdf";
        break;
      case "Kerela":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/KERELA2014.pdf";
        break;
      case "Andhra Pradesh":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/AP201819.pdf";
        break;
      case "Chandigarh":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/Chandigarh_2017_18.pdf";
        break;
      case "Assam":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/ASS201819.pdf";
        break;
      case "Bihar":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/BR201718.pdf";
        break;
      case "Chhattisgarh":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/Chattisgarh2016-17.pdf+";
        break;
      case "Goa":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/GOA.pdf";
        break;
      case "Delhi":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/GOA.pdf";
        break;
      case "Gujarat":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/Gujarat201819.pdf";
        break;
      case "Haryana":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/HARYANA.pdf";
        break;
      case "Jammu & Kashmir":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/J&K ARRTariff2013-14.pdf";
        break;
      case "Jharkhand":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/JH201819.pdf";
        break;
      case "Karnataka":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/KA201819.pdf";
        break;
      case "Maharastra":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/MAHARASTRA20182019.pdf";
        break;
      case "Madhya Pradesh":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/MP201718.pdf";
        break;
      case "Orissa":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/ORISSA201819.pdf";
        break;
      case "Punjab":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/PB201718.pdf";
        break;
      case "Rajasthan":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/RAJASTHAN201718.pdf";
        break;
      case "Telangana":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/TG2017-18.pdf";
        break;
      case "Uttar Pradesh":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/UP201718.pdf";
        break;
      case "Union Territory":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/UnionTet201718.pdf";
        break;
      case "Uttarakhand":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/Uttarakhand201718.pdf";
        break;
      case "West Bengal":
        pdfPath = "gs://pdfdown-8e60f.appspot.com/WB201718.pdf";
        break;

      default:
        console.error("Invalid state selected");
        return;
    }
    const pdfRef = ref(storage, pdfPath);
    getDownloadURL(pdfRef)
      .then((url) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = "pdf_file.pdf"; // You can set the desired filename here
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Error getting download URL:", error);
      });
  });
});
