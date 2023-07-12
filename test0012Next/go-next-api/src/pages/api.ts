
// import { NextPage } from "next";
// 
// const IndexPage: NextPage = () => {
//   return <div>猫画像予定地</div>;
// };
// 
// export default IndexPage;


export default async function handler(req, res) {
  const data = await fetchImage(); // fetchImage関数を呼び出して画像データを取得
  const imageUrl = data.url; // 画像データのURLを取得

  // 画像をレスポンスとして返す
  res.status(200).json({ imageUrl });
}

async function fetchImage() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
}



// ーー{"message":"猫画像予定地"}のみ表示されたーーーーーーーー
// export default function handler(req, res) {
//   const data = { message: '猫画像予定地' };
//   res.status(200).json(data);
// }

// const fetchImage = async () => {
//   const res = await fetch("https://api.thecatapi.com/v1/images/search");
//   const images = await res.json();
//   console.log(images);
//   return images[0];
// };

// fetchImage(); // 追加
// ーーーーーーーーーー


// http://localhost:3000/api




// import Image from 'next/image'
// import { useState, useEffect } from 'react'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'

// export default function handler(req, res) {
//   res.status(200).json({ A: 'Hello' });
// }
// レスポンスの本文としてJSONデータを送信するた

// 最高に意味わからん
// json()の中身　　→　　ブラウザでの表示
// 　{ A: 'C' }　→ {"A":"C"}
// 　{ AB: 'C' }　→　{"AB":"C"}
// 　{ A: 'CD' }→{"A":"CD"}

// 　{ : 'C' }、{ A 'C' }
// 　サーバー起動中なら読み込まない（変更前の表示が残る）
// 　サーバー(再)起動するとエラー