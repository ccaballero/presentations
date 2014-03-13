<?php

$std = new StdClass();
$std->name = 'asdf';
$std->surname = 'asdf';
$std->phonenumber = array();

$std->phonenumber[] = 1;
$std->phonenumber[] = 2;
$std->phonenumber[] = 3;

header('Content-Type','text/plain');
echo json_encode($std);


