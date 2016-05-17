<?php
function getImage($dir_name){
    $img = scandir($dir_name);
    $img_name=[];
    foreach($img as $v){
        if($v != '.' AND $v != '..' AND getimagesize($dir_name.DS.$v)){
            $img_name[] = $v;
        }
    }

    return $img_name;
}

function renderImgLi(array $img){
    foreach($img as $v){
        echo "<li><img src=/view/img/{$v}></li>";
    }
}