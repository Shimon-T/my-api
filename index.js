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
        id: uuidv4(),
        name: "グロック17 3rdジェネレーション",
        type: "ハンドガン",
        ammo: 25,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210121052205.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "ハイキャパ5.1 ガバメントモデル",
        type: "ハンドガン",
        ammo: 31,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210121053124.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "ハイキャパ5.1 ゴールドマッチ",
        type: "ハンドガン",
        ammo: 31,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210121022820.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "ハイキャパ5.1R ブラックモデル",
        type: "ハンドガン",
        ammo: 31,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210121060404.jpg",
        ageRating: 10
    },
    {
        id: uuidv4(),
        name: "ハイキャパ5.1 ステンレスモデル",
        type: "ハンドガン",
        ammo: 31,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub5_210121050230.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "M92F ミリタリーモデル",
        type: "ハンドガン",
        ammo: 26,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210121055112.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "デザートイーグル.50AE",
        type: "ハンドガン",
        ammo: 27,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub5_210121053630.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "M4A1 カービン",
        type: "アサルトライフル",
        ammo: 68,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210119065711.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "HK416 デルタカスタム",
        type: "アサルトライフル",
        ammo: 82,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210119012502.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "P90",
        type: "サブマシンガン",
        ammo: 68,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210119065200.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "MP5 SD6",
        type: "サブマシンガン",
        ammo: 50,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210119075139.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "G36C",
        type: "アサルトライフル",
        ammo: 50,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210119072429.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "ステアーAUG",
        type: "アサルトライフル",
        ammo: 80,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210119075819.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "M870 タクティカル",
        type: "ショットガン",
        ammo: 30,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_sub1_210120075151.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "サイガ-12K",
        type: "ショットガン",
        ammo: 45,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_main_230516043332.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "VSR-10 Gスペック",
        type: "ライフル",
        ammo: 30,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_main_210120043830.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "M40A5",
        type: "ライフル",
        ammo: 35,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_main_210119020828.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "M320A1",
        type: "グレネード",
        ammo: 18,
        maker: "東京マルイ",
        imageURL: "https://www.tokyo-marui.co.jp/appimg/product/p_main_210121034429.jpg",
        ageRating: 18
    }
    ,
    {
        id: uuidv4(),
        name: "M870 ブリーチャー",
        type: "ショットガン",
        ammo: 30,
        maker: "東京マルイ",
        imageURL: "https://i.imgur.com/GaC46Eb.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "VSR-10 プロスナイパーバージョン",
        type: "ライフル",
        ammo: 30,
        maker: "東京マルイ",
        imageURL: "https://i.imgur.com/yADQztF.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "グレネード160ショット",
        type: "グレネード",
        ammo: 1,
        maker: "東京マルイ",
        imageURL: "https://i.imgur.com/N9geMWZ.jpg",
        ageRating: 18
    },
    {
        id: uuidv4(),
        name: "プロテクティブベスト",
        type: "その他",
        ammo: 0,
        maker: "東京マルイ",
        imageURL: "https://i.imgur.com/8m7RMzN.jpg",
        ageRating: 0
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
