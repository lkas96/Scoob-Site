<?php
include("../CLASSES/Applications.php");

class ViewPendingApplications{
    public static function viewPendingApplications(){
        $viewPendingApplications = new Applications();
        $results = $viewPendingApplications -> viewPendingApplications();
        return $results;
    }
}

class ViewSchoolApplication{
    public function viewSchoolApplication($uen){
        $viewSchoolApplication = new Applications();
        $results = $viewSchoolApplication -> viewSchoolApplication($uen);
        return $results;
    }
}

class ViewTransportApplication{
    public function viewTransportApplication($uen){
        $viewTransportApplication = new Applications();
        $results = $viewTransportApplication -> viewTransportApplication($uen);
        return $results;
    }
}


?>