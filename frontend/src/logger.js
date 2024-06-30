import log from 'loglevel';

// ロギングレベルの設定
if (process.env.NODE_ENV === 'development') {
  log.setLevel('debug'); // 開発時はデバッグレベルまでログ出力
} else {
  log.setLevel('warn'); // 本番環境では警告レベル以上をログ出力
}

export default log;
