//=====================================================================
// このファイルでは日時の表示形式、時差の設定の基本設定から
// フォント、文字サイズ、文字色、縁の太さや縁の色、
// 行間などの設定も可能です。
//
// 基本的には19行目に記載されている表示形式の設定のみで十分となりますが
// カスタマイズされたい方は是非お試しください
//
// 現在のバージョンで対応している設定項目は以下の通りです
//
// 1. 日時や時間の表示フォーマット指定
// 2. 時差の設定
// 3. 文字の縁取り（縁の太さ）設定
// 4. 文字の縁取り（縁の色）設定
// 5. 文字色の設定
// 6. 日付の文字サイズを強制的に指定する
// 7. 時間の文字サイズを強制的に指定する
// 8. 日付の行と時間の行の間隔を指定する
// 9. 年月日の表記フォーマットを指定する
//
//=====================================================================

// 1. 日時や時間の表示フォーマット指定
//
// 0: 基本セット（年月日、曜日、時間、分、秒）
// 1: 曜日無し（年月日、時間、分、秒）
// 2: 日付けのみ＋曜日（年月日、曜日）
// 3: 日付けのみ（年月日）
// 4: 時間のみ（時間、分、秒）
// 5: 時間のみ＋ミリ秒付き（時間、分、秒、ミリ秒）
// 
// 初期値は0が指定されています
const showPattern = 6;


// 2. 時差の設定
// 
// 基準はUTCなため、日本の時差の場合は+9となります
// 初期値は「9」（日本時間）が指定されています
const timeDiffsInHour = 9;


// 3. 文字の縁取り（縁の太さ）設定
// 
// 太さをpx単位で指定できます
// 初期値は「10」が指定されています
const textBorderSize = 10;


// 4. 文字の縁取り（縁の色）設定
// 
// 縁の色をRGB値（0-255）で指定できます
// 初期値は「rgb(61, 61, 61)」の濃いめのグレーとなっています※RGB全ての値が61
// 色を変更する場合は「const textBorderColor = "rgb(128, 64, 32)";」のように数値を変えてください
const textBorderColor = "rgb(61, 61, 61)";


// 5. 文字色の設定
//
// 縁の色をRGB値（0-255）で指定できます
// 初期値は「rgb(255, 255, 255)」の白となっています※RGB全ての値が255
// 色を変更する場合は「const textBorderColor = "rgb(128, 64, 32)";」のように数値を変えてください
const textColor = "rgb(255, 255, 255)";


// 6. 日付の文字サイズを強制的に指定する
// ※日付と時間の文字のバランスが崩れる可能性がありますのでご注意ください
//
// 指定する場合は「const forceTextSizeDate = 40;」のように数値（px値）を指定してください
// 指定をしない場合は「const forceTextSizeDate = 0;」としてください
const forceTextSizeDate = 0;

// 7. 時間の文字サイズを強制的に指定する
// ※日付と時間の文字のバランスが崩れる可能性がありますのでご注意ください
//
// 指定する場合は「const forceTextSizeTime = 70;」のように数値（px値）を指定してください
// 指定をしない場合は「const forceTextSizeTime = 0;」としてください
const forceTextSizeTime = 0;

// 8. 日付の行と時間の行の間隔を指定する
//
// 間隔を広めたい場合は「10」等0以上の大きい値を
// 間隔を狭めたい場合は「-10」等の0以下の小さい値を指定してください
// 指定をしない場合は「const marginBetweenDateAndTime = 0;」としてください
const marginBetweenDateAndTime = 0;

// 9. 年月日の表記フォーマットを指定する
//
// 0: 基本セット:     yyyy年mm月dd日（a） 例）2022年01月23日（日）
// 1: アメリカ式表記: mm/dd/yyyy (a)     例）01/23/2022 (Sun)
// 2: イギリス式表記: dd/mm/yyyy (a)     例）23/01/2022 (Sun)
// 
// 初期値は0が指定されています
const dateFormatPattern = 6;

