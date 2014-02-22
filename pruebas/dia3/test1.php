<?php

$a=[];
$a['lunes']='LU';
$a['martes']='MA';
$a['miercoles']='MI';
$a['jueves']='JU';
$a['viernes']='VI';
$a['sabado']='SA';
$a['domingo']='DO';

var_dump($a);
for($i=0;$i<count($a);$i++){
    echo $a[$i];
}

