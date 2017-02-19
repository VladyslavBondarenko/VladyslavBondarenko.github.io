<?php
/**
 * Created by PhpStorm.
 * User: kalim_000
 * Date: 2/19/2017
 * Time: 6:48 PM
 */

namespace app;

use VK\VK;
use GuzzleHttp\Client;

class Uploader
{
    public $apiClient;

    public $guzzleClient;


    /**
     * Uploader constructor.
     * @param  $apiClient
     */
    public function __construct($apiClient)
    {
        $this->apiClient = $apiClient;

        $this->guzzleClient = new Client();
    }

    /**
     * @param $photoPath
     * @return array
     */
    public function uploadPhotoToTheWall($photoPath)
    {
        $uploadServer = $this->getUploadServer();

        if(!$uploadServer){
            return [
                'success' => false,
                'message' => 'Could not resolve upload server'
            ];
        }

        $uploadResponse = $this->uploadPhotoToServer($uploadServer, $photoPath);

        if (!$uploadResponse) {
            return [
                'success' => false,
                'message' => 'Failed to upload photo to VK servers'
            ];
        }
        $saveToOwnerResponse = $this->apiClient->api('photos.saveOwnerPhoto', [
            'server' => $uploadResponse['server'],
            'photo' => $uploadResponse['photo'],
            'hash' => $uploadResponse['hash'],
        ]);

        if (!empty($saveToOwnerResponse['errors'])) {
            return [
                'success' => false,
                'message' => 'Failed to save photo to owner'
            ];
        }

        return [
            'success' => true,
            'message' => 'Success'
        ];

    }

    /**
     * @return mixed
     */
    private function getUploadServer()
    {
        $response = $this->apiClient->api('photos.getOwnerPhotoUploadServer');

        if(empty($response['upload_url'])){
            return false;
        }

        return $response['upload_url'];
    }

    /**
     * @param $serverUrl
     * @param $photoPath
     * @return bool|\Psr\Http\Message\StreamInterface
     */
    private function uploadPhotoToServer($serverUrl, $photoPath)
    {
        $response = $this->guzzleClient->post('POST', $serverUrl, [
            'verify' => false,
            'multipart' => [
                [
                    'name' => 'photo',
                    'contents' => fopen($photoPath, 'r')
                ],
            ],
        ]);

        if ($response->getStatusCode() != 200) {
            return false;
        }

        return $response->getBody();
    }


}

