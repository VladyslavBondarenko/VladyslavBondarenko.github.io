<?php
/**
 * Created by PhpStorm.
 * User: kalim_000
 * Date: 2/19/2017
 * Time: 6:50 PM
 */

require('vendor/autoload.php');

use app\Uploader;
use VK\VK;

$config = require ('app/config/config.php');

$apiClient = new VK($config['app_id'], $config['api_secret'], $config['access_token']);
$uploader = new Uploader($apiClient);

$photo = __DIR__ . '/images/image.png';
$result = $uploader->uploadPhotoToTheWall($photo);

if($result['success']){
    $message = 'Image uploaded successfully';
}
else{
    $message = 'Failed to upload Image';
}
header('Location: /TVProgram/index.php?message=' . $message);

