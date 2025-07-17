<?php 

$success=0;
$user=0;

if($_SERVER['REQUEST_METHOD']== 'POST'){
    include 'connect.php';
    $name=$_POST['name'];
    $surname=$_POST['surname'];
    $identifcation=$_POST['identifcation'];
    $Email=$_POST['Email'];
    $Phone=$_POST['Phone'];
    $password=$_POST['password'];
    $gender=$_POST['gender'];
    $sql="SELECT * from 'users' where Email = '$Email'";

    $result=mysqli_query($con,$sql);
    if($result){
        $num=mysqli_num_rows($result);
        if($num>0){
            $user=1;
        }else{
            $sql= "insert into 'users'(name, surname, identifcation, Email, Phone, password, gender) values('$name','$surname', '$identifcation', '$Email', '$Phone', '$password', '$gender')";
            $result=mysqli_query($con,$sql);
            if($result){
                $success=1;
                header('location: /HTML/login.html');
            }else{
                die(mysqli_error($con));
            }
        }
    }
}


?>

<?php 
if($user){
    echo '<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Error </strong>: User already exist <button type="button" class="close" data-dismiss="alert" arial-label="Close"><span aria-hidden="true">&times;</span></button></div>';
}
?>

<?php 
if($success){
    echo '<div class="alert alert-Success alert-dismissible fade show" role="alert"><strong>Congrantulations </strong>: You have signed up Successfully. <button type="button" class="close" data-dismiss="alert" arial-label="Close"><span aria-hidden="true">&times;</span></button></div>';
}
?>