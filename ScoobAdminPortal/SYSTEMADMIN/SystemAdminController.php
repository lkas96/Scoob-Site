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
    public static function viewSchoolApplication($uen){
        $viewSchoolApplication = new Applications();
        $results = $viewSchoolApplication -> viewSchoolApplication($uen);
        return $results;
    }
}

class ApproveSchool{
    public static function approveSchool($uen){
        $approveSchool = new Applications();
        $results = $approveSchool -> approveSchool($uen);
        return $results;
    }
}

class RejectSchool{
    public static function rejectSchool($uen){
        $rejectSchool = new Applications();
        $results = $rejectSchool -> rejectSchool($uen);
        return $results;
    }
}

class ViewTransportApplication{
    public static function viewTransportApplication($uen){
        $viewTransportApplication = new Applications();
        $results = $viewTransportApplication -> viewTransportApplication($uen);
        return $results;
    }
}

class ApproveTransport{
    public static function approveTransport($uen){
        $approveTransport = new Applications();
        $results = $approveTransport -> approveTransport($uen);
        return $results;
    }
}

class RejectTransport{
    public static function rejectTransport($uen){
        $rejectTransport = new Applications();
        $results = $rejectTransport -> rejectTransport($uen);
        return $results;
    }
}


?>