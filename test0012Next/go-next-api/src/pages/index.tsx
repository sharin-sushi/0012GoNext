// https://zenn.dev/kiriyama/articles/f82696bb37c651

// https://lismotech.co.jp/blog/next-jsでapi連携してみよう/
// API呼び出し
// Next.jsではpages\apiの中にあるものは/api/××とマッピングされ、呼び出すことが出来るようです。

// コンポーネント：Reactで画面に表示される部品のことで、
// 表示に必要なデータや処理などを1つのオブジェクトにまとめたもの

// Next.jsの書き方
// https://tomosta.jp/2021/07/nextjs-basic/
// https://reffect.co.jp/react/next-js/

import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>SPA Example</h1>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}

// HomePageコンポーネントがSPAのホームページを表しています。
// Linkコンポーネントを使用して、クライアントサイドのナビゲーションを実装しています。
// Linkコンポーネントは、クリック時にページ遷移を行い、ブラウザの履歴を操作します。











// ーーーーーーーーいもらぶ、カウンター、画像、/apiへのリンクーーーーーーーーーーーーーーーーーー
//   import Image from 'next/image'
//   import { useState, useEffect } from 'react'
//   import styles from '../styles/Home.module.css'
//   import Link from 'next/link'
//   // //Next.jsのLinkコンポーネント：クライアントサイドのルーティングを実現している(?)
  
//   const imageUrlTwitter1 = "https://pbs.twimg.com/media/Fzx7TAlaQAEzW1P?format=jpg&name=large";
//   const imageUrlTwitter2 = "https://twitter.com/i_mo_5/media";
  
  
//   const getImage = async (hoge) => {
//     const response1 = await fetch(hoge);
//     const blob = await response1.blob();
//     const objectURL = URL.createObjectURL(blob);
//     return objectURL;
//   }

// // export default function が　func maniみたいなもの？
// export default function Home() {

//   // returnの中で HTMLを記述(実際に書かれてるのはJSXというJS独自言語、HTMLとは若干違う)
//   return (
//     <div>
//       <h1>いもらぶ</h1>
//      {count1()}
//      <br></br>
//      {App()}
//      <br></br>
//      {ToLink()}
//     </div>
//   );
// }

// const count1 = () => {
//   const [count1, setCount1] = useState(11081)
//   return (
//     <div>
//       <div>―――――――――――</div>
//       <div style={{fontSize: '20px'}}>カウンター：{count1}</div>
//       <div>
//         <button onClick={() => setCount1(cnt => cnt + 1)}
//         style={{ color: 'blue' , backgroundColor: 'white', fontSize: '15px'}} >
//           カウント+1
//         </button>
//         <button onClick={() => setCount1(cnt => cnt - 1)}
//         style={{ color: 'red' , backgroundColor: 'white', fontSize: '15px'}} >
//           カウント-1
//         </button>
//       </div>
//       <div>―――――――――――</div>
//     </div>
//   )
// }
 
//   const App = () => {
//     const [imageURL, setImageURL] = useState(null);
//     const [containerHeight, setContainerHeight] = useState(0);
  
//     useEffect(() => {
//       getImage(imageUrlTwitter1).then((url) => {
//         setImageURL(url);
//       });
//     }, []);

//     const handleContainerRef = (ref: HTMLDivElement | null) => {
//       if (ref) {
//         const height = ref.clientHeight;
//         setContainerHeight(height);
//       }
//     }
  
//     return (
//       <div>
//         {imageURL && (
//           <div style={{ width: '75%', height: '400px' }}>
//             <Image
//               src={imageURL}
//               alt="Image"
//               layout="responsive"
//               width={600}
//               height={80}
//             />
//           </div>
//         )}
//       </div>
//     );
//   };

//   const ToLink = () => {
//     return (
//       <div>
//       <br></br>
//       <Link href="/api">・猫画像生成ページへ </Link>
//       </div>)
//     }
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // export default Home;
  // このファイル内のApp(今回は関数だが変数も可)を外部モジュールでインポートできる
  // これで締めてもいいし、const export~~と関数を書き始めても良い
  
  // スクロールバーが表示されるのは、親要素の高さを超えるサイズの画像が表示されたから。
  // 縦サイズを指定する際に、親要素の高さを超えないように調整する必要がある。
