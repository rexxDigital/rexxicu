package main

import "github.com/rexxDigital/rexxicu/internal/router"

func main() {
  app := router.New()

  app.Logger.Fatal(app.Start(":3000"))
}
