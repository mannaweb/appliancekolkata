<?php 
        //echo '<pre>';print_r($_POST);die;
      if(isset($_POST['email']) && isset($_POST['name']) && isset($_POST['phone'])){
        if(isset($_POST['type']) && $_POST['type'] == 'appointment'){

          $to = "support@appliancekolkata.in";
         $subject = 'New Appointment';
         
         $message = "
                   <html>
                   <head>
                   <title>New Appointment</title>
                   </head>
                   <body>
                   <p>Appointment</p>
                   <table>
                   <tr>
                   <th>Name</th>
                   <th>Email</th>
                    <th>Phone</th>
                    <th>service</th>
                    <th>Zip code</th>
                     <th>New Customer</th>
                      <th>Message</th>
                   </tr>
                   <tr>
                   <td>".$_POST['name']."</td>
                   <td>".$_POST['email']."</td>
                    <td>".$_POST['phone']."</td>
                     <td>".$_POST['service']."</td>
                      <td>".$_POST['zipcode']."</td>
                      <td>".$_POST['new_customer']."</td>
                       <td>".$_POST['message']."</td>

                   </tr>
                   </table>
                   </body>
                   </html>
                   ";
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

        }else{

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

   }
}
