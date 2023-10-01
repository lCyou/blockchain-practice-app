# ブロックチェーン実装

## ブロックチェーンの構造
実装したクラスの構造は以下の通りです。

class | 概要 | ファイル
--- | --- | ---
Block | ブロックの構造体 | 
Blockchain | ブロックチェーンの構造体 |

## それぞれの実装について
### Block
* コンストラクタ
    * timestamp: 時刻
    * data: データ
    * previous hash: 前回のブロックのハッシュ値
    * hash: このブロックのハッシュ値
* 関数
    * calculateHash: このブロックのハッシュ値を計算する

### Blockchain
* コンストラクタ
    * chain: ブロックチェーン 
* 関数
    * createGenesisBlock: ジェネシスブロックを作成する
    * getLatestBlock: 最後に作成したブロックを取得する
    * addBlock: ブロックを追加する
    * isChainValid: ブロックチェーンが正しいかどうかを判定する，バリデーション
    