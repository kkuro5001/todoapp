<?php
    //db接続
    $host = 'localhost';
    $dbname = 'anything';
    $username = 'kkuro';
    $password = '5001';

    //PDOを使用したデータベース接続
    try {
        $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
        $pdo = new PDO($dsn, $username, $password);

        // エラーモードを設定
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        echo "データベース接続成功";
    } catch (PDOException $e) {
        echo "データベース接続失敗: " . $e->getMessage();
    }

    //todo_listテーブルのデータを取得
    try {
        $stmt = $pdo->query('SELECT * FROM todo_list');
        $lists = $stmt->fetchAll(PDO::FETCH_ASSOC);
        //確認用
        echo 'ToDoListテーブル';
        print_r($lists);
    } catch (PDOException $e) {
        echo "データ取得失敗: " . $e->getMessage();
    }
?>