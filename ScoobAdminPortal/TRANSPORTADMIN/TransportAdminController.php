<?php
include("../CLASSES/Transport.php");

class ViewAllBuses{
    public static function viewAllBuses(){
        $viewAllBuses = new Transport();
        $results = $viewAllBuses->viewAllBuses();
        return $results;
    }
}

class ViewBus{
    public static function viewBus($busID){
        $viewBus = new Transport();
        $results = $viewBus->viewBus($busID);
        return $results;
    }
}

class AddBus{
    public static function addBus($busID){
        $addBus = new Transport();
        $results = $addBus->addBus($busID);
        return $results;
    }
}

class DeleteBus{
    public static function deleteBus($busID){
        $deleteBus = new Transport();
        $results = $deleteBus->deleteBus($busID);
        return $results;
    }
}

class SearchBus{
    public static function searchBus($searchQuery){
        $searchBus = new Transport();
        $results = $searchBus->searchBus($searchQuery);
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

class ViewDriver{
    public static function viewDriver($driverID){
        $viewDriver = new Transport();
        $results = $viewDriver->viewDriver($driverID);
        return $results;
    }
}

class AddDriver{
    public static function addDriver($driverID, $fname, $lname, $phone, $email, $password){
        $addDriver = new Transport();
        $results = $addDriver->addDriver($driverID, $fname, $lname, $phone, $email, $password);
        return $results;
    }
}

class AssignDriver{
    public static function assignDriver($driverID, $busID){
        $assignDriver = new Transport();
        $results = $assignDriver->assignDriver($driverID, $busID);
        return $results;
    }
}

class UnassignDriver{
    public static function unassignDriver($driverID, $busID){
        $unassignDriver = new Transport();
        $results = $unassignDriver->unassignDriver($driverID, $busID);
        return $results;
    }
}

class DeleteDriver{
    public static function deleteDriver($driverID){
        $deleteDriver = new Transport();
        $results = $deleteDriver->deleteDriver($driverID);
        return $results;
    }
}

class SearchDriver{
    public static function searchDriver($searchQuery){
        $searchDriver = new Transport();
        $results = $searchDriver->searchDriver($searchQuery);
    }
}
class ImportTransport{
    public static function importTransport($csv_file_1, $csv_file_2, $csv_file_3){
        $importTransport = new Transport();
        $results = $importTransport->importTransport($csv_file_1, $csv_file_2, $csv_file_3);
        return $results;
    }
}


?>