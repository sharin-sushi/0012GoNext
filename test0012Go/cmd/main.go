package main

import (
	"fmt"
	"log"
	"net/http"
	// "syscall/js"
)

func add(a float32, b float32) float32 {
	return a + b
}

// func main() {
// 	js.Global().Set("add", js.FuncOf(add))
// }

func main() {
	http.HandleFunc("/", Show)
	// 第１引数(パス)へアクション(リクエストアクション？アクセス？)が有った際に、第２引数(関数)を呼び出す。

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}

func Show(w http.ResponseWriter, r *http.Request) {
	fmt.Println("hello")
}

// Makelink()
