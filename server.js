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
    let emailbody = `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" type="text/css"/><!--<![endif]-->
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
    
        @media (max-width:700px) {
    
          .desktop_hide table.icons-inner,
          .social_block.desktop_hide .social-table {
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
    
          .row-1 .column-1 .block-4.spacer_block {
            height: 45px !important;
          }
    
          .row-1 .column-1 .block-5.heading_block h1 {
            font-size: 33px !important;
          }
    
          .row-1 .column-1 .block-6.heading_block h2 {
            font-size: 16px !important;
          }
    
          .row-1 .column-1 .block-9.paragraph_block td.pad {
            padding: 10px 15px 15px !important;
          }
        }
      </style>
    </head>
    <body style="background-color: #fdeef1; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fdeef1;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto; background-color: #c2f3f8; background-image: url('images/Main-Bcgk.png'); background-position: top center; background-repeat: no-repeat; color: #000000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="width:100%;">
    <div align="center" class="alignment" style="line-height:10px">
    <div style="max-width: 48px;"><a href="http://www.example.com" style="outline:none" tabindex="-1" target="_blank"><img alt="logo-dark-image" src="images/logo-dark-1x.png" style="display: block; height: auto; border: 0; width: 100%;" title="logo-dark-image" width="48"/></a></div>
    </div>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-3" style="height:60px;line-height:60px;font-size:1px;"> </div>
    <div class="spacer_block block-4" style="height:75px;line-height:75px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-top:10px;text-align:center;width:100%;">
    <h1 style="margin: 0; color: #2c2b2b; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 38px; font-weight: 700; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 57px;"><span class="tinyMce-placeholder">THANK YOU!</span></h1>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:10px;text-align:center;width:100%;">
    <h2 style="margin: 0; color: #454545; direction: ltr; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size: 22px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0; mso-line-height-alt: 26.4px;"><span class="tinyMce-placeholder">CONFIRM YOUR SUBSCRIPTION!</span></h2>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="divider_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad">
    <div align="center" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="55%">
    <tr>
    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #575757;"><span> </span></td>
    </tr>
    </table>
    </div>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-8" style="height:25px;line-height:25px;font-size:1px;"> </div>
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:15px;padding-top:10px;">
    <div style="color:#454545;direction:ltr;font-family:'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:300;letter-spacing:0px;line-height:150%;text-align:center;mso-line-height-alt:21px;">
    <p style="margin: 0; margin-bottom: 16px;">We are happy to welcome you to our community.</p>
    <p style="margin: 0;">We started out to create value for the services you use on a daily basis.<br/>We are so glad you joined us on our path to something great!<br/><br/>with love,<br/>Coco & Team</p>
    </div>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-10" style="height:20px;line-height:20px;font-size:1px;"> </div>
    <table border="0" cellpadding="10" cellspacing="0" class="button_block block-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad">
    <div align="center" class="alignment"><!--[if mso]>
    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://www.example.com" style="height:54px;width:146px;v-text-anchor:middle;" arcsize="8%" strokeweight="0.75pt" strokecolor="#000000" fillcolor="#fbd3dc">
    <w:anchorlock/>
    <v:textbox inset="0px,0px,0px,0px">
    <center style="color:#000000; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px">
    <![endif]--><a href="http://www.example.com" style="text-decoration:none;display:inline-block;color:#000000;background-color:#fbd3dc;border-radius:4px;width:auto;border-top:1px solid #000000;font-weight:600;border-right:1px solid #000000;border-bottom:1px solid #000000;border-left:1px solid #000000;padding-top:8px;padding-bottom:8px;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:30px;padding-right:30px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">CONFIRM</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
    </td>
    </tr>
    </table>
    <div class="spacer_block block-12" style="height:165px;line-height:165px;font-size:1px;"> </div>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fbd3dc; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="divider_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:10px;">
    <div align="center" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #000000;"><span> </span></td>
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
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fbd3dc; border-radius: 0; color: #000000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;">
    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
    <div class="" style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
    <p style="margin: 0; font-size: 18px; text-align: left; mso-line-height-alt: 21.599999999999998px;"><strong><span style="font-size:14px;color:#000000;"><span style="">Social media</span></span></strong></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:20px;padding-top:10px;">
    <div style="font-family: Arial, sans-serif">
    <div class="" style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #C0C0C0; line-height: 1.2;">
    <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#454545;font-size:12px;">Stay up-to-date with current activities by following us on your favorite social media channels.</span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="social_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="text-align:left;padding-right:0px;padding-left:0px;">
    <div align="left" class="alignment">
    <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="144px">
    <tr>
    <td style="padding:0 4px 0 0;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="images/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
    <td style="padding:0 4px 0 0;"><a href="https://twitter.com/" target="_blank"><img alt="Twitter" height="32" src="images/twitter2x.png" style="display: block; height: auto; border: 0;" title="Twitter" width="32"/></a></td>
    <td style="padding:0 4px 0 0;"><a href="https://plus.google.com/" target="_blank"><img alt="Google+" height="32" src="images/googleplus2x.png" style="display: block; height: auto; border: 0;" title="Google+" width="32"/></a></td>
    <td style="padding:0 4px 0 0;"><a href="https://instagram.com/" target="_blank"><img alt="Instagram" height="32" src="images/instagram2x.png" style="display: block; height: auto; border: 0;" title="Instagram" width="32"/></a></td>
    </tr>
    </table>
    </div>
    </td>
    </tr>
    </table>
    </td>
    <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;">
    <div style="font-family: 'Trebuchet MS', Tahoma, sans-serif">
    <div class="" style="font-size: 12px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
    <p style="margin: 0; font-size: 18px; text-align: left; mso-line-height-alt: 21.599999999999998px;"><span style="font-size:14px;color:#000000;"><strong><span style="">Where to find us</span></strong></span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px;">
    <div style="font-family: Arial, sans-serif">
    <div class="" style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #3f3f3f; line-height: 1.2;">
    <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#454545;font-size:12px;">With Love, Coco Team<br/>Prishtine, Kosove</span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: Arial, sans-serif">
    <div class="" style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #C0C0C0; line-height: 1.2;">
    <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 16.8px;"><span style="color:#000000;font-size:12px;">Changed your mind?<a href="http://www.example.com/unsubscribe" rel="noopener" style="text-decoration: underline; color: #7747FF;" target="_blank"> Unsubscribe</a></span></p>
    </div>
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
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 680px; margin: 0 auto;" width="680">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
    <!--[if !vml]><!-->
    <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
    <tr>
    <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Beefree Logo" class="icon" height="32" src="images/Beefree-logo.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
    <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" style="color: #1e0e4b; text-decoration: none;" target="_blank">Designed with Beefree</a></td>
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
