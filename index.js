const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory storage for gun data
let guns = [
    {
        id: "1",
        name: "ハイキャパ5.1",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120065612.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "ハイキャパ4.3",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120065833.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "M9A1 ブラック",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120070130.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "M9A1 シルバーモデル",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120070327.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "HK P30",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120070528.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "マック11",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120070724.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "スミス＆ウェッソン PC356",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120070940.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "P99 DAO",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120071126.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "グロック18C",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120071429.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "シグプロ SP2340",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120063618.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "コンバットデルタ　シルバーモデル",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120064015.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "KP85",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120064219.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "デザートイーグル.50AE　シルバーモデル",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120064540.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "M92Fミリタリー　シルバーモデル",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120064855.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "コンバットデルタ　ブラック",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120063825.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "デザートイーグル.50AE　ブラック",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120064406.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "センチメーターマスター",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120065031.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "M92F ミリタリー　ブラック",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120064726.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "M933 ショーティ・カスタム　タンカラー",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120055648.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "タボール21・コンパクト　フラット・ダークアース",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120060408.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "タボール21・コンパクト　ブラック",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120060121.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "スカーL CQC　フラット・ダークアース",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120060838.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "スカーL CQC　ブラック",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120060640.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "ソップモッドM4",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120061252.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "H&K G36C",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120061533.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "H&K MP5A5",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120061848.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "コルト M4A1カービン",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120062120.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "M4 CQB　タンカラーモデル",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120054434.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "AK74U",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120054801.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "G36C",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120055026.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "MP5A5 R.A.S.",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120055301.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "M4 CQB　ブラック",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120054042.jpg",
        ageRating: 10
    },
    {
        id: "1",
        name: "AK47R",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_250116051750.jpg",
        ageRating: 14
    },
    {
        id: "1",
        name: "M4A1R",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_240723064813.jpg",
        ageRating: 14
    },
    {
        id: "1",
        name: "HK45",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120051908.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "ハイキャパE ガバメントモデル",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120052149.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "M93R",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120052423.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K USP",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120052706.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "グロック18C",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120053013.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "M93R　シルバースライド",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120053142.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "グロック18C　シルバースライド",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120053318.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "M9A1",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120053711.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K USP　シルバースライド",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120053454.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "スコーピオン モッドM",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120050011.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "MP7A1　タンカラーモデル",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120050757.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "スコーピオン Vz.61",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120051129.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "マック10",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120051412.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "MP7A1　ブラック",
        type: "ハンドガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120050533.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "M4パトリオットHC",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120013900.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K MP5K HC",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120014627.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "PS90 HC",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120014941.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "ステアーHC　タンカラーモデル",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120015659.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AK47 HC",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120020033.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "ステアーHC　ブラック",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120015456.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K MP5A5 HC",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120021021.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K G3 SAS HC",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120021318.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "P-90プラス バージョン・レン【電動ガンプラス】",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_250318020628.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "SG553プラス【電動ガンプラス】",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_250206022949.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "G36Cプラス【電動ガンプラス】",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_240404015142.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "パトリオットプラス【電動ガンプラス】",
        type: "小銃",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_240110052657.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "P-90プラス【電動ガンプラス】",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_230425024331.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "コルト M933コマンド",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119062324.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "M14ソーコム",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119064911.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "P-90",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119065200.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "89式5.56mm小銃",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119065450.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "コルト M4A1カービン",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119065711.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "MP5-J",
        type: "小銃",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119071103.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "SIG552 シールズ",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119071712.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "コルト M733コマンド",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119072109.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K MP5A5（ハイグレードバージョン）",
        type: "小銃",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119072816.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K MP5A4（ハイグレードバージョン）",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119073031.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "P-90 TR",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119073559.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AK47 ヴェータ・スペツナズ",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119073854.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K MP5 SD5",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119074107.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "ナイツSR-16 M4カービン",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119010926.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K MP5 SD6",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119075139.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "G3ショーティ MC51",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119080656.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K PSG-1",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119080936.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K G3 SG/1",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119081348.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "H&K MP5クルツA4",
        type: "小銃",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119081645.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AK47S",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210120011707.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "SGR-12",
        type: "ショットガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119052457.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AA-12",
        type: "ショットガン",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119062000.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "MP5 A4",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_240619024928.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "MP5 SD6",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_221207060405.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "URG-I 11.5inch ブラック",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_221026025820.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "URG-I 11.5inch ソップモッド ブロック3",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_220201013737.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AK ホワイトストーム",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_211124025630.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "MP5 A5",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210728014903.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "URG-I ソップモッド ブロック3",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210202022104.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AKストーム",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_201120024930.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "マーク46 モッド0",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_201214082222.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AKS47",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_201214083034.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "マーク18 モッド1",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_201214083959.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "HK416 デルタカスタム ブラック",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_201214084523.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AK74MN",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_201214084906.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AK47",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119011638.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "HK416 デルタカスタム",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119012502.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "HK416C カスタム",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119013102.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "HK417 アーリーバリアント",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119013710.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "DEVGRUカスタム HK416D",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119021218.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "HK416D",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119021603.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "スカーH　フラット・ダークアース",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119021959.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "スカーH　ブラック",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119022247.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "スカーL CQC　フラット・ダークアース",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119022559.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "G36Cカスタム",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119023105.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "スカーL　ブラック",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119023518.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "スカーL　フラット・ダークアース",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119023315.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "CQB-R　ブラックモデル",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119045327.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "CQB-R　フラット・ダークアース",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119045533.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "G36K",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119045940.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "AK102",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119050318.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "M4A1 カービン",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119051110.jpg",
        ageRating: 18
    },
    {
        id: "1",
        name: "ソップモッドM4",
        type: "アサルト",
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_old_210119051500.jpg",
        ageRating: 18
    },
    {
        id: "2",
        name: "GBR スプリングパワー BBグレネード",
        type: "グレネード",
        maker: "BA GRB",
        imageURL: "https://m.media-amazon.com/images/I/41wwgfoeruL._AC_.jpg",
        ageRating: 18
    },
    {
        id: "2",
        name: "TORNADO 2 TIMER FRAG GRENADE",
        type: "グレネード",
        maker: "laylax",
        imageURL: "https://m.media-amazon.com/images/I/51uQK+Z03JL._AC_SL1000_.jpg",
        ageRating: 18
    },
    {
        id: "2",
        name: "SP製 GR02",
        type: "グレネード",
        maker: "SP",
        imageURL: "https://m.media-amazon.com/images/I/412so8hlHZL._AC_.jpg",
        ageRating: 18
    }
];


