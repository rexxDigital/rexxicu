package router

import "github.com/labstack/echo/v4"


func New() *echo.Echo {
  app := echo.New()

  app.HideBanner = true

  return app
}
