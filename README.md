　仮想環境構築の動画にて、フレームワークによる失敗を述べましたが、その改善策として、「開発する前に、ディレクトリ・ページ構成を考え、それらの実装を楽にできる言語とフレームワーク、ライブラリから探そう」と今回初めてP(Plan)を考えました。
 
 1つ目から既に使ってある言語とフレームワーク等の相性やページをどう見せたいか等を一切考えずに動いたことを反省し、できるだけ事が楽に運ぶように計画を立てました。

　ローカル環境でのテスト等、現時点の自分が使えるものは全て使い、実装に臨みました。commitがすさまじい数になっていますが、主な要因としては「デプロイに際しprismaの接続が上手くいかない」「405 エラーがローカル環境では出ないのに、デプロイしたら出る」という2つが挙げられます。

  今回の開発を通して、bing AIやchatGPTを最大限活用したものの、「エラーの箇所及び解消方法は把握できるが、そのエラー解消のためにどこを弄るか」等の問題を感じました。例えば、405エラーはfetchする箇所（tsx）で出ますが、弄る必要があるのはroute.tsの箇所･･･等。また、コンソールでの確認やエラーハンドリング等の初歩的なテストを初めて行いました。

 なお、技術スタックは以下の通りです。
 
　・フロント（言語）：TypeScript,Next.js
 
　・バック（データベース）：vercel/PostgreSQL
 
　・API：Next.js 13のAPI Routes・prisma
 
　・ウェブサーバ：vercel
 
　・オペレーティングシステム：Linux(windows wsl)
 
　・その他：microCMS
 
　実際に以下のリンク「問」で投稿していただければ、ダッシュボードあるいはprisma studioでこちらから投稿が確認できます。本文に「返信希望」の旨を入れて頂ければ、メールアドレスから返答したいと存じます。
　
 ※vercelの無料プランではDBの容量が256 MBしか無いため、約一週間の間隔で投稿を一律削除したく存じます。また、投稿確認は目視のため、確認が遅れる可能性があります。
 
　robots.txtでクローラを制限していますが、リンクをみだりに第三者への流布することはご控えください。また、容量の都合上、本文はできるだけ最小にしていただけると幸いです。
　なお、二つ目のリンク「事」は文字数の関係上当媒体で書けなかった情報を提示しています。お手すきの際は是非ご確認ください。
