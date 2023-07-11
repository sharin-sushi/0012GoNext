package api

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type ResultBF struct {
	MidPrice float64 `json:"mid_price"`
	Bids     []struct {
		Price float64 `json:"price"`
		Size  float64 `json:"size"`
	} `json:"bids"`
	Asks []struct {
		Price float64 `json:"price"`
		Size  float64 `json:"size"`
	} `json:"asks"`
}

const url = "https://api.bitflyer.jp/v1/board"

//パブリックメソッドは大文字で始める
func GetBtcBF() float64 {
	if resp, err := http.Get(url); err != nil {
		fmt.Println("error:http get\n", err)
		return 0
	} else {
		defer resp.Body.Close() //関数終了時の後始末
		var result ResultBF
		if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
			fmt.Println("error:json\n", err)
			return 0
		}
		return result.MidPrice
	}
}
