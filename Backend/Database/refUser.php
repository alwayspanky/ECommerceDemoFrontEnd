<?php

     class RefUser{

        public static function registerUser($username, $mobileNo, $pass) {

            $aResult = array();

            $db = new Database();
    
            $sql = "INSERT INTO `user_info` (username, mobile , password) VALUES('".$username."','".$mobileNo."' , '".$pass."')";
    
            // $aResult['trace']['sql'] = $sql;
    
            if($db->getConnection()->query($sql) === FALSE){
    
                $aResult['status']['code'] = "FAILED_TO_CREATE_ACCOUNT";
    
                $aResult['status']['messge'] = "Failed to created account."; //RefMessge.getMessageByCode($aResult['status']['code']);
    
            } else {
    
                $user_id = $db->getConnection()->insert_id;
    
                $aResult['output']['user_id'] = $user_id;
    
                $aResult['status']['code'] = "ACCOUNT_CREATED";
    
                $aResult['status']['message'] = "Account created."; //RefMessge.getMessageByCode($aResult['status']['code']);
    
            }
    
            return $aResult;

        }
    }

    ?>