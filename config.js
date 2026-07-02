// ========================================
// JAL 入力ビューア 設定ファイル
// 每月更新此文件中的 gid 即可
// ========================================

const CONFIG = {
    // Google Sheets ID（通常不变）
    spreadsheetId: "1r9SiCgLvcsh8r5ggd7EtfVzHPIwjFIc1LygtL27dQ5g",
    
    // Google Drive 文件夹 URL（通常不变）
    driveUrl: "https://drive.google.com/drive/folders/1VcVAGq_ITI9zs5OYLKmoalt8wfJR43KP",
    
    // ========================================
    // 每月需要更新的 gid（从 Google Sheets URL 中获取）
    // 格式：https://docs.google.com/spreadsheets/d/.../edit?gid=XXXXX#gid=XXXXX
    // 其中的 XXXXX 就是 gid
    // ========================================
    
    // 右侧模式切换（查看模式）
    modes: {
        memo: "595005400",      // FLT HDLG MEMO(当日)
        brief: "1310062388",    // DE-BRIEFING NOTE
        next: "922211019"       // FLT HDLG MEMO(翌日)
    },
    
    // 各部门入力页面
    departments: {
        so: {
            gid: "1023024767",       // DLCSO入力
            title: "DLCSO入力"
        },
        ffu: {
            gid: "146794176",        // DLCFFU入力
            title: "DLCFFU入力"
        },
        pti_today: {
            gid: "552090841",        // DLCPTI当日入力
            title: "DLCPTI当日入力"
        },
        pti_next: {
            gid: "111554375",        // DLCPTI翌日入力
            title: "DLCPTI翌日入力"
        },
        kkm: {
            gid: "1797472086",       // DLCKKM入力
            title: "DLCKKM入力"
        },
        mgr: {
            gid: "37366441",         // 代表MGR入力
            title: "代表MGR入力"
        }
    }
};