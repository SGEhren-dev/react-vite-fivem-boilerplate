fx_version "cerulean"

description "Boilerplate for Nui mods with Vite and React"
author "SGEhren-dev"
version "1.0.0"
repository "https://github.com/SGEhren-dev/react-vite-fivem-boilerplate"

games {
	"gta5",
	"rdr3"
}

ui_page "renderer/dist/index.html"

client_script "dist/client.js"

files {
	"renderer/dist/index.html",
	"renderer/dist/**/*"
}
