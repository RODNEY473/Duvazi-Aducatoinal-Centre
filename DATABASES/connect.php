<?php 
if($_SERVER['REQUEST_METHOD']=='POST'){
    $name=$_POST['name'];
    $surname=$_POST['surname'];
    $identifcation=$_POST['identifcation'];
    $Email=$_POST['Email'];
    $Phone=$_POST['Phone'];
    $password=$_POST['password'];
    $gender=$_POST['gender'];


$con=new mysqli('localhost', 'root', '', 'duvazi');

if($con){
    
    $sql="insert into `users` (name, surname, identifcation, Email, Phone, password, gender)values('$name','$surname', '$identifcation', '$Email', '$Phone', '$password', '$gender')";
    $result=mysqli_query($con, $sql);
    if($result){
        
    }else{
        die(mysqli_error($con));
    }
}else{
    die(mysqli_error($con));
}


}
?>