// Get all guns
app.get('/guns', (req, res) => {
    res.json(guns);
});


// Search guns by keywor
app.get('/guns/search', (req, res) => {
    const query = req.query.q?.toLowerCase();
    if (!query) {
        return res.status(400).json({ error: '検索キーワード (q) が必要です' });
    }

    const results = guns.filter(gun =>
        gun.name.toLowerCase().includes(query) ||
        gun.type.toLowerCase().includes(query) ||
        gun.maker.toLowerCase().includes(query)
    );

    res.json(results);
});


// Add a new gun
app.post('/guns', (req, res) => {
    const { name, type, ammo } = req.body;

    if (!name || !type || ammo === undefined) {
        return res.status(400).json({ error: 'name, type, ammo を全て指定してください' });
    }

    const newGun = {
        id: uuidv4(),
        name,
        type,
        ammo
    };

    guns.push(newGun);
    res.status(201).json({ message: '銃を追加しました', gun: newGun });
});

// Delete a gun
app.delete('/guns/:id', (req, res) => {
    const { id } = req.params;
    const beforeLength = guns.length;
    guns = guns.filter(g => g.id !== id);

    if (guns.length === beforeLength) {
        return res.status(404).json({ error: '指定された銃が見つかりません' });
    }

    res.json({ message: '削除しました' });
});

// Update a gun
app.put('/guns/:id', (req, res) => {
    const { id } = req.params;
    const { name, type, ammo, maker, imageURL, ageRating } = req.body;

    const gun = guns.find(g => g.id === id);
    if (!gun) {
        return res.status(404).json({ error: '銃が見つかりません' });
    }

    if (name) gun.name = name;
    if (type) gun.type = type;
    if (ammo !== undefined) gun.ammo = ammo;
    if (maker) gun.maker = maker;
    if (imageURL) gun.imageURL = imageURL;
    if (ageRating !== undefined) gun.ageRating = ageRating;

    res.json({ message: '更新しました', gun });
});

app.listen(PORT, () => {
    console.log(`API 起動中 → http://localhost:${PORT}`);
});
