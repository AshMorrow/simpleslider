<?php
define('DS',DIRECTORY_SEPARATOR);
define('ROOT',__DIR__.DS);
define('VIEW_DIR',__DIR__.DS.'view'.DS);
define('LIBS_DIR',__DIR__.DS.'libs'.DS);
define('JS_DIR',__DIR__.DS.'view'.DS.'js'.DS);

require_once LIBS_DIR.'function.php';
require VIEW_DIR.'layout.phtml';