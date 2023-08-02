<?php
include("../CLASSES/Transport.php");

class ViewAllBuses{
    public static function viewAllBuses(){
        $viewAllBuses = new Transport();
        $results = $viewAllBuses->viewAllBuses();
        return $results;
    }
}

class ViewAllDrivers{
    public static function viewAllDrivers(){
        $viewAllDrivers = new Transport();
        $results = $viewAllDrivers->viewAllDrivers();
        return $results;
    }
}

?>