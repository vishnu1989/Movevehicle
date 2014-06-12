<?php

$num = rand();
if ($num % 2 == 0 )
$contents ='<responses>
<response>OK Message Processed Successfully!</response>
</responses>';
else
$contents ='<responses>
   <error-responses>
      <error-response><![CDATA[ValidationException: [vehiclepartinput.unableToFindStockNumber]: XX5555]]></error-response>
   </error-responses>
</responses>';

header ("Content-Type:text/xml");

print $contents;
?>
