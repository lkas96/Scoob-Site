<?php
include("../CLASSES/School.php");

class ViewAllClasses{
    public static function viewAllClasses(){
        $viewAllClasses = new School();
        $results = $viewAllClasses->viewAllClasses();
        return $results;
    }
}

class ViewClass{
    public static function viewClass($class){
        $viewClassList = new School();
        $results = $viewClassList->viewClass($class);
        return $results;
    }
}

class AddClass{
    public static function addClass($class){
        $addClass = new School();
        $results = $addClass->addClass($class);
        return $results;
    }
}

class SearchClass{
    public static function searchClass($searchQuery){
        $searchClass = new School();
        $results = $searchClass->searchClass($searchQuery);
        return $results;
    }
}

// class DeleteClass{
//     public static function deleteClass($class){
//         $deleteClass = new School();
//         $results = $deleteClass->deleteClass($class);
//         return $results;
//     }
// }

class ViewAllStudents{
    public static function viewAllStudents(){
        $viewAllStudents = new School();
        $results = $viewAllStudents->viewAllStudents();
        return $results;
    }
}

class ViewStudent{
    public static function viewStudent($studentid){
        $viewStudent = new School();
        $results = $viewStudent->viewStudent($studentid);
        return $results;
    }
}

class SearchStudent{
    public static function searchStudent($searchQuery){
        $searchStudent = new School();
        $results = $searchStudent->searchStudent($searchQuery);
        return $results;
    }
}
?>