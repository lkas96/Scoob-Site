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

class AddStudent{
    public static function addStudent($fname, $lname, $studentid, $parentid, $class, $subscription){
        $addStudent = new School();
        $results = $addStudent->addStudent($fname, $lname, $studentid, $parentid, $class, $subscription);
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


class DeleteStudent
{
    public static function deleteStudent($studentid)
    {
        $deleteStudent = new School();
        $results = $deleteStudent->deleteStudent($studentid);
        return $results;
    }
}



class ViewAllTeachers{
    public static function viewAllTeachers(){
        $viewAllTeachers = new School();
        $results = $viewAllTeachers->viewAllTeachers();
        return $results;
    }
}

class AddTeacher{
    public static function addTeacher($fname, $lname, $teacherid, $class, $email, $password){
        $addTeacher = new School();
        $results = $addTeacher->addTeacher($fname, $lname, $teacherid, $class, $email, $password);
        return $results;
    }
}

class ViewTeacher{
    public static function viewTeacher($teacherid){
        $viewTeacher = new School();
        $results = $viewTeacher->viewTeacher($teacherid);
        return $results;
    }
}

class SearchTeacher{
    public static function searchTeacher($searchQuery){
        $searchTeacher = new School();
        $results = $searchTeacher->searchTeacher($searchQuery);
        return $results;
    }
}

?>