<?php
  //Created by ajmatillano.com
  //Email information
  $to = "admin@acasysproperties.com";
  $subject = "acasysproperties.com: Consultancy Form Submitted by " . strip_tags($_POST['fullName']);

  $headers = "From: " . strip_tags($_POST['email']) . "\r\n";
  $headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  //Confidential Business Information Data


  $message = '<html>';
  $message .= '<head><style>table{border: 2px solid #0B1B56; border-spacing:0; width:100%;} td{border:1px solid rgba(0,0,0,.3);padding:10px;font-size: 1em;}td:first-child{font-weight:bold;} td.theader{background-color:#0B1B56; color: #FFFFFF; font-size: 1.2em;}</style></head><body>';
  $message .= '<h2>Confidential Business Information Form</h2>';

  //Contact Person Information
  $fullName = $_POST['fullName'];
  $position = $_POST['position'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];

  $message .= '<table style="border 1px solid #333;">';
  $message .= '<tr><td colspan="2" class="theader">CONTACT PERSON</td></tr>';
  $message .= '<tr><td>Your full name</td><td>' . $fullName . '</td></tr>';
  $message .= '<tr><td>Your position in the company</td><td>' . $position . '</td></tr>';
  $message .= '<tr><td>Your email address</td><td>' . $email . '</td></tr>';
  $message .= '<tr><td>Your mobile number</td><td>' . $mobile . '</td></tr>';
  $message .= '</table><br/>';

  //Company Information
  $companyName = $_POST['companyName'];
  $address = $_POST['address'];
  $website = $_POST['website'];
  $dateEst = $_POST['dateEst'];
  $shareHoldersCount = $_POST['shareHoldersCount'];
  $debts = $_POST['debts'];
  $listingDate = $_POST['listingDate'];
  $listingAgreement = $_POST['listingAgreement'];
  $desiredCapital = $_POST['desiredCapital'];

  $message .= '<table>';
  $message .= '<tr><td colspan="2" class="theader">COMPANY INFORMATION</td></tr>';
  $message .= '<tr><td>Name of your company</td><td>' . $companyName . '</td></tr>';
  $message .= '<tr><td>Address of your company</td><td>' . $address . '</td></tr>';
  $message .= '<tr><td>Company website(s)</td><td>' . $website . '</td></tr>';
  $message .= '<tr><td>When was your company established?</td><td>' . $dateEst . '</td></tr>';
  $message .= '<tr><td>How many shareholders do you have?</td><td>' . $shareHoldersCount . '</td></tr>';
  $message .= '<tr><td>What is current total debts of your company?</td><td>' . $debts . '</td></tr>';
  $message .= '<tr><td>￼Does your company plan to get listed? If Yes, when?</td><td>' . $listingDate . '</td></tr>';
  $message .= '<tr><td>Do all of the shareholders agree to the listing?</td><td>' . $listingAgreement . '</td></tr>';
  $message .= '<tr><td>How much capital do you want to raise?</td><td>' . $desiredCapital . '</td></tr>';
  $message .= '</table><br/>';

  //MAIN PRODUCTS & SERVICES
  $service1 = $_POST['service1'];
  $service2 = $_POST['service2'];
  $service3 = $_POST['service3'];
  $service4 = $_POST['service4'];
  $service5 = $_POST['service5'];
  $service6 = $_POST['service6'];

  $message .= '<table>';
  $message .= '<tr><td colspan="2" class="theader">YOUR MAIN PRODUCTS &amp; SERVICES</td></tr>';
  $message .= '<tr><td>Product/Service 1</td><td>' . $service1 . '</td></tr>';
  $message .= '<tr><td>Product/Service 2</td><td>' . $service2 . '</td></tr>';
  $message .= '<tr><td>Product/Service 3</td><td>' . $service3 . '</td></tr>';
  $message .= '<tr><td>Product/Service 4</td><td>' . $service4 . '</td></tr>';
  $message .= '<tr><td>Product/Service 5</td><td>' . $service5 . '</td></tr>';
  $message .= '<tr><td>Product/Service 6</td><td>' . $service6 . '</td></tr>';
  $message .= '</table><br/>';

  //SALES & PROFITS FOR PAST 5 YEARS
  $sales2012 = $_POST['sales2012'];
  $sales2013 = $_POST['sales2013'];
  $sales2014 = $_POST['sales2014'];
  $sales2015 = $_POST['sales2015'];
  $sales2016 = $_POST['sales2016'];

  $message .= '<table>';
  $message .= '<tr><td colspan="2" class="theader">YOUR SALES &amp; PROFITS FOR THE PAST 5 YEARS</td></tr>';
  $message .= '<tr><td>Yearly Sales 2012</td><td>' . $sales2012 . '</td></tr>';
  $message .= '<tr><td>Yearly Sales 2013</td><td>' . $sales2013 . '</td></tr>';
  $message .= '<tr><td>Yearly Sales 2014</td><td>' . $sales2014 . '</td></tr>';
  $message .= '<tr><td>Yearly Sales 2015</td><td>' . $sales2015 . '</td></tr>';
  $message .= '<tr><td>Yearly Sales 2016</td><td>' . $sales2016 . '</td></tr>';
  $message .= '</table><br/>';

  //PROJECTED SALES & PROFITS FOR THE NEXT 5 YEARS
  $sales2017 = $_POST['sales2017'];
  $sales2018 = $_POST['sales2018'];
  $sales2019 = $_POST['sales2019'];
  $sales2020 = $_POST['sales2020'];
  $sales2021 = $_POST['sales2021'];

  $message .= '<table>';
  $message .= '<tr><td colspan="2" class="theader">YOUR PROJECTED SALES &amp; PROFITS FOR THE NEXT 5 YEARS</td></tr>';
  $message .= '<tr><td>Yearly Sales 2017</td><td>' . $sales2017 . '</td></tr>';
  $message .= '<tr><td>Yearly Sales 2018</td><td>' . $sales2018 . '</td></tr>';
  $message .= '<tr><td>Yearly Sales 2019</td><td>' . $sales2019 . '</td></tr>';
  $message .= '<tr><td>Yearly Sales 2020</td><td>' . $sales2020 . '</td></tr>';
  $message .= '<tr><td>Yearly Sales 2021</td><td>' . $sales2021 . '</td></tr>';
  $message .= '</table><br/>';

  $message .= '</table><p>--NOTHING FOLLOWS--</p></body></html>';


  //send email
  mail($to, $subject, $message, $headers);

  //Email response
  echo "<script type=\"text/javascript\">
        alert('Thank you for your interest in ACASYS Capital! Your Business Information has been sent to admin@acasysproperties.com. All information will be kept strictly confidential.');
        window.location.href='ipo4.html';
        </script>";
?>
