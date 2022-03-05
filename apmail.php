<?php 
      echo '<pre>';print_r($_POST);die;

         $to = "support@appliancekolkata.in";
         $subject = $_POST['subject'];
         
         $message = $_POST['msg'];
         $header = "From:support@appliancekolkata.com \r\n";
        // $header .= "cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }